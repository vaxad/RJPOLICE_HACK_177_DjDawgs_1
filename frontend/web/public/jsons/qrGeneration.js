const connect = require('../../lib/db/connection');
const Stations = require('../../lib/db/models/Stations');
const fs = require('fs');
const qr = require('qrcode');
const axios = require('axios');
// Sample array of objects with a field to convert to QR code
const data = require('./stations.json')
connect()
// Directory where QR code images will be saved
const outputDirectory = './qrcodes/';

// Ensure the output directory exists
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

// Function to generate and save QR codes
function generateQRCode(data) {
  data.forEach((item) => {
    const id = item._id.$oid;
    const qrCodeData = `https://rakshakrita0.vercel.app/feedback/${id}` // Convert the field to QR code
    const fileName = `${outputDirectory}${id}.png`;

    qr.toDataURL(qrCodeData, async (err, url) => {
      if (err) {
          console.error(err);
          return NextResponse.json("not ok")

      } else {
          // Upload the QR code to Cloudinary

          const formData = new FormData();
          formData.append('file', url);
          formData.append('upload_preset', 'rakshakrita');
          const response = await axios.post(
              'https://api.cloudinary.com/v1_1/ddhncnedj/image/upload',
              formData
          );

          //.log(response.statusText);
          if (response.statusText === "OK") {
              myPost = await Stations.findById(id)
              myPost.qr = response.data.url
              myPost.save()
          } else {

          }
      }
  });
  });
}

// Call the function to generate and save QR codes
generateQRCode(data);
