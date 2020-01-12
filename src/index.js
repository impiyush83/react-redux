// import react and react-dom 
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click Me!'
}

function getTime() {
    return (new Date()).toLocaleTimeString()
}

const App = () => {
    return (
        <div>
                <div>Current Time:</div>
                <h3>{getTime()}</h3>
            </div>
        // <div>
        // <label className="label" HTMLfor="name">Enter Name:</label> 
        // <input id="name" type="text" />
        // <button style={{ backgroundColor: 'blue', color: 'white'}}>{getButtonText()}</button>
        // </div>
    )
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);