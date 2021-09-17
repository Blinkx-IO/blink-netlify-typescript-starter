import { Handler } from "@netlify/functions";
import axios from "axios";

import * as dotenv from 'dotenv';
dotenv.config();

const blinkApiToken = process.env.blinkApiKey;

const handler : Handler = (event, _context, callback) =>{

if(event.queryStringParameters!= null){


const itemID = event['queryStringParameters']['id'];
const type = event['queryStringParameters']['dataFilter'];
let blinkdata : any;
axios.get(`https://blinkcms.com/api/v1/content-item?item_id=${itemID}&api_token=${blinkApiToken}&dataFilter=${type}`)
  .then(function (response) {
    // handle success
    blinkdata = response.data;
    callback(null, {
    statusCode:200,
    body: JSON.stringify(response.data)
  });
  })
  .catch(function (error) {
    // handle error
    callback(error,{
      statusCode:404,
      body: JSON.stringify(error)
    });
  
  })

  return blinkdata
}

else{
  return {statusCode: 404,
  body: JSON.stringify({ message: "Incorrect query params provided" }),
}}
}

export {handler}

