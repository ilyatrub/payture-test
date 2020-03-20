import React from 'react'
import classes from './Payment.module.css'

const Payment = props => {
    const dateMillisecs = Date.parse(props.date);
    const date = new Date(dateMillisecs);
    const dateFormatted = `${date.getDate()}/${Number(date.getMonth()) < 9 ? '0' : ''}${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${Number(date.getMinutes()) < 10 ? '0' : ''}${date.getMinutes()}`;
    const cardMask = `${props.cardNumber.slice(0, 1)}${'X'.repeat(props.cardNumber.length - 2)}${props.cardNumber.slice(-1)}`

    return (
            <div className={classes.Payment}>
                <p>{dateFormatted}</p>
                <h4>Платеж №{props.paymentNumber}</h4>
                <h3>Сумма платежа: {Number(props.paymentSum).toFixed(2)} руб.</h3>
                <p>Номер карты: {cardMask}</p>
            </div>
    )
}

export default Payment;