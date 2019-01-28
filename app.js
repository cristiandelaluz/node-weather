const location = require('./location/location');
const weather = require('./weather/weather');
const argv = require('yargs').options({
  direccion: {
    demand: true,
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener en el clima'
  }
}).argv;

const getInfo = async () => {
  try {
    const locationInfo = await location.getLocation(argv.direccion);
    const celsius = await weather.getWeather(locationInfo.lat, locationInfo.lon);

    return `El clima de ${ locationInfo.address } es de C° ${ celsius }`;
  } catch (error) {
    return `No se pudo determinar el clima de ${ argv.direccion }`;
  }
};

getInfo()
  .then(message => console.log(message))
  .catch(err => console.log(err));