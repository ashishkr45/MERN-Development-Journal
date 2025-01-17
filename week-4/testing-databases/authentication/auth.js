const jwt = require("jsonwebtoken");
const JWT_SECRET = "MatureLadykiller47";

function auth(req, res, next) {
	const token = req.headers.token;

	const decodedUser = jwt.verify(token, JWT_SECRET);

	if(decodedUser) {
		req.userId = decodedUser.id;
		next();
	} else {
		res.status(403).json({
			message: "Not valid Token"
		});
	}
}

module.exports = {
	auth,
	JWT_SECRET
}