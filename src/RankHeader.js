import React from 'react';


const RankHeader = ({name}) => {
	return (
          <div className='dt dt--fixed w-100 br3 pa3 tl'>
            <h3 className="dib dtc">{name}</h3>
		      {(() => {
		        switch (name) {
		          case "Team":  return null;
		          default:      return <h3 className='dib dtc'>Team</h3>;
		        }
		      })()}	
            
            <h3 className="dib dtc">Bye</h3>
            <h3 className="dib dtc">FP</h3>
            <h3 className="dib dtc">ESPN</h3>
            <h3 className="dib dtc">FC</h3>
            <h3 className="dib dtc">AVG</h3>
            <h3 className="dib dtc">STD</h3>
          </div>
	)
}

export default RankHeader;