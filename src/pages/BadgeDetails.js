import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './styles/BadgeDetails.css';
import cyber from '../images/cyber.svg';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal'

// function useIncreaseCount(max) {
    
//     const [count, setCount] = useState(0)

//     if (count > max) {
//         setCount(0)
//     }

//     return [count, setCount]

// }


function BadgeDetails(props) {

    // const [ count, setCount ] = useIncreaseCount(4);

    return (
        <div>
            <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 cont-img">
                                <img src={cyber} alt="logo conf" />
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h1>{props.badge.firstName} {props.badge.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName={props.badge.firstName}
                                lastName={props.badge.lastName}
                                twitter={props.badge.twitter}
                                jobTitle={props.badge.jobTitle}
                                email={props.badge.email}
                            />
                        </div>
            
                        <div className="col BadgeDetails-acciones">
                            <div className="BadgeDetails-acciones__botones">

                                <h2>Acciones</h2>
                                <div>

                                    {/* <button 
                                        className="btn btn primary" 
                                        onClick={() => { 
                                            setCount(count + 1)
                                        }}
                                        >Ingrementar {count}
                                    </button> */}

                                    <Link to={`/badges/${props.badge.id}/edit`} className="btn btn-primary mb-4" >Editar</Link>
                                </div>
                                <div>
                                    <button 
                                        onClick={props.onOpenModal}
                                        className="btn btn-danger">
                                        Eliminar
                                    </button>
                                    
                                    <DeleteBadgeModal 
                                        isOpen={props.modalIsOpen} 
                                        onClose={props.onCloseModal}
                                        onDeleteBadge={props.onDeleteBadge}
                                    />

                                </div>


                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default BadgeDetails;
