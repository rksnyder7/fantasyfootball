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
    	let colGuide = []
    	if (event==='FP') {
  			console.log("FFFPPP");
  			colGuide = colNew.slice(0,3)
  			colGuide.push(colNew.slice(4,5)[0])
  			colGuide = colGuide.concat(colNew.slice(6,8))
  			// colGuide.push(colNew.slice(5,6)[0])

  			this.setState({col: colGuide})
  		} else if (event==='ESPN') {
  			console.log("ESPN");
  			this.setState({col: colNew})
  		} else if (event==='FC') {
  			console.log("FC");
  		} else {
  			// this.setState({col: colNew})
  			console.log("wooooooo")
  		}
  	}



	render() {

		const { source } = this.state;

		return (
			<div>

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
				<BootstrapTable  keyField='key'  defaultSorted={defaultSorted} rowStyle={rowStyle} data={ this.props.dataSet } columns={ this.state.col } />
			</div>	
		);
	}

}


export default GuideRankings;

