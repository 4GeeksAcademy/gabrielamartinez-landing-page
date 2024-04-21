import React from "react";
import PropTypes from "prop-types";


export const SimpleCounterTutorial = (props) => {
    return (
        <div className="big-counter">
            <div>
                <i className="far fa-clock"></i>
            </div>
            <div className="four">{props.digitFour % 10}</div>
            <div className="three">{props.digitThree % 10}</div>
            <div className="two">{props.digitTwo % 10}</div>
            <div className="one">{props.digitOne % 10}</div>
        </div>
    );
};

SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
}

let counter = 0;

setInterval(function () {
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 1000);
    const two = Math.floor(counter / 100);
    const one = Math.floor(counter / 10);
    counter++;
}, 1000);
