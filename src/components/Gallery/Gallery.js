import React from 'react';
import { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';


const Gallery = () => {
  return (
    <Fragment>
            <Carousel fade={true} pause={false}>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src= {process.env.PUBLIC_URL + '/assets/images/breakfast2.jpg'}
                />
                <Carousel.Caption>
                <h3>Foods and Drinks</h3>
                <p>Enjoy our food and spcial drinks</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/assets/images/specialWine.jpg'}
                />
                <Carousel.Caption>
                <h3>Foods and Drinks</h3>
                <p>Enjoy our food and spcial drinks</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/assets/images/coffee.jpg'}
                />
                <Carousel.Caption>
                <h3>Foods and Drinks</h3>
                <p>Enjoy our food and spcial drinks</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/assets/images/all_vegtables.jpg'}
                />
                <Carousel.Caption>
                <h3>Foods and Drinks</h3>
                <p>Enjoy our food and spcial drinks</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/assets/images/burgerFood.jpg'}
                />
                <Carousel.Caption>
                <h3>Foods and Drinks</h3>
                <p>Enjoy our food and spcial drinks</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/assets/images/specialPizza.jpg'}
                />
                <Carousel.Caption>
                <h3>Foods and Drinks</h3>
                <p>Enjoy our food and spcial drinks</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/assets/images/specialFoodunsplash.jpg'}
                />
                <Carousel.Caption>
                <h3>Foods and Drinks</h3>
                <p>Enjoy our food and spcial drinks</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/assets/images/breakfast4.jpg'}
                />
                <Carousel.Caption>
                <h3>Foods and Drinks</h3>
                <p>Enjoy our food and spcial drinks</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/assets/images/cockDrink.jpg'}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Foods and Drinks</h3>
                <p>Enjoy our food and spcial drinks</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/assets/images/specialJuice.jpg'}
                />
                <Carousel.Caption>
                <h3>Foods and Drinks</h3>
                <p>Enjoy our food and spcial drinks</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/assets/images/SpecialWisky.jpg'}
                />
                <Carousel.Caption>
                <h3>Foods and Drinks</h3>
                <p>Enjoy our food and spcial drinks</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/assets/images/FishFood.jpg'}
                />
                <Carousel.Caption>
                <h3>Foods and Drinks</h3>
                <p>Enjoy our food and spcial drinks</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/assets/images/lunch.jpg'}
                />
                <Carousel.Caption>
                <h3>Foods and Drinks</h3>
                <p>Enjoy our food and spcial drinks</p>
                </Carousel.Caption>
            </Carousel.Item>

            </Carousel>
    </Fragment>    
  )
}
export default Gallery;
