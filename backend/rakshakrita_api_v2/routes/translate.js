import express from 'express';
import { client } from '@gradio/client';
const router = express.Router();

router.post('/', async (req, res) => {
    const { text, from, to } = req.body
    const TRANSLATION_API=process.env.TRANSLATION_API
    try {
        const app = await client(TRANSLATION_API);
        const result = await app.predict("/predict", [
            text, // string  in 'input_text' Textbox component		
            from, // string  in 'source_lang' Textbox component		
            to, // string  in 'to_translate_lang' Textbox component
        ]);

        console.log(result.data);
        res.json({
            text: result.data[0]
        });
    } catch (error) {
        res.json({
            message: error.message
        })
    }

});

export default router;