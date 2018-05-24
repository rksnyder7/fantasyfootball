import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { defaultSorted, rowStyle } from './Data';
import { DropdownButton, ButtonToolbar, MenuItem } from 'react-bootstrap';
import { colNew, colPlayers } from './Data';


class GuideRankings extends Component {
	constructor(props) {
		super(props)
		this.state = {
			source: '',
			hold: 'check',
			col: colNew,
			ranks: this.props.dataSet
		}
	}

// COL GUIDE BELOW ALLOWS COPY OF COLNEW WITHOUT CHANGING COLNEW, SO COLNEW IS THE RESET TO GO BACK TO NORMAL 
// THEN EVERYTIME SELECT A DRAFTWEBSITE COLGUIDE IS SET AND THEN THE CHANGES ARE APPLIED IN EVERY IF STATEMENT
// TO FINISH SET UP EACH IF STATEMENT TO ARANGE SOUCRES IN PROPER ORDER, ADD DIF AND REMOVE STD

// THEN SETUP SELECTEDMETRICS TO BE CALLED AT BOTTOM OF ONSOURCECLICK FUNCTION?
	onSourceClick = (event) => {
		let check = []
    	let colGuide = colPlayers.map(u => Object.assign({}, u, { approved: true }));
    	colGuide.splice(10,11)
    	if (event==='YAH') {
  			console.log("YAH");
  			this.selectedMetrics('YAH');
  		} else if (event==='RESET') {
  			colGuide = colNew
  			this.setState({ranks: this.props.dataSet})
  		} else {
  			if (event==='CBS') {
  				check = colGuide.splice(4,1);
  				this.selectedMetrics('CBS');
  			} else if (event==='ESP') {
  				check = colGuide.splice(5,1);
  				this.selectedMetrics('ESP');
  			} else if (event==='FOX') {
  				check = colGuide.splice(6,1);
  				this.selectedMetrics('FOX');
  			} else if (event==='NFL') {
  				check = colGuide.splice(7,1);
  				this.selectedMetrics('NFL');
  			}
  			colGuide.splice(3,0,check[0]);
  		}
  		this.setState({col: colGuide})

  	}

  	selectedMetrics = (source) => {
  		let dataGuide = this.props.dataSet.map(u => Object.assign({}, u, { approved: true }));
  		let sources = ['YAH', 'CBS', 'ESP', 'FOX', 'NFL'];
  		sources = sources.filter(e => e !== source);
  		for(let i = 0; i < dataGuide.length; i++){
	  		let total = 0.00;
	  		let count = 0.00;
	  		let std = 0.00;
	  		let stdArr = [];
	  		for(let x = 0; x < sources.length; x++) {
	  			try{
		  			total = total + dataGuide[i][sources[x]];
		  			count = count + 1;
		  			stdArr.push(dataGuide[i][sources[x]]);
		  		}catch(err){
		  		}
		  	}
		  	let avg = parseFloat(total)/count;
		  	dataGuide[i]['AVG'] = avg;
		  	if (stdArr.length > 1){
		  		for(let z = 0; z < stdArr.length; z++){
		  			std = parseFloat(std) + ((parseFloat(stdArr[z]) - parseFloat(avg))**2);
		  		}
		  	}
		  	dataGuide[i]['STD'] = Math.round((((parseFloat(std)/(parseFloat(stdArr.length) - 1))**.5)*100),0)/100;
	  		dataGuide[i]['DIF'] = dataGuide[i][source] - dataGuide[i]['AVG'] 
  		}
  		this.setState({ranks: dataGuide})
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
				<BootstrapTable  keyField='key'  defaultSorted={defaultSorted} rowStyle={rowStyle} data={ this.state.ranks } columns={ this.state.col } />
			</div>	
		);
	}

}


export default GuideRankings;

