import React, { Component } from 'react'
import classes from './Payments.module.css'

import Payment from '../../components/Payment/Payment';
import axios from '../../axios-payments';


class Payments extends Component {
    state = {
        payments: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/payments.json')
            .then(res => {
                const fetchedPayments = [];
                for(let key in res.data){
                    fetchedPayments.push({...res.data[key], id: key});
                }

                this.setState({loading: false, payments: fetchedPayments});
            })
            .catch(error => this.setState({loading: false}));
    }
    

    render () {
        const paymentList = this.state.payments.map(payment => {
            return (
                <li><Payment
                    key={payment.id}
                    date={payment.date}
                    paymentNumber={payment.paymentNumber}
                    paymentSum={payment.paymentSum}
                    cardNumber={payment.cardNumber} /></li>
            )
        })
        return (
            <div className={classes.Payments}>
                <h1>Мои Платежи</h1>
                <ul>
                    {paymentList}
                </ul>
            </div>
            
        )
    }
}

export default Payments;