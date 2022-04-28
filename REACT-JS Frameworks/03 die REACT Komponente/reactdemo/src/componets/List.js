import React, { Component } from "react";
import style from './List.module.css'


export default class List extends Component{
    render(){
        return <div className={style.li}>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Beer</li>
        </div>
    }
}