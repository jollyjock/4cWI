import React, { Component } from "react";
import styles from './Button2.module.css'

export default class Button2 extends Component{
    render(){
        return (<div classname={styles.heading}>
            <button type="button"  className={styles.button_design}>Sendar</button>
        </div>)
    }
}