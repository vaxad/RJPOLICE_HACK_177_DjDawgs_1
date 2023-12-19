
import express from "express"
// import {PythonShell} from 'python-shell';
import puppeteer from 'puppeteer';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

// const runModel = async (file,options)=>{
//     const response = await PythonShell.run(file,options);
//     return response;
// }

async function sendMail(recipientEmail, pdfBase64) {
  console.log(recipientEmail)
  const password = process.env.PASSWORD;
  // Create a Nodemailer transporter using your email service's credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail', 'yahoo', etc.
    auth: {
      user: 'testvaxad@gmail.com',
      pass: password,
    },
  });
    // Define the email message
  const mailOptions = {
    from: 'testvaxad@gmail.com',
    to: recipientEmail,
    subject: 'Report regading the performance of Police Stations in Gujarat',
    text: 'This mail is auto-generated every month by RakshakRita to keep you updated! You can access more insights and atual feedbacks by using our mobile app.',
    attachments: [
      {
        filename: `report_${(new Date(Date.now())).getMonth()}_${(new Date(Date.now())).getFullYear()}.pdf`,
        content: pdfBase64,
        encoding: 'base64',
      },
    ],
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

async function htmlToPdf(htmlString) {
    const browser = await puppeteer.launch({
        args: [
          "--disable-setuid-sandbox",
          "--no-sandbox",
          "--single-process",
          "--no-zygote",
        ],
        executablePath:
          process.env.NODE_ENV === "production"
            ? process.env.PUPPETEER_EXECUTABLE_PATH
            : puppeteer.executablePath(),
      });
    const page = await browser.newPage();
  
    // Set the content of the page with your HTML string
    await page.setContent(htmlString, { waitUntil: 'networkidle2' });
  
    // Generate PDF from the page
    // await page.pdf({ path: outputPath, format: 'A4' });
    const pdfBuffer = await page.pdf({ format: 'A4' });
  
    await browser.close();
    const pdfBase64 = Buffer.from(pdfBuffer).toString('base64');
  // Set up the recipient email address
   const recipientEmail = "varadprabhu111@gmail.com"
    await sendMail(recipientEmail, pdfBase64)
  }


router.post('/', async (req, res) => {
    try {
        // const response = await runModel('routes/pyfile/main.py',{})
        
        // const outputPath = 'output.pdf';
        // const htmlString = response.join(' ')
        // await sendMail("varadprabhu111@gmail.com", response[0])
//         htmlToPdf(htmlString)
//   .then(() => console.log('PDF generated successfully'))
//   .catch(error => {console.error('Error generating PDF:', error);  res.json({success: false});})
    // console.log(response)
        htmlToPdf(req.body.html)
        res.json({success: true})
    } catch (error) {
        res.json({
            message: error.message
        })
    }
});
  


export default router;