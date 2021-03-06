import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { defaultSorted, rowStyle } from './Data';



const TableRankings = ({ name, dataSet, col }) => {
	return (
		<div>
			<h1 className='tc'>{name} Rankings</h1>
			<br/>
			<BootstrapTable defaultSorted={defaultSorted} keyField='key' rowStyle={rowStyle} data={ dataSet } columns={ col } />
		</div>
	)
}

export default TableRankings;