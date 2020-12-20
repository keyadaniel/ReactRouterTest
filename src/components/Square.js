import React, { Component } from 'react'

//export default class Square extends Component {
  //  render(){
     export default function Square(props) {
    return (
        <button className="square" onClick= {props.onClick}>
           {props.value} 
        </button>
    );
}


