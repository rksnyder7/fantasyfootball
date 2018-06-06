import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { defaultSorted} from './Data';
import { DropdownButton, ButtonToolbar, MenuItem, Col, Row, Grid } from 'react-bootstrap';
import { colNew, colPlayers } from './Data';
// right now positions fill in all rankings no "-" for empty values, should leave the blanks blanks so make 999s "-"
// format draft page: highlights selected draft website, clarify differnce column(what it means) and avg(avg of four others), highlight rows with large difference(undervalued overvalued)
// provide brief explanation of functionality on top
// add rank to leftmost column(1,2,3)

// REMOVE RANK COLUMN FROM GUIDE RANKINGS WHEN YOU CLICK A DRAFT SITEc
// make top of tables static 
// ppr and normal
// click on player name goes to espn page??

class GuideRankings extends Component {
	constructor(props) {
		super(props)
		this.state = {
			col: colNew,
			ranks: this.props.dataSet
		}
	}


	componentWillReceiveProps = (nextProps) => {
		this.setState({ranks: nextProps['dataSet']})
		this.setState({col: colNew})
	}

  	onSourceClick = (event) => {
		let check = []
    	let colGuide = colPlayers.map(u => Object.assign({}, u, { approved: true }));
    	colGuide.splice(11,1)
    	colGuide.shift()
    	console.log(colGuide)
    	if (event==='RESET') {
  			colGuide = colNew
  			this.setState({ranks: this.props.dataSet})
  		} else {
 			if (event==='Yahoo') {
 				this.selectedMetrics('YAH')
 			} else {
		 			if (event==='CBS') {
		  				check = colGuide.splice(4,1);
		  				this.selectedMetrics('CBS');
		  			} else if (event==='ESPN') {
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
	  		[4,5,6,7,8].forEach(avgsource => {
	  			colGuide[avgsource]['headerStyle'] = {backgroundColor: '#F58B4C', fontWeight: 800, width: '10%'};
	  		});
	  		[3,9].forEach(element => {
	  			colGuide[element]['headerStyle'] = {backgroundColor: '#F26D21', fontWeight: 800, width: '10%'};
	  		});
	  		colGuide[8]['text'] = 'AVG w/o ' + event;
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
		  	let avg = Math.round((parseFloat(total)/count)*100)/100;
		  	dataGuide[i]['AVG'] = avg;
		  	if (stdArr.length > 1){
		  		for(let z = 0; z < stdArr.length; z++){
		  			std = parseFloat(std) + ((parseFloat(stdArr[z]) - parseFloat(avg))**2);
		  		}
		  	}
		  	dataGuide[i]['STD'] = Math.round((((parseFloat(std)/(parseFloat(stdArr.length) - 1))**.5)*100),0)/100;
	  		if(dataGuide[i][source] === '-'){
	  			dataGuide[i]['DIF'] = '-';
	  		} else {
		  		dataGuide[i]['DIF'] = Math.round((dataGuide[i][source] - dataGuide[i]['AVG'])*100)/100
	  		}
  		}
  		this.setState({ranks: dataGuide})
  	}


	rowStyle = (row, rowIndex, numbOfRows=this.state.ranks.length) => {
		  const style = {};
		  if (rowIndex%2===0) {
		  	style.backgroundColor = '#8F979E'
		  } else {
			style.backgroundColor = 'white';
		  }
		  style.color = 'black';
		  style.fontWeight = 'bold';
		  let difVal = row['DIF'] / (numbOfRows/50)
		  if (difVal > 12) {
		  	style.backgroundColor = '#2D882D';
		  } else if (difVal > 8) {
		  	style.backgroundColor = '#55AA55';
		  } else if (difVal > 4) {
		  	style.backgroundColor = '#88CC88';
		  } else if (difVal < -12) {
		  	style.backgroundColor = '#AA3939';
		  } else if (difVal < -8) {
		  	style.backgroundColor = '#D46A6A';
		  } else if (difVal < -4) {
		  	style.backgroundColor = '#FFAAAA';
		  }
		  return style;
	};



	render() {
		return (
			<div>
				<h1 className='tc'>{this.props.name} Rankings</h1>
					<div className="row">
					  <div className='col-md-4'>
						  <ButtonToolbar>
						    <DropdownButton className="buttonGuide"
						      bsSize="large"
						      title="Draft website"
						      id="dropdown-size-large">
						      <MenuItem onClick={()=>this.onSourceClick('Yahoo')} eventKey="1">YAHOO</MenuItem>
						      <MenuItem onClick={()=>this.onSourceClick('CBS')} eventKey="2">CBS</MenuItem>
						      <MenuItem onClick={()=>this.onSourceClick('ESPN')} eventKey="3">ESPN</MenuItem>
						      <MenuItem onClick={()=>this.onSourceClick('FOX')} eventKey="3">FOX</MenuItem>
						      <MenuItem onClick={()=>this.onSourceClick('NFL')} eventKey="3">NFL</MenuItem>
						      <MenuItem divider/>
						      <MenuItem onClick={()=>this.onSourceClick('RESET')} eventKey="3">Reset</MenuItem>
						    </DropdownButton>
						  </ButtonToolbar>
					  </div>	
					  // Make below new page, based on the onSourceClick change state value to update content below
					  <div className='col-md-8'>
						  <p className='guideInstructions'>
						  	Select website you are drafting from on drop down bar to left
						  	<br/>
						  	Table will compare draft site rankings to average rankings of other sites, highlighting undervalued players to be targeted in draft and overvalued players to be avoided
						  </p>
					  </div>
					</div>
				<br/>
				<BootstrapTable keyField='key' defaultSorted={defaultSorted} rowStyle={this.rowStyle} data={ this.state.ranks } columns={ this.state.col } />
			</div>	
		);
	}
}


export default GuideRankings;

