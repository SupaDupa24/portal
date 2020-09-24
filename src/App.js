import React, { Component } from 'react';
import Particles from 'react-particles-js';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Prices from './components/Prices/Prices';
import Navigation from './components/Navigation/Navigation';
import Scroll from './components/Scroll/Scroll';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';

import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}


class App extends React.Component {
  contstructor() {
    super();
    this.state = {
        route: '/'
  }};
    
    onRouteChange = (route) => {
      if (route === '/') {
        return this.setState(initialState);
      } else if (route === '/About') {
        this.setState(this.state.About);
      } else if (route === '/Contact') {
        this.setState(this.state.Contact);
      } else if (route === '/Pricing') {
        this.setState(this.state.Pricing);
      }
        this.setState({route:route});
    }
  
 

  render() { 
    return (
      <div className="App">
        <Particles 
          className='particles'
          params={particlesOptions}
        />
        <Navigation 
          onClick={this.onClick}
          onRouteChange={this.onRouteChange}
         />
        <Scroll> 
            <Banner />
            <Home />
            <About />
            <Prices />
            <Contact />
        </Scroll>
      </div>
      );
  }
  

  


export default App;
