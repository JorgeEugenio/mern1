import React from 'react'
import NavigationBar from '../parcials/Navigationbar'
import {Home} from './Home'
import {About} from './About'
import {Contact} from './Contact'
import {NoMatch} from './NoMatch'
import {Layout} from './Layout'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
class WeatherContainer extends React.Component {
    render(){
        return (
            <React.Fragment>
                <NavigationBar/>
                <Layout>
                    <Router>
                        <Switch>
                            <Route exact path ="/" component={Home}/>
                            <Route path ="/about" component={About}/>
                            <Route path ="/contact" component={Contact}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </Router>
                </Layout>
                
             </React.Fragment>   
        )
    
    }
}

export default WeatherContainer