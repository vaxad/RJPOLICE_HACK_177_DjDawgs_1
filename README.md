# RakshakRita - Empowering Citizen Voices

## Project Overview

RakshakRita is a platform designed to empower citizens by providing them with a voice to express their opinions and concerns. It serves as a bridge between the public and law enforcement, ensuring that citizen feedback is not only heard but also acted upon. This README provides an overview of the project and its features.

## How It Works

Rakshakrita operates on a simple yet effective process:

1. **Access the Platform**: Users can voice their opinions by scanning the QR code, which redirects them to the official Rakshakrita website.

2. **User Registration and Anonymity**: For first-time users, a unique ID is generated to distinguish between users without compromising anonymity. The user's location is verified within a 100-meter radius of the police station to ensure local relevance.

3. **Multilingual Support**: Rakshakrita supports multiple languages, allowing users to express themselves in the language they are most comfortable with.

4. **User-Friendly Feedback Form**: The feedback form provides a user-friendly experience, offering an array of options. Users fill a mandatory field describing their problem, answer objective questions, and can use speech-to-text or attach media for more detailed feedback.

5. **Machine Learning Analysis**: Feedback elements undergo analysis through a machine learning model, categorizing descriptions as positive or negative. The results are stored in a database for authorities to review and generate reports.

6. **Additional Features**:
    - Feedback Reports: Users can view reports highlighting the public opinion on different police stations.
    - Live Heatmaps: Visual representation of the intensity of negative feedback for various localities.

7. **Periodic Reports to Higher Authorities**: Regular reports are sent to higher authorities, providing detailed insights into police stations under their jurisdictions. This aids in identifying and addressing potential issues promptly.

## Website

1. Users can scan the qr codes stuck outside police stations via our website/any qr code scanner; they will then be redirected to the feedback form of that particular police station on the website.
2. Users are shown their distance from the police station using live maps.
3. Users can submit their feedback by typing or using speech recognition feature in the website(available in hindi as well as english).
4. A customizable form(only by police authorities) is also available to fill for the users.
5. Users can view the performance of their nearby police stations.
6. Live heatmaps showing distribution of negative feedbacks is also available.

## Mobile App

1. Authentication for higher police authorities.
2. Displying of actual feedbacks for all police stations.
3. Display of various graphs and charts representing analysis of feedbacks for each police station.
4. Provision for editing the customizable form questions.

## ML Models

1. Translation model to translate any language into any other language (Hindi:'hi', English:'en', Gujarati:'gu' and so on).
2. Sentiment Analysis model to detect whether a feedback is negative or positive.
3. Zero shot classification to identify the issues in negative feedbacks.

## Other Features

1. Heatmaps are generated on the real-time data of feedbacks and then displayed on the website using live maps.
2. Automated pdf generation (analysis, graphs and charts on all the feedbacks) and mailing to all the authorities

## Database

1. Scraped 2.7k police stations (name, latitude, longitude, district) of Rajasthan.
2. Generated qr code for each of the police stations.
3. Generated 25k sample feedbacks in order to test heatmaps, report generation, analysis and other features.

## Additional Information

For more details on Rakshakrita, visit our [official website](https://rakshakrita0.vercel.app/). Your feedback is crucial in making a positive impact on law enforcement and public safety.

Thank you for using Rakshakrita. Your voice shall not go unheard. Together, we make a difference!
