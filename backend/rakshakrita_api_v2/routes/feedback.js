import express from 'express';
import { client, duplicate } from '@gradio/client';
const router = express.Router();
import connect from '../db/connection.js';
import Feedback from '../db/models/Feedback.js';
import esource from 'eventsource';
global.EventSource = esource
await connect()
router.post('/', async (req, res) => {
    const { description, stationId, id, attachment, from } = req.body
    console.log(req.body)
    const ML_API=process.env.ML_API
    console.log(ML_API)
    try {
        const app = await duplicate('https://siddhantuniyal-rakshak-rit-pipeline.hf.space/--replicas/ocylt/',{hf_token:"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"});
        const job = app.submit("/predict", [
            description, // string  in 'sentiment_text' Textbox component
        ]);
        const result = await job.result();
        console.log(result)
        const type = (result.data[0].toLowerCase().includes("positive")) ? "Positive Feedback" :  "Negative Feedback"
        const issue = result.data[0]
        const score = parseFloat(result.data[1])
        const feedback = await Feedback.create({ description: translatedDesc, issue, attachment, id, stationId, score, type, createdAt: Date.now() })
        console.log(feedback);
        res.json({ success: true, feedback: feedback })
    } catch (error) {
        console.log(error)
        res.json({
            message: error.message
        })
    }

});

export default router;