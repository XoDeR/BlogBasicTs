import express, { Request, Response } from 'express';
import dbJson from './../db.json';

const router = express.Router();

router.get("/get-posts", async (req: Request, res: Response) => {
	try {
		res.status(200).send({
			message: "Posts fetched successfully",
			success: true,
			data: dbJson.posts,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({message: "Error getting posts."})
	}
})

router.post("/new-post", async (req: Request, res: Response) => {
	try {
		console.log(req.body);
		
	} catch (error) {
		console.log(error);
		res.status(500).send({message: "Error creating a new post."})
	}
})

export default router;