import React from 'react';


const playerClick = (event) => {
    window.open(`http://www.espn.com/nfl/player/_/id/${event}`, '_blank')
}

const PlayerCard = ({name, team, image, profile, id}) => {
	return (
		<div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
        	<h2 onClick={()=>playerClick(id)}>{name}</h2>
        	<h3>{team}</h3>
        	<img alt={name} src={`http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/${id}.png&w=350&h=254`} />
        </div>
	)
}

export default PlayerCard;