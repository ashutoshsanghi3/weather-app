import React from 'react'

const Location = ({data}) => {
    var value=null;
    const regionNames = new Intl.DisplayNames(
        ['en'], {type: 'region'}
      );
    if(data.sys!==undefined){
        if(data.name!==regionNames.of(data.sys.country)){
            value=data.sys.country
        }
    }
    let city=`${data.name} , ${value}`
    if(value!==null){
      return (
        <p>{city}</p>
      )
    }else{
      return (
        <p>{data.name}</p>
      )
    }
  
}

export default Location
// Will show country code only with city name or place name but won't show it when country is used in search bar