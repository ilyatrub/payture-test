import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem
            link='/' >
                Домашняя страница
        </NavigationItem>
        <NavigationItem
            link='/payments' >
                <i className="fas fa-money-bill-wave"></i> Мои Платежи
        </NavigationItem>
        <NavigationItem
            link='/payments/new' >
                <i className="fas fa-plus-circle"></i> Добавить платеж
        </NavigationItem>
    </ul>
)

export default NavigationItems;