import React, { Component } from 'react';

import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import BadgeDetails from './BadgeDetails'


class BadgeDetailsContainer extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            loading: true,
            error: null,
            data: undefined,
            modalIsOpen: false
        }

    }



    handleCloseModal = (e) => { 
        this.setState({modalIsOpen: false})
    }

    handleOpenModal = (e) => { 
        this.setState({modalIsOpen: true})
    }

    handleDeleteBadge = async (e) => { 
        this.setState({ loading: true, error: null })

        try {
            await api.badges.remove(this.props.match.params.badgeId);
            this.props.history.push('/badges');
            this.setState({ loading: false })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    componentDidMount(){
        this.fetchData();
    }
    

    fetchData = async () => { 
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );
            this.setState({ loading: false, data: data });
            
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }


    render() {

        if (this.state.loading) {
            return <PageLoading />
        }

        if (this.state.error) {
            return <PageError />
        }

        return (
            <BadgeDetails 
            
                onCloseModal={this.handleCloseModal} 
                onOpenModal={this.handleOpenModal} 
                modalIsOpen={this.state.modalIsOpen}
                onDeleteBadge={this.handleDeleteBadge}

                badge={this.state.data}
            />
        );
    }
}

export default BadgeDetailsContainer;
