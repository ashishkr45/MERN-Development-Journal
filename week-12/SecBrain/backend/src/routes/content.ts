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


contentRouter.post("/board", auth, async (req: Request, res: Response) => {
  try {
    const parsedData = contentSchema.safeParse(req.body);
    if (!parsedData.success) {
      res.status(400).json({
        status: "error",
        message: "Invalid input format",
        error: parsedData.error.format(),
      });
      return;
    }

    const { type, link, title, tags } = parsedData.data;

    const exists = await Content.findOne({ link, userId: req.userId });
    if (exists) {
      res.status(409).json({ message: "Content already exists." });
      return;
    }

    const tagIds = await Promise.all(
      tags.map(async (tagTitle) => {
        let tag = await Tag.findOne({ title: tagTitle });
        if (!tag) tag = await Tag.create({ title: tagTitle });
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

    res.status(201).json({
      status: "success",
      message: "Content created successfully",
      data: { content: newContent },
    });

  } catch (error) {
    console.error("Error creating content:", error);
    res.status(500).json({
      status: "error",
      message: "Server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});


contentRouter.get("/board", auth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const content = await Content.find({ userId })
      .populate("userId", "username")
      .populate("tags", "title");

    res.status(200).json({ content });
  } catch (error) {
    res.status(500).json({
      message: "Could not fetch content",
      error,
    });
  }
});

contentRouter.delete("/delCont", auth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId as string;
    const contentId = req.body.contentId;

    const deleted = await Content.deleteMany({
      _id: contentId,
      userId: userId
    });

    res.status(200).json({
      status: "success",
      message: "Content deleted successfully",
      deletedCount: deleted.deletedCount,
    });

  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to delete content",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

contentRouter


export default contentRouter;