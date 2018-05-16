import React from 'react';

const Homepage = ({ onItemClick }) => {
	return (
		<div>
			<p onClick={()=>onItemClick('qbRankNormal')}>Quarterbacks</p>
			<p onClick={()=>onItemClick('rbRankNormal')}>Running Backs</p>
			<p onClick={()=>onItemClick('wrRankNormal')}>Wide Receivers</p>
			<p onClick={()=>onItemClick('teRankNormal')}>Tight Ends</p>
			<p onClick={()=>onItemClick('deRankNormal')}>Defenses</p>
		</div>
	)
}

export default Homepage;