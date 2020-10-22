import React, { Component } from 'react';
import './ContactForm.scss';

import axios from 'axios';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            specialoffers: false
        }
    }

    setInfo = e => {
        if (e.target.type === "text") {
            this.setState({
                [e.target.name]: e.target.value
            })
        } else if (e.target.type === "checkbox") {
            this.setState({
                [e.target.name]: e.target.checked
            })
        }
    }

    sendToServer = async (e) => {
        e.preventDefault();

        const qs = require('qs');
        try {
            await axios.post('https://crypto-trading-2020-10.herokuapp.com/contacts', qs.stringify(this.state));
            this.setState({
                name: '',
                email: '',
                specialoffers: false
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="home-contactform-wrap">
                <h2 className="home-contactform-title">Contact us</h2>
                <div className="home-contactform-text">Most calendars are designed for teams. Slate is designed for freelancers.</div>
                <form className="home-contactform-form" onSubmit={this.sendToServer}>
                    <input type="text" placeholder="Your Name" name="name" className="home-input-text" value={this.state.name} onChange={this.setInfo} />
                    <input type="text" placeholder="Your Email" name="email" className="home-input-text" value={this.state.email} onChange={this.setInfo} />
                    <div className="home-input-specialoffers">
                        <input type="checkbox" id="home-contactform-specialoffers" name="specialoffers" checked={this.state.specialoffers} onChange={this.setInfo} />
                        <label htmlFor="home-contactform-specialoffers">Send me special offers</label>
                    </div>
                    <button className="home-contactform-submit" type="submit">Send</button>
                </form>
            </div >
        )
    }
}

export default ContactForm;