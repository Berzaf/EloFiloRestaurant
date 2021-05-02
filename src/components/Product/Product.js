import React, { Fragment } from 'react';
import Productbox from './Productbox'
import pimg1 from '../../images/burgerFood.jpg'
import pimg2 from '../../images/specialPizza.jpg'
import pimg3 from '../../images/specialFoodunsplash.jpg'
import pimg4 from '../../images/FishFood.jpg'
import pimg5 from '../../images/drink1.jpg'
import pimg6 from '../../images/juiceDrink3.jpg'
import pimg7 from '../../images/specialJuice.jpg'
import pimg8 from '../../images/wineDrink2.jpg'

import './Product.css';

function Product() {
    return (
        <Fragment>
            <div id='product'>
                <h1>Special Meal</h1>
                <div className="a-container">
                    <Productbox image={pimg1} title="Burger" price ="$14"/>
                    <Productbox image={pimg2} title="Pizza" price="$17"/>
                    <Productbox image={pimg3} title="Mixed With friuts" price="$10"/>
                    <Productbox image={pimg4} title="Fish" price="$25"/>

                    
                </div>
            
            </div>
            <div id='product'>
                <h1>Special Drinks</h1>
                <div className="a-container">
                    <Productbox image={pimg5} title="Cocktail" price ="$8"/>
                    <Productbox image={pimg6} title="Juice" price="$12"/>
                    <Productbox image={pimg7} title="Special Juice" price="$10"/>    
                    <Productbox image={pimg8} title="Wine" price="$10"/>                
            
                </div>

            </div>
    
        </Fragment>


        
    )

    
}

export default Product;