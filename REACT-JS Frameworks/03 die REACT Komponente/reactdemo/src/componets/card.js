import React, { Component } from "react";
import style from './card.module.css'



export default class Card extends Component{
    render(){
        return (
            <div className={style.card}>
                <img classname={style.image} src='./card.png' alt=""></img>
                <div className={style.content}>
                    <h1>John Doe</h1>
                    <p>Architect and Engineer</p>
                </div>
            </div>
        )
    }
}