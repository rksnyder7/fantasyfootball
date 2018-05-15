import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import RankingsList from './rankingsList';
import RankHeader from './RankHeader';
import { defaultSorted, rowStyle, qbRanks, wrRanks, rbRanks, quarterbacks, columns } from './Data';
import BootstrapTable from 'react-bootstrap-table-next';



class App extends Component {
  constructor() {
    super()
    this.state = {
      quarterbacks: quarterbacks,
      searchfield: '',
      route: 'ranking1',
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
    const filteredQuarterbacks = quarterbacks.filter(quarterback => {
      return quarterback.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (
      <div>
        { route === 'ranking1' 
          ? <div className='tc'>
              <h1>Quarterback Rankings</h1>
              <BootstrapTable defaultSorted={defaultSorted} className="check" bordered={ false} keyField='id' rowStyle={rowStyle} data={ qbRanks } columns={ columns } />
              <h1>test2</h1>
            </div>
          : (
              <div className='tc'>
                <h1>Fantasy Football</h1>
              </div>
            )
        }
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
