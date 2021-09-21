import { getDistance, parseLocation } from "./moduleExports";

const getLocations = (loc, lng, lat, prop) => {
  /* given the longitude and latitude of a zip code and a object containing state data this function returns Tesla location info sorted by closest to zip code coordinates */
  let sSortedArr = [];
  let scSortedArr = [];
  let clSortedArr = [];
  let sObj = {};
  let scObj = {};
  let clObj = {};
  let ll; // long lat
  let distance;
  let obj = parseLocation(loc, prop); 

  if (loc === "all_showrooms" && obj) {
    // if obj =/= null 
    for (let y = 0; y < obj.length; y++) {
      ll = obj[y][3]; // object with long and lat from obj
      // get distance
      distance = getDistance(lng, lat, ll["longitude"], ll["latitude"]);
      // push distance string into Arr
      sSortedArr.push(distance);
      // create object with distance as key and a[y] as value
      sObj[distance] = obj[y];
    }
    sSortedArr = sSortedArr.sort(); 
    return {
      sSortedArr,
      sObj,
    };
  }

  if (loc === "all_service_centers" && obj) { 
    for (let y = 0; y < obj.length; y++) {
      ll = obj[y][3]; // object with long and lat from obj
      distance = getDistance(lng, lat, ll["longitude"], ll["latitude"]);
      scSortedArr.push(distance);
      scObj[distance] = obj[y];
    }
    scSortedArr = scSortedArr.sort(); 
    return {
      scSortedArr,
      scObj,
    };
  }

  if (loc === "all_charging_locations" && obj) { 
    for (let y = 0; y < obj.length; y++) {
      ll = obj[y][3]; // object with long and lat from obj
      distance = getDistance(lng, lat, ll["longitude"], ll["latitude"]);
      clSortedArr.push(distance);
      clObj[distance] = obj[y];
    }
    clSortedArr = clSortedArr.sort(); 
    return {
      clSortedArr,
      clObj,
    };
  }

};

export default getLocations;
