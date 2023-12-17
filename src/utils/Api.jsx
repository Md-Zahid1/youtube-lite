import axios from "axios";

const BASE_URL="https://youtube-data8.p.rapidapi.com"

// const options = {
  const options = {
   
   
    // headers: {
    //   'X-RapidAPI-Key': '36bf250ae7msh5958ce2f3d089d9p19c1f0jsnf7bceb1427ad',
    //   'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com'
    // }
    headers: {
      'X-RapidAPI-Key': '92cb54984fmsh9e368332f404d4ap14529ajsn6089449f75b0',
      'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com'
    }
  };
  


 export const fetchDataFromApi = async (url) => {
      const {data} = await axios.get(`${BASE_URL}/${url}`, options)
      return data;
      
  };