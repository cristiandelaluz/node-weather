const axios = require('axios');
const API_KEY = '7253ce58866657c5fc38264f41640b34';

const getWeather = async (lat, lon) => {
  response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&units=metric&appid=${ API_KEY }`);

  return response.data.main.temp;
};

module.exports = {
  getWeather
};