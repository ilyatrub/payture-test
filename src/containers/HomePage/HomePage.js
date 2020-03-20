import React, { Component } from 'react'
import classes from './HomePage.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class HomePage extends Component {
    render() {
        return (
            <Aux>
                <h1>Домашняя страница</h1>
                <div className={classes.HomePage}>
                    <p>
                        Тестовое задание для Payture. Исполнитель: Илья Фролов. Исходный код: <a href='https://github.com/ilyatrub/payture-test'>https://github.com/ilyatrub/payture-test</a>
                    </p>
                    <h3>Использованные технологии:</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS (Modules)</li>
                        <li>JavaScript</li>
                        <li>ReactJS (incl. Router)</li>
                        <li>FireBase</li>
                        <li>Font Awesome</li>
                    </ul>
                    <h3>Инструкции:</h3>
                    <ul>
                        <li>Это домашняя страница.</li>
                        <li>На вкладке "Мои платежи" находятся платежи, загруженные из FireBase.</li>
                        <li>На вкладке "Добавить платеж" находится форма для добавления платежа.</li>
                    </ul>
                </div>
            </Aux>
        )
    }
}

export default HomePage;