/*import logo from './logo.svg';
import image from "./assets/image.jpg";
import Greet from './Components/Greet';


function App() {
  return (
    <>
      <Greet course="React" campus="Bhawarkua" photo={logo}/>
      <Greet course="SQL" campus="VijayNagar" photo={logo}/>
      <Greet course="Python" campus="Ujjain" photo={image}/>
      <Greet course="React" campus="Vadodara" photo={image}/>
        </>
  );
}

export default App; /*

/*import React from "react";
import Product from "./Components/Product";
import Laptopimage from "./assets/Laptop.png";
import  Mobileimage from "./assets/Mobile.png";
import Headphonesimage from "./assets/Headphones.png";

function App() {
  return (
    <div>
      <h1>Product Details :</h1>

    <div className="product-container">

      <Product
        feature="Dell 15 Laptop"
        rating="4.7 ⭐⭐⭐⭐⭐"
        price={50000}
        brand="Dell"
        image={Laptopimage}
      />

      <Product 
        feature="OnePlus Nord CE6 5G"
        rating="5.0⭐⭐⭐⭐⭐"
        price={30000}
        brand="Samsung"
        image={Mobileimage}
      />

      <Product
        feature="Boat Rockerz 412 Wireless Headphones"
        rating="4.5⭐⭐⭐⭐"
        price={2500}
        brand="Boat"
        image={Headphonesimage}
      />
    </div>
    </div>
  );
}

export default App;/*

/*import React from "react";
import Navigation from "./Components/Navigation";
import HeroSection from "./Components/Hero";
import Shoesimg from  "./assets/Shoes.png";

function App() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <img src={Shoesimg} alt="Hero" />
    </div>
  );
}

export default App;*/
/*
import StateHook from './Components/StateHook';
import SmartCounter from "./Components/Task1";
import AgeCalculator from "./Components/Task2";
import LoginForm from "./Components/Task3";
import ProductQuantity from "./Components/Task4";
import CharacterCounter from "./Components/Task5";
import TemperatureConverter from "./Components/Task6";
import Studentresult from "./Components/Task7";
import TrafficLight from './Components/Task8';
import Balance from './Components/Task9';
import ShoppingCart from './Components/Task10';
import Visibility from './Components/Visibilty';
import Bulb from './Components/Bulb';
import Arr from './Components/Array';
function App() {
  return (
    <div>
      <StateHook />
      <TemperatureConverter />
      <Studentresult />
      <SmartCounter />
      <AgeCalculator />
      <LoginForm />
      <ProductQuantity />
      <CharacterCounter />
      <TrafficLight />
      <Balance />
      <ShoppingCart />
      <Visibility />
      <Bulb />
      <Arr />
    </div>
  );
} 
export default App;
*/
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact"; 
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

