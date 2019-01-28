const axios = require('axios');

const getLocation = async location => {
  const encodedUrl = encodeURI(location);

  const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyCh4bHoLVRg_asRcjQDqlGTwMnZ9hAT4Mc`);
  // .then(response => {
    // console.log(JSON.stringify(response.data, undefined, 2));
    // console.log(response.status);

    // console.log(response);

  //   const address = response.data.results[0].formatted_address;
  //   const lng = response.data.results[0].geometry.location.lng;
  //   const lat = response.data.results[0].geometry.location.lat;

  //   console.log(address, lng, lat);
  // })
  // .catch(err => console.log(err));

  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('No se encontraron datos para la ciudad que introduciste');
  }

  const address = response.data.results[0].formatted_address;
  const lon = response.data.results[0].geometry.location.lng;
  const lat = response.data.results[0].geometry.location.lat;

  return {
    address,
    lon,
    lat
  };
};

module.exports = {
  getLocation
};
