import express from 'express';
import cors from 'cors';
import typeRoute from './routes/type.js';
import translate from './routes/translate.js';
import issue from "./routes/issue.js"
import mail from "./routes/mail.js"
import dotenv from 'dotenv';
dotenv.config({
    path: './.env.local'
});
// import bodyParser from 'body-parser';
const app = express();
// app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb', extended:true} ));

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Referrer-Policy', 'no-referrer');
    next();
  });
app.get('/', (req, res) => {
    res.json({
        message: 'workin'
    });
})

app.use("/type", typeRoute);
app.use("/translate", translate);
app.use("/issue", issue);
app.use("/mail", mail);

const port = process.env.PORT || 4000;
app.listen(/* port */ port, () => {  
    console.log(`Listening on port ${port}`);
})