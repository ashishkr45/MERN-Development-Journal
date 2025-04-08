import { Request, Response, Router } from "express";
import { z } from "zod";
import { Content, Tag } from "../database/bd";
import { auth } from "../middleware/middleware";

const contentRouter: Router = Router();

const contentSchema = z.object({
  type: z.enum([
    "image", "video", "article", "audio", "tweet", "link", "document",
    "youtube", "code", "thread", "note", "quote", "presentation", "event",
    "bookmark", "post", "reel", "story"
  ]),
  link: z.string().url(),
  title: z.string().min(1, "Title is required"),
  tags: z.array(z.string()).nonempty("Tags cannot be empty"),
});


contentRouter.post("/add", auth, (req: Request, res: Response) => {
  const handleContentPost = async () => {
    const parsedData = contentSchema.safeParse(req.body);
    if (!parsedData.success) {
      throw new Error(JSON.stringify({
        message: "Error in input format",
        errors: parsedData.error.format(),
      }));
    }

    const { type, link, title, tags } = parsedData.data;

    const tagIds = await Promise.all(
      tags.map(async (tagTitle) => {
        let tag = await Tag.findOne({ title: tagTitle });
        if (!tag) {
          tag = await Tag.create({ title: tagTitle });
        }
        return tag._id;
      })
    );

    const newContent = await Content.create({
      type,
      link,
      title,
      tags: tagIds,
      userId: req.userId,
    });

    return { message: "Content created successfully", content: newContent };
  };

  handleContentPost()
    .then((result) => {
      res.status(201).json({
        status: "success",
        message: result.message,
        data: { content: result.content },
      });
    })
    .catch((error) => {
      console.error("Error creating content:", error);
      if (error.message.startsWith("{")) {
        const parsedError = JSON.parse(error.message);
        res.status(400).json({
          status: "error",
          message: parsedError.message,
          error: parsedError.errors,
        });
      } else {
        res.status(500).json({
          status: "error",
          message: "Server error",
          error: error instanceof Error ? error.message : "Unknown error",
        });
      }
    });
});

contentRouter.get("/getAll", auth, (req: Request, res: Response) => {
    const handleContentGet = async () => {
        const userId = req.userId;
        const content = await Content.find({ userId })
          .populate("userId", "username")
          .populate("tags", "title");

        return res.status(200).json({
            content,
        });
    }
    handleContentGet().catch((error) => {
      return res.status(500).json({
        message: "Could not fetch content",
        error,
      });
    });
});

export default contentRouter;