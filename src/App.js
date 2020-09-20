import React, { Component } from 'react';
import Particles from 'react-particles-js';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Prices from './components/Prices/Prices';
import Navigation from './components/Navigation/Navigation';
import Scroll from './components/Scroll/Scroll';
import Banner from './components/Banner/Banner';
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


const initialState = {
  this.handleClick = this.handleClick.bind(this);
  this.state = {
    active: true, 
    route: "/"
  }
}

class App extends React.Component {
  contstructor(props) {
    super(props);
    this.state = initialState
    

    }
  }

  this.handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }


  
  


  render() { 
    return (
      <div className="App">
        <Particles 
          className='particles'
          params={particlesOptions}
        />
        <Navigation 
          onClick={this.handleClick}
         />
        <Scroll> 
            <Home />
            <About />
            <Pricing />
            <Contact />
        </Scroll>
      </div>
      );
  }
  


export default App;
