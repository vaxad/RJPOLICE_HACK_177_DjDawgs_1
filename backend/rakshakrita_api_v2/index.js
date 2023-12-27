import express from 'express';
import cors from 'cors';
import typeRoute from './routes/type.js';
import translate from './routes/translate.js';
import issue from "./routes/issue.js"
import heatmap from "./routes/heatmap.js"
import feedback from "./routes/feedback.js"
import mail from "./routes/mail.js"
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config({
    path: './.env.local'
});
const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:truez
    optionSuccessStatus:200,
 }

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.json({
        message: 'workin'
    });
})

app.use("/type", typeRoute);
app.use("/translate", translate);
app.use("/issue", issue);
app.use("/heatmap", heatmap);
app.use("/feedback", feedback);
app.use("/mail", mail);


const port = process.env.PORT || 4001;
app.listen(/* port */ port, () => {  
    console.log(`Listening on port ${port}`);
})