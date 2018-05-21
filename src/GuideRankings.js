import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { defaultSorted, rowStyle } from './Data';
import { DropdownButton, ButtonToolbar, MenuItem } from 'react-bootstrap';
import { colNew } from './Data';

class GuideRankings extends Component {
	constructor(props) {
		super(props)
		this.state = {
			source: '',
			hold: 'check',
			col: colNew
		}
	}

	onSourceClick = (event) => {
    	this.setState({source: event})
  	}


  	move = (start, end) => {
  		colNew.splice(end,0, colNew.splice(start, 1)[0]);
  	}

  	updateCol = () => {
  		if (this.state.source=='FP') {
  			
  		} else if (this.state.source=='ESPN') {
  			this.move(0,3);
  		} else if (this.state.source=='FC') {
  			this.move(0,4);
  		} else {
  			
  		}
  		console.log(colNew)
  		console.log(this.state.source)
  	}


	render() {

		const { source } = this.state;

		return (
			<div>
				{this.updateCol()}
				<h1 className='tc'>{this.props.name} Rankings</h1>
				  <ButtonToolbar>
				    <DropdownButton className="buttonGuide"
				      bsSize="large"
				      title="Draft website"
				      id="dropdown-size-large">
				      <MenuItem onClick={()=>this.onSourceClick('FP')} eventKey="1">FP</MenuItem>
				      <MenuItem onClick={()=>this.onSourceClick('ESPN')} eventKey="2">ESPN</MenuItem>
				      <MenuItem onClick={()=>this.onSourceClick('FC')} eventKey="3">FC</MenuItem>
				    </DropdownButton>
				  </ButtonToolbar>
				<br/>
				<BootstrapTable defaultSorted={defaultSorted} keyField='id' rowStyle={rowStyle} data={ this.props.dataSet } columns={ this.state.col } />
			</div>	
		);
	}


}

// const GuideRankings = ({ onSourceClick, name, dataSet, col }) => {
// 	return (
// 	)
// }

export default GuideRankings;


// const GuideRankings = ({ onSourceClick, name, dataSet, col }) => {
// 	return (
// 		<div>
// 			<h1 className='tc'>{name} Rankings</h1>
// 			  <ButtonToolbar>
// 			    <DropdownButton className="buttonGuide"
// 			      bsSize="large"
// 			      title="Draft website"
// 			      id="dropdown-size-large">
// 			      <MenuItem onClick={()=>onSourceClick('123')} eventKey="1">FP</MenuItem>
// 			      <MenuItem onClick={()=>onSourceClick('123Normal')} eventKey="2">ESPN</MenuItem>
// 			      <MenuItem onClick={()=>onSourceClick('qbRankNormal')} eventKey="3">FC</MenuItem>
// 			    </DropdownButton>
// 			  </ButtonToolbar>
// 			<br/>
// 			<BootstrapTable defaultSorted={defaultSorted} keyField='id' rowStyle={rowStyle} data={ dataSet } columns={ col } />
// 		</div>
// 	)
// }