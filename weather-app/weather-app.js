const request = require("request");

const address= process.argv[2];

const forcast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=026cd97cacc7a3bd1587ddc0f5ced390&query=" +
    latitude +
    "," +
    longitude;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect", undefined);
    } else if (response.body.error) {
      callback("unable to find location", undefined);
    } else
      callback(undefined, {
        temperature: response.body.current.temperature,
      });
  });
};

// forcast (32.8, 34.98333, (error, data)=>{
//     console.log("forcast error", error);
//     console.log("forcast data", data);
// })

const geoCode = (address, callback) => {
  const geoUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoicmFqYWFnaGFuZW0iLCJhIjoiY2t5YTlkeDVsMDM4NzJ1bjBhc3Rmdm5wOCJ9.V0Pj86Ql9ewIQwk6iEil2g&limit=1";
  request({ url: geoUrl, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect", undefined);
    } else if (response.body.features.length === 0) {
      callback("unable to find location", undefined);
    } else
      callback(undefined, {
        latitude: response.body.features[0].geometry.coordinates[1],
        longtude: response.body.features[0].geometry.coordinates[0],
        location: response.body.features[0].place_name,
      });
  });
};

// geoCode("haifa", (error, data) => {
//   console.log("geoCode error", error);
//   console.log("geoCode data", data);
// });

geoCode(address, (error, data) => {
  if (error) return console.log("geoCode error", error);
  forcast(data.latitude, data.longitude, (error, forcastData) => {
    if (error) return console.log("forcast error", error);
    console.log("forcast data", forcastData);
  });
});
