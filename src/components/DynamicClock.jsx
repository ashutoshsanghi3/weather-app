import React from 'react'
import CurrentTime from './CurrentTime'
const DynamicClock = ({data}) => {
    if(data.name!==undefined){
        return (
            <div id = "clock" style={{fontSize:"1.8rem"}}>
                <CurrentTime data={data}/>
            </div>
          )
    }
  
}

export default DynamicClock