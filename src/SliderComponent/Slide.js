import React from 'react'

const Slide = (props) => {
    const styles = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%',
    }
    return <div className="slide" style={styles}></div>
}

export default Slide