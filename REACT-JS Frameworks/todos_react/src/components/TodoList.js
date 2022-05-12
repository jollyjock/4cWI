import React, { Component } from 'react';
import Todo from './Todo';
import styles from './TodoList.module.css';

export default class TodoList extends Component {
    render() {
        return (
            <div className={styles.center}>
                <div className={styles.wrapper}>
                    <Todo/>
                    <Todo/>
                    <Todo/>
                </div>
            </div>
        );
    }
}