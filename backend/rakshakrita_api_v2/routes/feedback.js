import express from 'express';
import { client } from '@gradio/client';
const router = express.Router();
import connect from '../db/connection.js';
import Feedback from '../db/models/Feedback.js';
await connect()
router.post('/', async(req, res) => {
    const {description,stationId,id,attachment,from} = req.body
    console.log(req.body)
    
    try {
        let translatedDesc;
        if(from==="hi"||from==="gu"){
        const app0 = await client("https://siddhantuniyal-rakshak-rit-translation.hf.space/--replicas/n3mu8/");
const result0 = await app0.predict("/predict", [		
				description, // string  in 'input_text' Textbox component		
				from, // string  in 'source_lang' Textbox component		
				"en", // string  in 'to_translate_lang' Textbox component
	]);
    translatedDesc = result0.data[0]
}else{
    translatedDesc = description
}
     console.log(translatedDesc)
        const app = await client("https://shubhamjaiswar-rakshakrit.hf.space/--replicas/0o901/");
        const result = await app.predict("/predict", [
            translatedDesc, // string  in 'sentiment_text' Textbox component
        ]);
        console.log(result)
        const type = (result.data[0]==="POSITIVE")?"Positive Feedback":"Negative Feedback"
        let issue = "none"
        if(type.includes("Negative")){
        const app2 = await client("https://siddhantuniyal-rakshak-rit-zero-shot.hf.space/--replicas/fivg4/");
        const result2 = await app2.predict("/predict", [
            translatedDesc, // string  in 'feedback' Textbox component
        ]);
        issue = result2.data[0]
        console.log(issue)
    }
        const feedback = await Feedback.create({ description:translatedDesc, issue, attachment, id, stationId, type, createdAt: Date.now() })   
        console.log(feedback);
        res.json({success: true, feedback: feedback})
    } catch (error) {
        console.log(error)
        res.json({
            message: error.message
        })
    }
    
});

export default router;