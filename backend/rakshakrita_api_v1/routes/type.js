import express from 'express';
import { client } from '@gradio/client';
const router = express.Router();

router.post('/', async(req, res) => {
    const {text} = req.body
    const url = process.env.TYPE_API;
    try {
        const app = await client(url);
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