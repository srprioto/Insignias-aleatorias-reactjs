import React, { Component } from 'react';

import './styles/BadgeNew.css';
import cyber from '../images/cyber.svg';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';
import PageLoading from '../components/PageLoading'
// import PageError from '../components/PageError'
import api from '../api'

class BadgeNew extends Component {

    constructor(props) {
        super(props);
        
        this.state = { 
            form: {
                firstName: "",
                lastName: "",
                email: "",
                jobTitle: "",
                twitter: ""
            },
            loading: false,
            error: null,
        }
    }
    


    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true, error: null })

        try{
            await api.badges.create(this.state.form);
            this.setState({ loading: false })

            this.props.history.push('/badges');

        }catch(error){
            this.setState({ loading: false, error: error })
        }
    }


    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {

        if (this.state.loading) {
            return ( <PageLoading /> );
        }


        return (
            <div>
                
                <div className="BadgeNew__hero">
                    <img src={cyber} alt="Logo" className="img-fluid BadgeNew__hero-image" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName={this.state.form.firstName || 'Nombre'}
                                lastName={this.state.form.lastName || 'Apellido'}
                                twitter={this.state.form.twitter || "Twitter"}
                                jobTitle={this.state.form.jobTitle || "Carrera profesional"}
                                email={this.state.form.email || "Correo electronico"}
                                // avatar="https://www.gravatar.com/avatar?d=identicon"
                            />            
                        </div>

                        <div className="col">
                            <BadgeForm 
                                titulo="New attendant"
                                onChange={this.handleChange} 
                                formValues={this.state.form} 
                                onSubmit={this.handleSubmit}
                                error={this.state.error}
                            />
                        </div>

                    </div>                
                </div>

            </div>
        );
    }
}

export default BadgeNew;
