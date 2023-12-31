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

![image](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/assets/126230095/22bf0e27-92a5-4858-8177-4025d9e63e1a)
![image](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/assets/126230095/5a382984-0e79-415d-8cbf-2cea42ba5fe8)
![image](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/assets/126230095/9407d98d-ed84-4bc4-ad39-eef0880fa105)
![image](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/assets/126230095/34e45703-3b94-4a60-919c-5d139ab4f50b)


## Mobile App

1. **Authentication** for higher police authorities.
2. Displaying of **actual feedbacks** for all police stations.
3. Display various graphs and charts representing **analysis of feedbacks** for each police station.
4. Provision for editing the **customizable form** questions.

![Untitled design (22)](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/assets/126230095/c0644243-de98-42cf-89e8-36acace60145)
![Untitled design (23)](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/assets/126230095/c9ed19e0-ff84-448b-9b27-4fbae7fbd89a)


## ML Models

1. **[Translation model](https://siddhantuniyal-rakshak-rit-translation.hf.space/--replicas/8fzlk/)** to translate any language into any other language (Hindi:'hi', English:'en', Gujarati:'gu' and so on).
2. **[Sentiment Analysis model](https://shubhamjaiswar-rakshakrit.hf.space/--replicas/56uen/)** to detect whether feedback is negative or positive.
3. **[Zero-Shot Classification](https://siddhantuniyal-rakshak-rit-zero-shot.hf.space/--replicas/siyjo/)** to identify the issues in negative feedbacks.

![image](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/assets/126230095/109005b2-59ea-44b5-8b5b-0d653c12b72c)
![image](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/assets/126230095/42060628-97f7-44b0-81ab-62992b59ba05)
![image](https://github.com/vaxad/RJPOLICE_HACK_177_DjDawgs_1/assets/126230095/306d4f6a-66b0-420a-8185-cc3eee9f25a5)


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
