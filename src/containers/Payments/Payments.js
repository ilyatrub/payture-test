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

    deletePaymentHandler = (id) => {
        this.setState({loading: true});
        axios.delete(`/payments/${id}.json`)
            .then(res => {
                // const updatedPayments = this.state.payments.filter(payment => payment.id !== id);
                // this.setState({payments: updatedPayments});
                axios.get('/payments.json')
                    .then(response => {
                        const fetchedPayments = [];
                        for(let key in response.data){
                            fetchedPayments.push({...response.data[key], id: key});
                        }

                        this.setState({loading: false, payments: fetchedPayments});
                    })
            });
        
    }
    

    render () {
        const paymentList = this.state.payments.map(payment => {
            return (
                <li><Payment
                    key={payment.id}
                    id={payment.id}
                    date={payment.date}
                    paymentNumber={payment.paymentNumber}
                    paymentSum={payment.paymentSum}
                    cardNumber={payment.cardNumber}
                    delete={this.deletePaymentHandler} /></li>
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