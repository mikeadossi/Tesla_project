const parseLocation = (x, stateData) => {
    let data = stateData.length ? stateData[0][x] : null;
    if(data){ 
      data = data.replace("''","'"); 
      data = data.replace(/\s+/g, " "); // remove excess white space
      data = JSON.parse(data); 
      return data;
    }
  }

export default parseLocation;