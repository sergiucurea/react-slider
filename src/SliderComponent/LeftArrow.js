import React from 'react';

const LeftArrow = (props) => {
    return (
        <div className="backArrow" onClick={props.goToPrevSlide}>
            <button className="fa fa-arrow-left fa-2x s" aria-hidden="true" disabled={props.disabled}></button>
        </div>
    );

}

export default LeftArrow;