import React, { Component } from "react";
import styles from './Button2.module.css'

export default class SuperButoon extends Component{
    render(){
        return (<div classname={styles.button}>
            <button>Button</button>
        </div>)
    }
}