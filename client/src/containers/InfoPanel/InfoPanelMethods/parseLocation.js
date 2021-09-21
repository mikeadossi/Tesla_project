const parseLocation = (x, props) => {
    let data = props.stateData.length ? props.stateData[0][x] : null;
    if(data){
      data = data.replace("''","\'"); 
      data = data.replace(/\s+/g, " "); // remove excess white space
      data = JSON.parse(data); 
      return data;
    }
  }

export default parseLocation;