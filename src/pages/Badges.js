import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './styles/Badges.css'

import cyber from '../images/cyber.svg';
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import api from '../api'


export default class Badges extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: null,
            data: undefined
        }

    }

    componentDidMount() {
        this.fetchData();

        // this.intervalId = setInterval(this.fetchData, 5000);
    }
    
    fetchData = async () => { 
        this.setState({loading: true, error: null})

        try {
            const data = await api.badges.list();
            this.setState({loading: false, data: data});
        } catch (error) {
            this.setState({loading: false, error: error})
        }
    }

    componentWillUnmount(){
        // clearInterval(this.intervalId);
    }

    
    render() {

        if (this.state.loading) {
            return <PageLoading />
        }

        // if (this.state.loading && !this.state.data) {
        //     return <PageLoading />
        // }

        if (this.state.error) {
            return <PageError error={this.state.error}/>;
        }

        return (
            <div>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={cyber} alt="" />
                        </div>
                    </div>
                </div>

                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data} />

                            {/* {this.state.loading && <p>loading</p>}  */}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
