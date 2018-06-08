import React from 'react';

const GuideInstructions = ({guide, source}) => {
	return (
			<div>
				{(() => {
			        switch (guide) {
			          case 'instruct': return (
			          		<div className='row draftGuideText'>
					          	<p className='guideInstructions textColor'>
								  	Select website you are drafting from on drop down bar above
								  	<br/>
								  	Table will compare draft site rankings to average rankings of other sites, highlighting undervalued players to be targeted in draft and overvalued players to be avoided
								</p>
							</div>
						)
			          case 'key': return (
				          	<div className='row textColor draftGuideText'>
				          		<div className='col-md-4 col-sm-4 col-xs-12 guideInstructions textColor'>
					         		<ul id='tableInstructions'>
					         			<li>
					         				You have selected {source} as your draft website
					         			</li>
					         			<li>
					         				The AVG w/o {source} column shows players average rank without {source}
					         			</li>
					         			<li>
					         				DIF shows difference between AVG w/o {source} and {source}
					         			</li>
					         		</ul>	
					          	</div>
				          		<div className='col-md-8 col-sm-8 col-xs-12 keyTable draftGuideText'>
					          		<div className="row insideRow">
					          			<div className='col-md-1 col-sm-1 col-xs-1 color' style={{backgroundColor: "#2D882D"}}>
					          			</div>
					          			<div className='col-md-5 col-sm-5 col-xs-5'>
					          				Highly undervalued - Draft Priority!
					          			</div>
					          			<div className='col-md-1 col-sm-1 col-xs-1 color' style={{backgroundColor: "#AA3939"}}>
					          			</div>
					          			<div className='col-md-5 col-sm-5 col-xs-5'>
					          				Highly overvalued - Do Not Draft!
					          			</div>
					          		</div>
					          		<div className="row insideRow">
					          			<div className='col-md-1 col-sm-1 col-xs-1 color' style={{backgroundColor: "#55AA55"}}>
					          			</div>
					          			<div className='col-md-5 col-sm-5 col-xs-5'>
					          				Moderately undervalued - Target this player
					          			</div>
					          			<div className='col-md-1 col-sm-1 col-xs-1 color' style={{backgroundColor: "#D46A6A"}}>
					          			</div>
					          			<div className='col-md-5 col-sm-5 col-xs-5'>
					          				Moderately overvalued - Avoid this player
					          			</div>
					          		</div>
					          		<div className="row insideRow">
					          			<div className='col-md-1 col-sm-1 col-xs-1 color' style={{backgroundColor: "#88CC88"}}>
					          			</div>
					          			<div className='col-md-5 col-sm-5 col-xs-5'>
					          				Slightly undervalued - Good pick
					          			</div>
					          			<div className='col-md-1 col-sm-1 col-xs-1 color' style={{backgroundColor: "#FFAAAA"}}>
					          			</div>
					          			<div className='col-md-5 col-sm-5 col-xs-5'>
					          				Slightly overvalued - Bad pick
					          			</div>
					          		</div>
					          	</div>
				          	</div>
			          	)
			          default: return <h1>error</h1>
			        }
			    })()}
			</div>			
		)
}

export default GuideInstructions;