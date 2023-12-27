import express from 'express';
import { client } from '@gradio/client';
const router = express.Router();

router.post('/', async (req, res) => {
    const { text } = req.body
    const TYPE_API='https://shubhamjaiswar-rakshakrit.hf.space/--replicas/56uen/'
    try {
        const app = await client(TYPE_API);
        const result = await app.predict("/predict", [
            text, // string  in 'sentiment_text' Textbox component
        ]);
        console.log(result.data);
        res.json({
            type: result.data[0]
        });
    } catch (error) {
        res.json({
            message: error.message
        })
    }

});

export default router;