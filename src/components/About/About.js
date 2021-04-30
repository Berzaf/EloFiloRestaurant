import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMugHot} from '@fortawesome/free-solid-svg-icons'
import { faMortarPestle} from '@fortawesome/free-solid-svg-icons'
import {
    Card, CardImg, CardBody, Button
  } from 'reactstrap';

import './About.css';
library.add(faMugHot);
library.add(faMortarPestle)

const About = (props) => {
    

        return(
            <Fragment>
                     <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h3 class="text-center mt-5 mb-5">About Us!</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div class="container">

                        <div class="row row-content align-items-center">
                            <div id="about">

                                <img src={process.env.PUBLIC_URL + '/assets/images/image2.jpg'} width="500" height="500" alt="" className="image-about"/>
                            </div>
                            <div class="col text-left ">
                                <h4 class="font-weight-bold">Welcome</h4>

                                <p class="w-55 ml-auto"> We are loyal to our customers and our employees.
                                    Enjoy our dishes and make the most of your background with us!
                                </p>
                            </div>
                        </div>
                        <div class="row row-content align-items-center">
                            <div className="hotmug">
                                <FontAwesomeIcon icon="mug-hot" size="lg" />
                            </div>
                            <div class="col-6 text-left">
                                <h4 class="font-weight-bold">Drinks</h4>
                            </div>
                            <div class="col text-left">
                                <p class="w-55 mr-auto">We provide the highest quality drink.</p>
                            </div>
                            
                        </div>
                        <div class="row row-content align-items-center">
                            <div className="mortarpestle">
                                <FontAwesomeIcon icon="mortar-pestle" />
                            </div>
                            <div class="col-6">

                                <h4 class="font-weight-bold">Food</h4>
                            </div>
                            <div class="col text-left">

                                <p class=" w-55 ml-auto "> Here at Elofilo Restaurant, we make it easy to eat clean, plant-rich, and highly-nutritious food.
                                    Each ingredient is intentionally sourced and only use organic.</p>
                            </div>
                        </div>
                    </div>
                    
                    
            </Fragment>
        );
};

export default About;