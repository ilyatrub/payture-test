import React, { Component } from 'react'
import classes from './NewPayment.module.css';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-payments';

class NewPayment extends Component {
    state = {
        formFields: {
            paymentNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Номер платежа'
                },
                label: 'Номер платежа',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorMessage: 'Введите номер платежа'
            },
            paymentSum: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Сумма платежа'
                },
                label: 'Сумма платежа',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorMessage: 'Введите сумму платежа'
            },
            cardNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'tel',
                    placeholder: 'XXXX XXXX XXXX XXXX',
                    inputMode: 'numeric',
                    pattern: '[0-9\s]{13,19}',
                    maxLength: '19'
                },
                label: 'Номер карты',
                value: '',
                validation: {
                    required: true,
                    minlength: 13
                },
                valid: false,
                touched: false,
                errorMessage: 'Введите номер карты'
            }
        },
        date: {
            value: null
        },
        formIsValid: false,
        loading: false
    }

    checkValidity(value, rules){
        let isValid = true;
        if(rules.required){
            isValid = value.trim() != '' && isValid;
        }

        if(rules.minlength){
            isValid = value.length >= rules.minlength && isValid;
        }

        return isValid;
    } 

    inputChangedHandler = (event, inputId) => {
        const updatedForm = {...this.state.formFields};
        const updatedFormElement = {...updatedForm[inputId]};
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedForm[inputId] = updatedFormElement;

        let formIsValid = true;
        for(let inputId in updatedForm){
            formIsValid = updatedForm[inputId].valid && formIsValid;
        }

        this.setState({formFields: updatedForm, formIsValid});
    }

    paymentHandler = (event) => {
        event.preventDefault();

        this.setState({loading: true});

        const formData = {};
        for (let formElementIdentifier in this.state.formFields){
            formData[formElementIdentifier] = this.state.formFields[formElementIdentifier].value
        }
        formData.date = new Date();

        axios.post('/payments.json', formData)
            .then(res => {
                this.setState({loading: false});
                console.log('Payment success')
                this.props.history.push('/payments');
            })
            .catch(error => {
                console.log('Error', error);
                this.setState({loading: false})
            })
    }


    render() {
        const formElementsArray = [];
        for (let key in this.state.formFields){
            formElementsArray.push({
                id: key,
                config: this.state.formFields[key]
            })
        }

        let form = (
            <form onSubmit={this.paymentHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        key={formElement.id}
                        id={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        label={formElement.config.label}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        errorMessage={formElement.config.errorMessage} />
                ))}
                <button type='submit' disabled={!this.state.formIsValid}>Добавить</button>
            </form>
        )

        if(this.state.loading){
            form = <Spinner />
        }

        return (
            <div className={classes.NewPayment}>
                <h1>Добавить новый платеж</h1>
                {form}
            </div>
        )
    }
}

export default NewPayment;