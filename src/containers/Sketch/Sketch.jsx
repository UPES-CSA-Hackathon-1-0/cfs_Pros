import React from 'react'
import Container from './Container';
import "./Sketch.scss";

const Sketch = () => {
    return (
        <>
            <div className="header">
                <img src="photos/homebox.png" alt="homebox-logo" style={{ width: "50px" }} />
                <h3>Homebox</h3>
            </div>
            <Container />
        </>
    )
}

export default Sketch