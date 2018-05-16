import React from 'react';

const Homepage = ({ onItemClick }) => {
	return (
		<div className='tc container'>
			<div className='row'>
				<div className='col-sm-6'>
					<h2 className='rankh2'>Rankings</h2>			
					<br/>
					<p onClick={()=>onItemClick('qbRankNormal')}>Quarterbacks</p>
					<p onClick={()=>onItemClick('rbRankNormal')}>Running Backs</p>
					<p onClick={()=>onItemClick('wrRankNormal')}>Wide Receivers</p>
					<p onClick={()=>onItemClick('teRankNormal')}>Tight Ends</p>
					<p onClick={()=>onItemClick('deRankNormal')}>Defenses</p>
				</div>
				<div className='col-sm-6'>	
					<h2 className='rankh2'>Draft Guide</h2>
					<br/>
					<p onClick={()=>onItemClick('qbRankNormal')}>Quarterbacks</p>
					<p onClick={()=>onItemClick('rbRankNormal')}>Running Backs</p>
					<p onClick={()=>onItemClick('wrRankNormal')}>Wide Receivers</p>
					<p onClick={()=>onItemClick('teRankNormal')}>Tight Ends</p>
					<p onClick={()=>onItemClick('deRankNormal')}>Defenses</p>
				</div>
			</div>
		</div>
	)
}

export default Homepage;