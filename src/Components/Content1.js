//components - class functional
//Have you ever seen a human body?  cells, tissues
// JSX = Writing Html code inside JS file . 

// import React, {Component} from 'react';
import React from 'react';

export default class Content1 extends React.Component{
    render(){
        return(
            <div className='child'>
                <h1>Declarative</h1>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                <p>Declarative views make your code more predictable and easier to debug.</p>
            </div>
        )
    }
} 
// JSX - extension of JS

//module - can be exported in 2 ways- default , named {}


// 1 file and 1 component to export = default 
// 1 file but many component to export = named 

