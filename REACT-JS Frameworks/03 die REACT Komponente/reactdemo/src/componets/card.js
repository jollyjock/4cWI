import React, { Component } from "react";
import style from './card.module.css'



export default class Card extends Component{
    render(){
        return <div className={style.wrapper}>
            <div className={style.card}>
                <img classname={style.image} src='./card.png' alt=""></img>
                <div className={style.heading}><h1>John Doe</h1></div>
                <p>Architect and Engineer</p>
            </div>
        </div>

    }
}