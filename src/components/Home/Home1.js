import React, { Fragment } from 'react';
import { LocalForm } from 'react-redux-form';
import {
  Card, CardImg, CardBody, Button
} from 'reactstrap';
import './Home.css';

const home = (props) => {
    
  return (

    <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 class="text-center mt-5 mb-5" className ="welcom-text">Welcome to ELOFILO Restaurant!</h1>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 mt-4">
                    <Card border="primary" style={ {width: "20rem"} } className="mx-auto homeCard">
                        <CardBody>
                            <h3 className="text-center">Choose your Drink!</h3>
                        </CardBody>
                        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/assets/images/glass_wine.jpg'} alt="welcome" className="card-img-top" style={ {height: "200px"} }/>
                        <Button variant="primary">Order Here</Button>

                    </Card>
                </div>
                <div className="col-12 col-md-6 mt-4">
                    <Card border="warning" style={ {width: "20rem"} } className="mx-auto homeCard">
                        <CardBody>
                            <h3 className="text-center">Enjoy Your meal!</h3>
                        </CardBody>
                        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/assets/images/jongsun-lee-JnFGgVaFpmE-unsplash.jpg'} alt="enjoy" className="card-img-top" style={ {height: "200px"} }/>
                        
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 mt-4">
                    <CardBody>
                            <h3 className="text-center">Heat them up!</h3>
                        </CardBody>
                    <Card style={ {width: "20rem"} } className="mx-auto homeCard">
                        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/assets/images/lunch.jpg'} alt="Heat them up" className="card-img-top" style={ {height: "200px"} }/>

                    </Card>
                </div>
                <div className="col-12 col-md-6 mt-4">
                        <CardBody>
                            <h3 className="text-center">Eat it!</h3>
                        </CardBody>
                    <Card style={ {width: "20rem"} } className="mx-auto homeCard">
                        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/assets/images/wine.jpg'} alt="eat it" className="card-img-top" style={ {height: "200px"} }/>

                    </Card>
                </div>
            </div>
        </div>
   
    </Fragment>

  );
};

export default home;