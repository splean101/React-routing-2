import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const adress = 'localhost:8080/';
const names = ['Adam', 'Bob', 'Chris'];

const App = (props) => {
    const list = props.names.map((value, index) => {
    return <li key={index}><NavLink to={{adress} + ':' + {value}}>second</NavLink></li>;
});
    return (
        <ul>{list}</ul>
    );
};

ReactDOM.render(<App adress={adress} names={names} />, document.getElementById('root'));
