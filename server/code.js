let zipcode_database = require('./zipcodes.json');

let TIMEZONE_MAP = Object.freeze({
  0: 'America/New_York',
  1: 'America/Chicago',
  2: 'America/Denver',
  3: 'America/Los_Angeles',
  4: 'America/Kentucky/Louisville',
  5: 'America/Indiana/Indianapolis',
  6: 'America/Detroit',
  7: 'America/Boise',
  8: 'America/Phoenix',
  9: 'America/Anchorage',
  10: 'Pacific/Honolulu',
  11: 'America/Indiana/Knox',
  12: 'America/Indiana/Winamac',
  13: 'America/Indiana/Vevay',
  14: 'America/Indiana/Marengo',
  15: 'America/Indiana/Vincennes',
  16: 'America/Indiana/Tell_City',
  17: 'America/Indiana/Petersburg',
  18: 'America/Menominee',
  19: 'America/Shiprock',
  20: 'America/Nome',
  21: 'America/Juneau',
  22: 'America/Kentucky/Monticello',
  23: 'America/North_Dakota/Center',
  24: 'America/Yakutat'
});

const getDistanceFromLatLonInKm = (lat1,lon1,lat2,lon2) => {
    let R = 6371; // Radius of the earth in km
    let dLat = deg2rad(lat2-lat1);  // deg2rad below
    let dLon = deg2rad(lon2-lon1); 
    let a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    let d = R * c; // Distance in km
    return d;
}

const deg2rad = (deg) => {
    return deg * (Math.PI/180)
}

console.log(getDistanceFromLatLonInKm(39.952583, -75.165222, 42.095554, -79.238609))

const lookup = (zipcode) => {
    if (zipcode_database.hasOwnProperty(zipcode)) {
        let timezone_index = zipcode_database[zipcode];
        if (TIMEZONE_MAP.hasOwnProperty(timezone_index)) {
            return TIMEZONE_MAP[timezone_index];
        }
    }
    return null;
}

console.log('Sample Result', lookup(90210));

