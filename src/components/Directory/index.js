import React from "react";
import Mens from '../../assets/shopMens.jpeg'
import Womens from '../../assets/shopWomens.jpg'
import './styles.scss'
const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div className="item"
                    style={{ backgroundImage: `url(${Womens})` }}>
                    <a href="/">Shop Womens</a>
                </div>
                <div
                    className="item"
                    style={{ backgroundImage: `url(${Mens})` }}>
                    <a href="/">Shop Mens</a>
                </div>
            </div>
        </div>
    );
};

export default Directory;