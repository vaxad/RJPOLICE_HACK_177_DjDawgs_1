import { client } from '@gradio/client';
import express from "express"
const router = express.Router();

router.post('/', async (req, res) => {
    const { text } = req.body
    const ISSUE_API=process.env.ISSUE_API
    try {
        const app = await client(ISSUE_API);
        const result = await app.predict("/predict", [
            text, // string  in 'feedback' Textbox component
        ]);

        console.log(result.data);
        res.json({ issue: result.data })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
});

export default router;