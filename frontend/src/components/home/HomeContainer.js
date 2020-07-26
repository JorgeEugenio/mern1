import React from 'react'
import Navbar from '../parcials/Navbar'
import {Home} from './Home'
import {About} from './About'
import {NoMatch} from './NoMatch'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
class WeatherContainer extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Navbar/>
                <Router>
                    <Switch>
                        <Route exact path ="/" component={Home}/>
                        <Route path ="/about" component={About}/>
                        {/* <Route path ="/contact" component={Contact}/> */}
                        <Route component={NoMatch}/>
                    </Switch>
                </Router>

             </React.Fragment>   
        )
    
    }
}

export default WeatherContainer