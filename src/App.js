import React, { Component } from 'react';
import './App.css';
// import CardList from './CardList';
// import SearchBox from './SearchBox';
// import RankingsList from './rankingsList';
// import RankHeader from './RankHeader';
import Homepage from './Homepage.js';
import { defaultSorted, rowStyle, deRanks, teRanks, qbRanks, wrRanks, rbRanks, colPlayers, colDefense } from './Data';
import BootstrapTable from 'react-bootstrap-table-next';


// make homepage; links to other pages and routing ability
// add links to other pages
// add background pic
// make header

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
      searchfield: '',
      route: 'homepage'
    }
  }

  onItemClick = (event) => {
    console.log("it works", event)
    // window.open("http://www.espn.com/", '_blank)'
    this.setState({route: event})
  }

  render() {

    // let columns2 = columns.slice(2,8)
    // columns2.unshift(columns.slice(0,1)[0])


    const { quarterbacks, searchfield, route } = this.state;

    return (

      <div className='tc'>
        <h2>HEADER HOLD</h2>
        <p onClick={()=>this.onItemClick('homepage')}>Home</p>

      {(() => {
        switch (route) {
          case 'homepage': return <Homepage onItemClick={this.onItemClick}/>
          case 'qbRankNormal': return <BootstrapTable defaultSorted={defaultSorted} keyField='id' rowStyle={rowStyle} data={ qbRanks } columns={ colPlayers } />
          case 'rbRankNormal': return <BootstrapTable defaultSorted={defaultSorted} keyField='id' rowStyle={rowStyle} data={ rbRanks } columns={ colPlayers } />
          case 'wrRankNormal': return <BootstrapTable defaultSorted={defaultSorted} keyField='id' rowStyle={rowStyle} data={ wrRanks } columns={ colPlayers } />
          case 'teRankNormal': return <BootstrapTable defaultSorted={defaultSorted} keyField='id' rowStyle={rowStyle} data={ teRanks } columns={ colPlayers } />
          case 'deRankNormal': return <BootstrapTable defaultSorted={defaultSorted} keyField='id' rowStyle={rowStyle} data={ deRanks } columns={ colDefense } />
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

