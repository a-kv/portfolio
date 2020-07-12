import {Input, Textarea,} from "../common/forms-controls/FormsControl";
import {emailValidator, required} from "../common/validator/validators";
import React from 'react';
import styles from './Contacts.module.css';
import {Field, reduxForm, reset} from "redux-form";
import * as axios from "axios";
import {connect} from "react-redux";

const ContactsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.contactsForm}>
            <Field component={Input} name={'name'} placeholder='Your name'
                   validate={[required]} className={styles.inputForm}/>
            <Field className={styles.inputForm} component={Input} name={'email'} placeholder='E-mail'
                   validate={[required, emailValidator]}/>
            <Field className={styles.textareaForm} component={Textarea} name={'message'} placeholder='Enter your message'
                   validate={[required]}/>
            <button className={styles.buttonForm}>SEND MESSAGE</button>
        </form>
    )
}
const ContactsReduxForm = reduxForm({
    form: 'contacts'
})(ContactsForm)


const Contacts = (props) => {

    const sendForm = (formData) => {
        debugger
        axios.post('https://smtp-nodeja-server.herokuapp.com/send', formData)
        props.clearForm()
    }
    return (
        <div className={styles.contacts} id={'contacts'}>
            <div className={styles.contactsTitle}>
                    <span>Contacts</span>
            </div>
            <div className={styles.container}>
                <ContactsReduxForm onSubmit={sendForm}/>
            </div>
        </div>
    )
}

let mdtp = (dispatch) => {
    return {
        clearForm: () => {
            dispatch(reset('contacts'))
        }
    }
}


export default connect(null, mdtp)(Contacts);