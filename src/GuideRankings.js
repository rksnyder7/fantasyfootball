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

// COL GUIDE BELOW ALLOWS COPY OF COLNEW WITHOUT CHANGING COLNEW, SO COLNEW IS THE RESET TO GO BACK TO NORMAL 
// THEN EVERYTIME SELECT A DRAFTWEBSITE COLGUIDE IS SET AND THEN THE CHANGES ARE APPLIED IN EVERY IF STATEMENT
// TO FINISH SET UP EACH IF STATEMENT TO ARANGE SOUCRES IN PROPER ORDER, ADD DIF AND REMOVE STD

// THEN SETUP SELECTEDMETRICS TO BE CALLED AT BOTTOM OF ONSOURCECLICK FUNCTION?
	onSourceClick = (event) => {
    	let colGuide = colNew.map(u => Object.assign({}, u, { approved: true }));
    	if (event==='YAH') {
  			console.log("FFFPPP");
  			let check = colGuide.splice(3,1)
  			this.setState({col: colGuide})
  		} else if (event==='RESET'){
  			this.setState({col: colNew})
  		} 
  		else {
  			// this.setState({col: colNew})
  			console.log("wooooooo")
  		}
  		console.log(this.state.col)
  		console.log(colGuide)
  	}

  	selectedMetrics = (source) => {
  		let sources = ['YAH', 'CBS', 'ESP', 'FOX', 'NFL'];
  		sources = sources.filter(e => e !== source);
  		for(let i = 0; i < this.props.dataSet.length; i++){
	  		let total = 0.00;
	  		let count = 0.00;
	  		let std = 0.00;
	  		let stdArr = [];
	  		for(let x = 0; x < sources.length; x++) {
	  			try{
		  			total = total + this.props.dataSet[i][sources[x]];
		  			count = count + 1;
		  			stdArr.push(this.props.dataSet[i][sources[x]]);
		  		}catch(err){
		  		}
		  	}
		  	let avg = parseFloat(total)/count;
		  	this.props.dataSet[i]['AVG'] = avg;
		  	if (stdArr.length > 1){
		  		for(let z = 0; z < stdArr.length; z++){
		  			std = parseFloat(std) + ((parseFloat(stdArr[z]) - parseFloat(avg))**2);
		  		}
		  	}
		  	this.props.dataSet[i]['STD'] = Math.round((((parseFloat(std)/(parseFloat(stdArr.length) - 1))**.5)*100),0)/100;
	  		this.props.dataSet[i]['DIF'] = this.props.dataSet[i][source] - this.props.dataSet[i]['AVG'] 
  		}
  	}

	render() {

		const { source } = this.state;

		return (
			<div>
				{this.selectedMetrics('YAH')}
				<h1 className='tc'>{this.props.name} Rankings</h1>
				  <ButtonToolbar>
				    <DropdownButton className="buttonGuide"
				      bsSize="large"
				      title="Draft website"
				      id="dropdown-size-large">
				      <MenuItem onClick={()=>this.onSourceClick('YAH')} eventKey="1">YAHOO</MenuItem>
				      <MenuItem onClick={()=>this.onSourceClick('CBS')} eventKey="2">CBS</MenuItem>
				      <MenuItem onClick={()=>this.onSourceClick('ESP')} eventKey="3">ESPN</MenuItem>
				      <MenuItem onClick={()=>this.onSourceClick('FOX')} eventKey="3">FOX</MenuItem>
				      <MenuItem onClick={()=>this.onSourceClick('NFL')} eventKey="3">NFL</MenuItem>
				      <MenuItem divider/>
				      <MenuItem onClick={()=>this.onSourceClick('RESET')} eventKey="3">Reset</MenuItem>
				    </DropdownButton>
				  </ButtonToolbar>
				<br/>
				<BootstrapTable  keyField='key'  defaultSorted={defaultSorted} rowStyle={rowStyle} data={ this.props.dataSet } columns={ this.state.col } />
			</div>	
		);
	}

}


export default GuideRankings;

