import React from 'react';
import PlayerCard from './PlayerCard';

const CardList = ({ quarterbacks, onItemClick }) => {
	return (
        <div>
            {
                quarterbacks.map((user, i) => {
                    return <PlayerCard onItemClick={onItemClick} key={i} id={quarterbacks[i].id} name={quarterbacks[i].name} team={quarterbacks[i].team} image={quarterbacks[i].image} profile={quarterbacks[i].profile}/>
                })
            }
        </div>
	)
}

export default CardList;