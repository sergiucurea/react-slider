import React from 'react'

const RightArrow = (props) => {
    return (
        <div className="nextArrow" onClick={props.goToNextSlide}>
            <button className="fa fa-arrow-right fa-2x" aria-hidden="true" disabled={props.disabled}></button>
        </div>
    );
}

export default RightArrow;

