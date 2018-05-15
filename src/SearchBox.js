import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className="pa2">
			<input type='search' className='pa3 ba b--blue' placeholder='search quarterbacks' onChange={searchChange}/>
		</div>
	)
}

export default SearchBox;