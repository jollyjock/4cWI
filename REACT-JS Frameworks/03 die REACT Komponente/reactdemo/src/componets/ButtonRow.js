import React, { Component } from "react";
import SuperButoon from "./SuperButoon";
import style from "./ButtonRow.module.css";

export default class ButtonRow extends Component{
    render(){
        return(
            <div className={style.row}>
                <SuperButoon/>
                <SuperButoon/>
                <SuperButoon/>
                <SuperButoon/>
            </div>
        )
    }

}
