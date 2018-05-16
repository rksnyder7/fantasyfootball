import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import RankingsList from './rankingsList';
import RankHeader from './RankHeader';
import { defaultSorted, rowStyle, teRanks, qbRanks, wrRanks, rbRanks, quarterbacks, columns } from './Data';
import BootstrapTable from 'react-bootstrap-table-next';

// make def page, and format functions to work for def too 
// make homepage; links to other pages and routing ability
// add links to other pages
// add background pic
// make header

// for analytical rankings
// add averages of others to the original database so all data is 
// then send input to the data.js file and return according to an if statement which determines order of columns array
// make a function in data.js that will created needed averages and std seperate from other data, just have same name

class App extends Component {
  constructor() {
    super()
    this.state = {
      quarterbacks: quarterbacks,
      searchfield: '',
      route: 'ranking4',
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
    console.log(event.target.value)
  }

  onItemClick = (event) => {
    console.log("it works")
    window.open("http://www.espn.com/", '_blank')
  }


  render() {

    const { quarterbacks, searchfield, route } = this.state;

    return (

      <div className='tc'>
        <h2>HEADER HOLD</h2>

      {(() => {
        switch (route) {
          case 'ranking1': return <BootstrapTable defaultSorted={defaultSorted} keyField='id' rowStyle={rowStyle} data={ qbRanks } columns={ columns } />
          case 'ranking2': return <BootstrapTable defaultSorted={defaultSorted} keyField='id' rowStyle={rowStyle} data={ rbRanks } columns={ columns } />
          case 'ranking3': return <BootstrapTable defaultSorted={defaultSorted} keyField='id' rowStyle={rowStyle} data={ wrRanks } columns={ columns } />
          case 'ranking4': return <BootstrapTable defaultSorted={defaultSorted} keyField='id' rowStyle={rowStyle} data={ teRanks } columns={ columns } />
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
