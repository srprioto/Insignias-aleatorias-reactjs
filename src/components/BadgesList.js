import React, {useState, useMemo} from 'react';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar'
import './styles/BadgesList.css'

class BadgesListItem extends React.Component {
    render() {
        return (
            <div className="BadgesListItem">

                <Gravatar className="BadgesListItem__avatar" email={this.props.badge.email} />

                {/* <img
                    className="BadgesListItem__avatar"
                    src={this.props.badge.avatarUrl}
                    alt="Loguito"
                /> */}
                <div>
                    <strong>
                        {this.props.badge.firstName} {this.props.badge.lastName}
                    </strong>
                    <br />
                    @{this.props.badge.twitter}
                    <br />
                    {this.props.badge.jobTitle}
                </div>
            </div>
        );
    }
}

function useSearchBadges(badges) {
    const [query, setQuery] = useState('');
    const [filteredBadges, setFilteredBadges] = useState(badges);

    const filterResult = () => { 
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`
            .toLowerCase()
            .includes(query.toLowerCase());
        })

        setFilteredBadges(result)
    }

    useMemo(filterResult, [badges, query]);


    return [query, setQuery, filteredBadges];

}
  
function BadgesList(props) {

    const badges = props.badges;

    const [query, setQuery, filteredBadges] = useSearchBadges(badges);

    
    const inputSearch = () => { 
        return(
            <div className="form-group mb-4">
                <label htmlFor="">Filtrar Badges</label>
                <input type="text" className="form-control"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} 
                />
            </div>
        );
    }

    if (filteredBadges.length === 0) {
        return(
            <div className="">
                {inputSearch()}
                <h3>No se encontraron resultados</h3>
                <Link className="btn btn-primary" to="/badges/new">Nuevo</Link>
            </div>
            
        );
    }

    return (
        <div className="BadgesList">

            {inputSearch()}

            <ul className="list-unstyled">
                {filteredBadges.map(badge => {
                    return (
                        <li key={badge.id}>
                            <Link 
                                to={`/badges/${badge.id}`}
                                className="text-reset text-decoration-none"
                                ><BadgesListItem badge={badge} />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
  
}
  
export default BadgesList;

