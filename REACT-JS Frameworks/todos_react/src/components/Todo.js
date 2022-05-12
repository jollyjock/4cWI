import React, { Component } from 'react';
import styles from './Todo.module.css';
import { IoIosCloseCircleOutline } from "react-icons/io";

export default class Todo extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div>{this.props.title}</div>
                <div>{this.props.isDone}</div>
                <div><IoIosCloseCircleOutline className={styles.icon}/></div>
            </div>
        );
    }
}