import React, { Component } from 'react'
import  WeatherLocation from './WeatherLocation'
import Navbar from './parcials/Navbar'

class WeatherContainer extends Component {
    render(){
        return (
            <React.Fragment>
                <WeatherLocation />
                <Navbar/>
             </React.Fragment>   
        )
    
    }
}

export default WeatherContainer