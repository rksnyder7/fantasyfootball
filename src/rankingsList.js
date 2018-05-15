import React from 'react';
import { abbrevTeam, byeTeam } from './Data';


// table format and links and individual pages
// http://tachyons.io/components/tables/striped-dark/index.html  table format
// click on names brings to espn page? or just top 10 of each position, to do for all players would need espn id of each to link to webpage is there a way to scrape that data
// setup links so you can click qb or rb or de and the list pops up, state change, have links in header


const RankingsList = ({playerRanks, order, teamSource}) => {
	return (
		<div>
			{
				order.map((team, i) => {
					return (
						<div key={i} className='dt dt--fixed w-100 pa2 stripe-dark tl'>
							<h3 className="dib dtc">{team}</h3>
						      {(() => {
						        switch (teamSource) {
						          case "defense":  return null;
						          default:      return <h3 className='dib dtc'>{teamSource[team]}</h3>;
						        }
						      })()}				      
						    <h3 className="dib dtc">
						      {(() => {
						        switch (teamSource) {
						          case "defense":  return byeTeam[abbrevTeam[team]];
						          default:      return byeTeam[teamSource[team]];
						        }
						      })()}
						    </h3>
							<h3 className="dib dtc">{playerRanks[team]['ES']}</h3>
							<h3 className="dib dtc">{playerRanks[team]['FP']}</h3>
							<h3 className="dib dtc">{playerRanks[team]['FC']}</h3>
							<h3 className="dib dtc">{playerRanks[team]['AVG']}</h3>
							<h3 className="dib dtc">{playerRanks[team]['STD']}</h3>
						</div>
					)
				})
			}
		</div>
	)
}

export default RankingsList;

















// const RankingsList = ({playerRanks, order, teamSource}) => {
// 	return (
// 		<div>
// 			{
// 				order.map((team, i) => {
// 					return (
// 						<div key={i} className='dt dt--fixed w-100 pa2 stripe-dark tl'>
// 							<h3 className="dib dtc">{team}</h3>
// 						      {(() => {
// 						        switch (teamSource) {
// 						          case "defense":  return null;
// 						          default:      return <h3 className='dib dtc'>{teamSource[team]}</h3>;
// 						        }
// 						      })()}				      
// 						    <h3 className="dib dtc">
// 						      {(() => {
// 						        switch (teamSource) {
// 						          case "defense":  return byeTeam[abbrevTeam[team]];
// 						          default:      return byeTeam[teamSource[team]];
// 						        }
// 						      })()}
// 						    </h3>
// 							<h3 className="dib dtc">{playerRanks[team]['ES']}</h3>
// 							<h3 className="dib dtc">{playerRanks[team]['FP']}</h3>
// 							<h3 className="dib dtc">{playerRanks[team]['FC']}</h3>
// 							<h3 className="dib dtc">{playerRanks[team]['AVG']}</h3>
// 							<h3 className="dib dtc">{playerRanks[team]['STD']}</h3>
// 						</div>
// 					)
// 				})
// 			}
// 		</div>
// 	)
// }