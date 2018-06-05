import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage';
import NavbarFunc from './Navbar';
import TableRankings from './TableRankings';
import GuideRankings from './GuideRankings';
import { alRanks, deRanks, teRanks, qbRanks, wrRanks, rbRanks, colDefense, colNew } from './Data';


class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 'homepage',
    }
  }

  onItemClick = (event) => {
    this.setState({route: event})
  }

  render() {


    const { route } = this.state;

    return (

      <div>
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet"/>

        <NavbarFunc onItemClick={this.onItemClick}/>
        
      {(() => {
        switch (route) {
          case 'homepage': return <Homepage onItemClick={this.onItemClick}/>
          case 'alRankNormal': return <TableRankings name='All'  dataSet={alRanks} col={colNew}/>
          case 'qbRankNormal': return <TableRankings name='Quarterback'  dataSet={qbRanks} col={colNew}/>
          case 'rbRankNormal': return <TableRankings name='Running Back'  dataSet={rbRanks} col={colNew}/>
          case 'wrRankNormal': return <TableRankings name='Wide Receiver' dataSet={wrRanks} col={colNew}/>
          case 'teRankNormal': return <TableRankings name='Tight End' dataSet={teRanks} col={colNew}/>
          case 'deRankNormal': return <TableRankings name='Defense' dataSet={deRanks} col={colDefense}/>
          case 'alRankGuide': return <GuideRankings name='All' dataSet={alRanks}/>
          case 'qbRankGuide': return <GuideRankings name='Quarterback' dataSet={qbRanks}/>
          case 'rbRankGuide': return <GuideRankings name='Running Back' dataSet={rbRanks}/>
          case 'wrRankGuide': return <GuideRankings name='Wide Receiver' dataSet={wrRanks}/>
          case 'teRankGuide': return <GuideRankings name='Tight End' dataSet={teRanks}/>
          case 'deRankGuide': return <GuideRankings name='Defense' dataSet={deRanks} col={colDefense}/>
          default: return <h1>homepage</h1>
        }
      })()}

      </div>
    );  
  } 
}

export default App;


