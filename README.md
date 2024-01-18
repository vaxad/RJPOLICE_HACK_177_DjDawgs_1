# RakshakRita - Empowering Citizen Voices

## [Demo](https://youtu.be/n4aMHyk1JCk)

## [Workflow](https://youtu.be/5ULKW0WCpIo)

## Project Overview

**RakshakRita** is a platform designed to empower citizens by providing them with a voice to express their opinions and concerns. It serves as a bridge between the public and law enforcement, ensuring that citizen feedback is not only heard but also acted upon. This README provides an overview of the project and its features.

## How It Works

**Rakshakrita** operates on a simple yet effective process:

1. **Access the Platform**: Users can voice their opinions by scanning the QR code, which redirects them to the official Rakshakrita website.

2. **User Registration and Anonymity**: For first-time users, a unique ID is generated to distinguish between users without compromising anonymity. The user's location is verified within a 100-meter radius of the police station to ensure local relevance.

3. **Multilingual Support**: Rakshakrita supports multiple languages, allowing users to express themselves in the language they are most comfortable with.

4. **User-Friendly Feedback Form**: The feedback form provides a user-friendly experience, offering an array of options. Users fill in a mandatory field describing their problem, answer objective questions, and can use speech-to-text or attach media for more detailed feedback.

5. **Machine Learning Analysis**: Feedback elements undergo analysis through a machine learning model, categorizing descriptions as positive or negative. The results are stored in a database for authorities to review and generate reports.

6. **Additional Features**:
    - Feedback Reports: Users can view reports highlighting the public opinion on different police stations.
    - [Live Heatmaps](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/blob/main/resources/impCodes/heatmapData.py): Visual representation of the intensity of negative feedback for various localities.

7. **Periodic Reports to Higher Authorities**: Regular reports are sent to higher authorities via the mobile app and [mail](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/blob/main/resources/impCodes/pdfMailing.js), providing detailed insights into police stations under their jurisdictions. This aids in identifying and addressing potential issues promptly.

## Website

1. Users can **scan the QR codes** stuck outside police stations via our website/any QR code scanner; they will then be redirected to the feedback form of that particular police station on the website.
2. Users are shown their distance from the police station using **live maps**.
3. Users can submit their feedback by typing or using the **speech recognition** feature on the website(available in Hindi as well as English).
4. A **customizable form** (only by police authorities) is also available to fill for the users.
5. Users can view the **performance** of their nearby police stations.
6. **Live heatmaps** showing the distribution of negative feedbacks is also available.

![image](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/assets/126230095/87d1049a-14f7-4e37-929f-6862242d09c3)
![image](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/assets/126230095/a2ad3e1c-2c7b-4b63-92bd-dc63fa9fe351)
![image](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/assets/126230095/5db644b3-651d-4e44-9d25-406dd6b16b1a)
![image](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/assets/126230095/c56dbaac-7b8c-493c-b174-a8c51c3b0538)



## Mobile App

1. **Authentication** for higher police authorities.
2. Displaying of **actual feedbacks** for all police stations.
3. Display various graphs and charts representing **analysis of feedbacks** for each police station.
4. Provision for editing the **customizable form** questions.

![Untitled design](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/assets/126230095/3a38bcbd-d940-4efb-bd71-a4f11f7ebdef)
![Untitled design (1)](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/assets/126230095/01673ca3-a8ef-42ec-baae-6cd8bafa0c70)
![Untitled design (2)](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/assets/126230095/058b3ac3-46e7-461f-9ec1-52b910790037)


## ML Models

1. **[Translation+Spam+Sentiment+Issue-Classification Model](https://huggingface.co/spaces/Tirath5504/geminiSentiment)** to incorporate Translation, Spam Detection, Sentiment Analysis, and Issue Classification models 
2. **[Chatbot Model](https://huggingface.co/spaces/Tirath5504/Gemini_Chatbot)** enhance user experience, provide quick assistance, and streamline the feedback collection process.
3. **[Personalised-SMS Model](https://huggingface.co/spaces/Tirath5504/gemini_customized_sms)** enhance communication and engagement with the community.

![Gemini Chatbot - a Hugging Face Space by Tirath5504 - Google Chrome 18-01-2024 09_50_09](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/assets/126230095/15841429-d030-4e70-b564-af45e5015925)
![Gemini Chatbot - a Hugging Face Space by Tirath5504 - Google Chrome 18-01-2024 09_49_31](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/assets/126230095/e293a8a3-0783-4787-94ec-3c457078d78e)
![Gemini Chatbot - a Hugging Face Space by Tirath5504 - Google Chrome 18-01-2024 09_50_31](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/assets/126230095/bdc13e02-e4c8-441b-a2c1-6ae38d8ff86d)


## Other Features

1. [**Heatmap data**](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/blob/main/resources/database/heatmaps.csv) is generated of the *real-time* data of feedbacks and then displayed on the website using [**live maps**](https://drive.google.com/file/d/1FfzolH5WF_G81cw2efhyw9GvcaYdgSE1/view?usp=drive_link).
3. **Automated** [**PDF**](https://drive.google.com/file/d/1GgCHycRBoMvR2AxwcVsjAfsHjEUwC4QV/view?usp=drive_link) generation (analysis, graphs, and charts on all the feedbacks) and *mailing* to all the authorities.


## Database

1. Scraped [**2.7k** police stations](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/blob/main/resources/database/stations.csv) (name, **latitude**, **longitude**, district) of Rajasthan.
2. **Generated** [**QR code**](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/tree/main/resources/database/qrcodes) for *each* of the police stations and stored [on cloud](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/blob/main/resources/qrcodes.txt).
3. Generated [**25k** sample feedbacks](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/blob/main/resources/database/feedbacks.csv) to test heatmaps, report generation, analysis and other features.

## Under Development

1. **Mobile Application UI Enhancement**: The mobile application's user interface is set to undergo improvements, focusing on enhancing the overall user experience and visual appeal.

2. **AI Chatbot Integration**: A feature-rich AI chatbot is in the planning stage for integration into the platform. This addition aims to provide users with an interactive and intelligent interface, offering assistance and guidance as they navigate the feedback process.

3. **Website UI/UX Redesigning**: We are planning to implement the design system suggested by [UX4G](https://www.ux4g.gov.in/) - a Digital India initiative, to enhance the user’s experience.

4. **Additional Features**: Ongoing discussions and planning are in progress for the incorporation of additional features to elevate further the functionality and usability of both the website and mobile application. The specifics of these features will be defined as the development roadmap evolves.

## Additional Information

For more details on **Rakshakrita**, visit our [official website](https://rakshakrita0.vercel.app/). Your feedback is crucial in making a positive impact on law enforcement and public safety.

Thank you for using Rakshakrita. Your voice shall not go unheard. Together, we make a difference!
