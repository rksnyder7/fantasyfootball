import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { defaultSorted, rowStyle } from './Data';
import { DropdownButton, ButtonToolbar, MenuItem } from 'react-bootstrap';
import { colNew, colPlayers } from './Data';
// right now positions fill in all rankings no "-" for empty values, should leave the blanks blanks so make 999s "-"

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

	componentWillReceiveProps = () => {
		console.log("woooooooooo")
		this.setState({ranks: this.props.dataSet})
		console.log(nextProps.errors)
		console.log(this.props.dataSet)
		console.log(this.state.ranks)
	}

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
	  			if (!(dataGuide[i][sources[x]]==='-')){
		  			total = total + dataGuide[i][sources[x]];
		  			count = count + 1;
		  			stdArr.push(dataGuide[i][sources[x]]);
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
  	// how to get componentDidUpdate to not crash or loop infinetly 
	// google function, on reload?something like that, component updates?
	// this.setState({this.state.ranks: this.props.dataSet})
  	// componentDidUpdate() {
  	// 	this.setState({ranks: this.props.dataSet})
  	// }

	render() {
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
				{console.log(this.state.ranks)}
				{console.log(this.props.dataSet)}
			</div>	
		);
	}

}


export default GuideRankings;

