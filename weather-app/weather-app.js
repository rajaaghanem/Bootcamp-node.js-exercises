const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=026cd97cacc7a3bd1587ddc0f5ced390&query=tel aviv";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("unable to connect");
//   } else if (response.body.error) {
//     console.log("unabla to find location");
//   } else {
//     console.log("the temperature is: ",response.body.current.temperature);
//   }
// });

// const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/haifa.json?access_token=pk.eyJ1IjoicmFqYWFnaGFuZW0iLCJhIjoiY2t5YTlkeDVsMDM4NzJ1bjBhc3Rmdm5wOCJ9.V0Pj86Ql9ewIQwk6iEil2g&limit=1";

// request({ url: geoUrl, json: true }, (error, response) => {
//     if (error) {
//       console.log("unable to connect");
//     } else if (response.body.features.length===0) {
//       console.log("unable to find location");
//     } else {
//       console.log("the long is: ",response.body.features[0].geometry.coordinates[0]);
//       console.log("the alt is: ",response.body.features[0].geometry.coordinates[1]);
//     }
//   });

const geoCode = (address, callback) => {
  const geoUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoicmFqYWFnaGFuZW0iLCJhIjoiY2t5YTlkeDVsMDM4NzJ1bjBhc3Rmdm5wOCJ9.V0Pj86Ql9ewIQwk6iEil2g&limit=1";
    request({ url: geoUrl, json: true }, (error, response) => {
        if (error){
            callback("unable to connect", undefined);
        }else if(response.body.features.length===0){
            callback("unable to find location", undefined);
        }else callback(undefined, {
            latitude: response.body.features[0].geometry.coordinates[1],
            longtude: response.body.features[0].geometry.coordinates[0],
            location: response.body.features[0].place_name,
        } );
    });

};

geoCode("haifa", (error, data)=>{
    console.log("error", error);
    console.log("data", data);
})
