import React, { Component } from 'react'

export default class BadgeForm extends Component {

    // handleChange = (e) => { 
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    handleClick = (e) => { 
        console.log("Button was click");
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("button was submit");
    //     console.log(this.state);
    // }

    render() {
        return (
            <div>
                <h1>{this.props.titulo}</h1>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input 
                            name="firstName" 
                            type="text" 
                            className="form-control" 
                            onChange={this.props.onChange}
                            value={this.props.formValues.firstName}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input 
                            name="lastName" 
                            type="text" 
                            className="form-control" 
                            onChange={this.props.onChange}
                            value={this.props.formValues.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input 
                            name="email" 
                            type="email" 
                            className="form-control" 
                            onChange={this.props.onChange}
                            value={this.props.formValues.email}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Job title</label>
                        <input 
                            name="jobTitle" 
                            type="text" 
                            className="form-control" 
                            onChange={this.props.onChange}
                            value={this.props.formValues.jobTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Twitter</label>
                        <input 
                            name="twitter" 
                            type="text" 
                            className="form-control" 
                            onChange={this.props.onChange}
                            value={this.props.formValues.twitter}
                        />
                    </div>

                    <button className="btn btn-primary" onClick={this.handleClick}>Ok</button>
                    
                    {this.props.error && <p className="text-danger">{this.props.error.message}</p>}

                </form>
            </div>
        )
    }
}

