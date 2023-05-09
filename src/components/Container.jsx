import React from 'react'
import Top from './Top'
import Bottom from './Bottom'

const Container = ({data}) => {
  return (
    <div className="container">

        <Top data={data} />
        
        {data.name!==undefined && 
          <Bottom data={data}/>
        }
        
      </div>
  )
}

export default Container