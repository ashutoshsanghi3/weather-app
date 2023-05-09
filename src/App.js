import React,{useState} from "react";
import axios from "axios";
import Container from "./components/Container.jsx";
function App() {
  const [data,setData] = useState({});
  const [location,setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=698caf5066ec06dadb06c4d714027b57`;
  
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        
      }).catch((error) => {
        alert(error.response.data.message)
      })
      setLocation('')
    }
  }
  
  return (
    
    <div className="app">
      <div className="search">
        <input
        value={location}
        placeholder="Enter Location"
        onChange={event=>setLocation(event.target.value)}
        onKeyDown={searchLocation}
        type="text"
        />
      </div>
      <Container data={data} />
    </div>
  );
}

export default App;
