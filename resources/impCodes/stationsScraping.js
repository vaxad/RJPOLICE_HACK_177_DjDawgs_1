// Loading the dependencies. We don't need pretty because we shall not log html to the terminal
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

// URL of the page we want to scrape

const stns = [];
const url = "https://vymaps.com/IN/Rajasthan/police-station/";
for (let i = 1; i < 60; i++) {
    scrapeData(`https://vymaps.com/IN/Rajasthan/police-station/${i}`);
}
// Async function which scrapes the data
const setNames = new Set();
async function scrapeData(url) {
  try {
    // Fetch HTML of the page we want to scrape
    const { data } = await axios.get(url);
    // Load HTML we fetched in the previous line
    const $ = cheerio.load(data);
    // Select all the list items in plainlist class
    const listItems = $(".six p");
    // Stores data for all countries
    // Use .each method to loop through the li we selected
    listItems.each((idx, el) => {
      // Object holding data for each country/jurisdiction
      const stn = { name: "", area: "", district: "", state: "Gujarat", pincode: "", latitude: "", longitude: "" };
      // Select the text content of a and span elements
      // Store the textcontent in the above object
      stn.name = $(el).children("b").children("a").text();
      let text = $(el).text().replace(/\t/g,"").split("\n")[2];
      if(text){
      text = text.split(",");
      stn.area = text[0];
      stn.district = text.length<2?text[0]:text[1].includes(" ")? text[1].split(" ").length>2? text[1].split(" ")[2]: text[1].split(" ")[1]: text[1];
      stn.pincode = text[text.length - 1]
      }
      stn.latitude = $(el).children("a").text().replace(/\s/g,"").split(",")[0]
      stn.longitude = $(el).children("a").text().replace(/\s/g,"").split(",")[1]
      // Populate countries array with country data
      setNames.add(stn.district);
      console.log(stn);
      if(stn.name!==""&&stn.pincode!==""&&stn.latitude!==""&&stn.longitude!=="")
      stns.push(stn);
    });
    // Logs countries array to the console
    console.dir(stns.length);
    console.log(setNames);
    // Write countries array in countries.json file
    if(stns.length>0){
    fs.writeFile("rajasthanPS.json", JSON.stringify(stns, null, 2), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Successfully written data to file");
    });
  }
  } catch (err) {
    console.error(err);
  }
}
scrapeData("https://vymaps.com/IN/Gujarat/police-station/")
module.exports = scrapeData