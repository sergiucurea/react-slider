import React, { Component } from 'react';
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow'

export default class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [
                "./images/image0.jpg",
                "./images/image1.jpg",
                "./images/image2.jpg",
                "./images/image3.jpg",
                "./images/image4.jpg",
                "./images/image5.jpg",
                "./images/image6.jpg",
            ],
            currentIndex: 0,
            translateValue: -500,
            speed: 0.45,
            disabled: ""
        }
        this.state.images.push(this.state.images[0]);
        this.state.images.unshift(this.state.images[this.state.images.length - 2]);
    }
    goToPrevSlide() {
        setTimeout(function () {
            this.setState({
                disabled: ""
            })
        }.bind(this), 450);
        if (this.state.currentIndex <= 1) {
            setTimeout(function () {
                console.log("hello");
                this.setState(prevState => ({
                    currentIndex: this.state.images.length - 2,
                    translateValue: -(this.slideWidth()) * (this.state.images.length - 2),
                    speed: 0,
                }));
            }.bind(this)
                , 450);
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + (this.slideWidth()),
            speed: 0.45,
            disabled: "disabled"
        }));
    }
    
    goToNextSlide() {
        setTimeout(function () {
            this.setState({
                disabled: ""
            })
        }.bind(this), 450);
        if (this.state.currentIndex >= this.state.images.length - 3) {
            setTimeout(function () {
                this.setState(prevState => ({
                    currentIndex: 0,
                    translateValue: -(this.slideWidth()),
                    speed: 0
                }));
            }.bind(this)
                , 450);
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth()),
            speed: 0.45,
            disabled: "disabled"
        }));
    }

    slideWidth() {
        return document.querySelector('.slide').clientWidth
    }

    render() {
        return (
            <div className="slider" >
                <div className="slider-wrapper"
                    style={{
                        height: '100%',
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: `transform ease-in ${this.state.speed}s`
                    }}>
                    {
                        this.state.images.map((image, i) => (
                            <Slide key={i} image={image} />
                        ))
                    }
                </div>
                <LeftArrow goToPrevSlide={this.goToPrevSlide.bind(this)} disabled={this.state.disabled} />
                <RightArrow goToNextSlide={this.goToNextSlide.bind(this)} disabled={this.state.disabled} />
            </div>
        );
    }
}