import { client } from '@gradio/client';
import express from "express"
const router = express.Router();

router.post('/', async (req, res) => {
    const { text } = req.body
    try {
        const app = await client("https://siddhantuniyal-rakshak-rit-zero-shot.hf.space/--replicas/fivg4/");
        const result = await app.predict("/predict", [
            text, // string  in 'feedback' Textbox component
        ]);

        console.log(result.data);
        res.json({issue: result.data})
    } catch (error) {
        res.json({
            message: error.message
        })
    }
});

export default router;