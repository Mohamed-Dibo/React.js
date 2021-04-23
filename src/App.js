import React, { Component } from "react";
import Status from "./components/Status";
import Form from "./components/Form";

class App extends Component {
  state = {
    name: "",
    country: "",
    temp: "",
    humidity: "",
    pressure: "",
    description: "",
    error:""
  };

   getdata = async (e)=> {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;
    let key = "0e7a433e680b124748151e219bb3245e";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${key}`;

    let res = await fetch(url);
    let data = await res.json();
   if(city && country){
     this.setState({
      name:data.name,
      country:data.sys.country,
      temp: data.main.temp,
      humidity:data.main.humidity,
      pressure:data.main.pressure,
      description: data.weather[0].description,
      error:""
     })
   }
   else
   {
    this.setState({
      name:'',
      country:'',
      temp: '',
      humidity:'',
      pressure:'',
      description: '',
      error:"city not found"
     })
     
   }
    
     
  }
  render() {
    return (
      <div className="App">
        <h3>Weather Today</h3>
        <Form getdata={this.getdata} />
        <Status 
          name={this.state.name}
          country={this.state.country}
          temp= {this.state.temp}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
