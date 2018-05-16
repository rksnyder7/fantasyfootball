import React, { Component } from 'react';
import './App.css';
// import CardList from './CardList';
// import SearchBox from './SearchBox';
// import RankingsList from './rankingsList';
// import RankHeader from './RankHeader';
import Homepage from './Homepage';
import NavbarFunc from './Navbar';
import TablePage from './TablePage';
import { deRanks, teRanks, qbRanks, wrRanks, rbRanks, colPlayers, colDefense } from './Data';


// add ability to click on player name and bring to espn page

// update other rankings to have "-" instead of N/A
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
      route: 'homepage'
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
          case 'qbRankNormal': return <TablePage name='Quarterback' dataSet={qbRanks} col={colPlayers}/>
          case 'rbRankNormal': return <TablePage name='Running Back' dataSet={rbRanks} col={colPlayers}/>
          case 'wrRankNormal': return <TablePage name='Wide Receiver' dataSet={wrRanks} col={colPlayers}/>
          case 'teRankNormal': return <TablePage name='Tight End' dataSet={teRanks} col={colPlayers}/>
          case 'deRankNormal': return <TablePage name='Defense' dataSet={deRanks} col={colDefense}/>
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

