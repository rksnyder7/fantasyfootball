import React, { Component } from 'react';
import './App.css';
// import CardList from './CardList';
// import SearchBox from './SearchBox';
// import RankingsList from './rankingsList';
// import RankHeader from './RankHeader';
import Homepage from './Homepage';
import NavbarFunc from './Navbar';
import TableRankings from './TableRankings';
import GuideRankings from './GuideRankings';
import { deRanks, teRanks, qbRanks, wrRanks, rbRanks, colPlayers, colDefense, colNew } from './Data';


// add ability to click on player name and bring to espn page


// add dropdown to draft guide pages where you select one of the ranking sources
// then that selection goes to the first of the list using followed by the other two/three/four sources
// then the avg of the other collective sources is shown and the next column is the differential between this avg and selected sources


// for analytical rankings
// add averages of others to the original database so all data is 
// then send input to the data.js file and return according to an if statement which determines order of columns array
// make a function in data.js that will created needed averages and std seperate from other data, just have same name

class App extends Component {
  constructor() {
    super()
    this.state = {
      // quarterbacks: quarterbacks,
      // searchfield: '',
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
          case 'qbRankNormal': return <TableRankings name='Quarterback'  dataSet={qbRanks} col={colPlayers}/>
          case 'rbRankNormal': return <TableRankings name='Running Back'  dataSet={rbRanks} col={colPlayers}/>
          case 'wrRankNormal': return <TableRankings name='Wide Receiver' dataSet={wrRanks} col={colPlayers}/>
          case 'teRankNormal': return <TableRankings name='Tight End' dataSet={teRanks} col={colPlayers}/>
          case 'deRankNormal': return <TableRankings name='Defense' dataSet={deRanks} col={colDefense}/>
          case 'qbRankGuide': return <GuideRankings name='Quarterback' dataSet={qbRanks} col={colPlayers}/>
          case 'rbRankGuide': return <GuideRankings name='Running Back' dataSet={rbRanks} col={colPlayers}/>
          case 'wrRankGuide': return <GuideRankings name='Wide Receiver' dataSet={wrRanks} col={colPlayers}/>
          case 'teRankGuide': return <GuideRankings name='Tight End' dataSet={teRanks} col={colPlayers}/>
          case 'deRankGuide': return <GuideRankings name='Defense' dataSet={deRanks} col={colDefense}/>
          default: return <h1>homepage</h1>
        }
      })()}

      </div>
    );  
  } 
}

export default App;



              // <BootstrapTable keyField='id' data={ rbRanks } columns={ columns } />
              // <BootstrapTable keyField='id' data={ wrRanks } columns={ columns } />


              // <RankHeader name='Player'/>
              // <RankingsList playerRanks={rbRanks} order={rbOrder} teamSource={qbPlayerTeam}/>
                // <SearchBox searchChange={this.onSearchChange}/>
                // <CardList quarterbacks={filteredQuarterbacks} onItemClick={this.onItemClick}/>
                // <RankHeader name='Team'/>
                // <RankingsList playerRanks={deRanks} order={deOrder} teamSource='defense'/>
                // <br/>
                // <RankHeader name='Player'/>
                // <RankingsList playerRanks={rbRanks} order={rbOrder} teamSource={rbPlayerTeam}/>
                // <br/>

                
    // const filteredQuarterbacks = quarterbacks.filter(quarterback => {
    //   return quarterback.name.toLowerCase().includes(searchfield.toLowerCase())
    // })



  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value})
  //   console.log(event.target.value)
  // }

