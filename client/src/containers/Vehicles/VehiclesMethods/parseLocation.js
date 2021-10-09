const parseLocation = (x, stateData) => {
    let data = stateData[x];
    if(data){ 
      data = data.replace("''","'"); 
      data = data.replace(/\s+/g, " "); // remove excess white space
      data = JSON.parse(data); 
      console.log('yes data...',data)
      return data;
    }
  }

export default parseLocation;