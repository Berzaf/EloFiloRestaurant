import React, { Component, Fragment } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact'
import Product from '../Product/Product'
import {Switch, Route, Redirect} from 'react-router-dom';
import Gallery from '../Gallery/Gallery';



class Main extends Component{
    state = {
        homePage: true,

    };


    render(){

        return(

            <Fragment>
                <Header/>   
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>

                        <Route path="/contact">
                            <Contact/>
                        </Route>

                        <Route path="/product">
                            <Product />

                        </Route>

                        <Route path="/gallery">
                            <Gallery />
                        </Route>
                        <Route path="/EloFiloRestaurantReact">
                            <Home />
                        </Route>

                        <Redirect to="/"/>

                    </Switch>                      

                <Footer/>
            </Fragment>

        );

    }


}
export default Main;