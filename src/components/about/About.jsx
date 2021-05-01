import React from 'react'
import './about.css'
import Heading from '../Heading/Heading'
import Food from '../../images/food.png'
function About() {
    return (
        <>
        <section className="aboutSection div_big">
            <div className="headingDiv">
            <Heading name="About Us" para="We love eating as much as you do. Hence We has been serving our customers satisfactorily since 1998. Welcome to Ryori."/>            
            </div>

            <div className="aboutDiv">
                <div className="row aboutrow">
                    <div className="aboutPara col-md-5">
                        <div className="aboutHeading">The Origin</div>
                        <p>Lorem ipsum dolor sit, amet  <span className="redText">consectetur</span> adipisicing elit. Esse inventore cum ab exercitationem vitae sequi id magnam omnis, numquam officiis illum obcaecati, neque, iure eaque consequatur reiciendis pariatur. Tempore voluptas sapiente praesentium corporis iste expedita officiis iusto perferendis quod obcaecati? Alias maxime consectetur id beatae laudantium, aliquid quidem iste reiciendis?</p>
                        <p>Lorem ipsum dolor sit amet consectetur <span className="redText">adipisicing elit.</span>  Debitis nostrum ducimus a facere iste voluptatum dicta vel eum voluptates nesciunt.</p>
                    </div>
                    <div className="aboutImg col-md-4">
                        <img src={Food} alt="pic of japanese cuisine"/>
                    </div>
                </div>
                <div className="row aboutrow">
                    <div className="aboutPara col-md-5">
                        <p>Lorem ipsum dolor sit, amet <span className="redText"> consectetur </span>adipisicing elit. Esse inventore cum ab exercitationem vitae sequi id magnam omnis, numquam officiis illum obcaecati, neque, iure eaque consequatur reiciendis pariatur. Tempore voluptas sapiente praesentium corporis iste expedita officiis iusto perferendis quod obcaecati? Alias maxime consectetur id beatae laudantium, aliquid quidem iste reiciendis?</p>
                        <p>Lorem ipsum dolor sit amet consectetur<span className="redText">  adipisicing </span>elit. Debitis nostrum ducimus a facere iste voluptatum dicta vel eum voluptates nesciunt.</p>
                    </div>
                    <div className="aboutImg col-md-5">
                    <img src="https://images.pexels.com/photos/590478/pexels-photo-590478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    </div>
                </div>
            </div>

        </section>   
        </>
    )
}

export default About
