import React, { Component } from "react";
import style from './List.module.css'


export default class List extends Component{
    render(){
        return <div className={style.ul}>
            <ul>Coffee</ul>
            <ul>Tea</ul>
            <ul>Beer</ul>
        </div>
    }
}