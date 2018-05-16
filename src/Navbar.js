import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

const NavbarFunc = ({ onItemClick }) => {
	return (
		<div>
		 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
 		
			<Navbar className='navbar-fixed-top navbar-inverse'>
	          <Navbar.Header>
	              <Navbar.Brand>
	                <span>Fantasy Football</span>
	              </Navbar.Brand>
	          </Navbar.Header>
	          <Nav>
	          	<NavItem onClick={()=>onItemClick('homepage')}>
	          		Home
	          	</NavItem>
	            <NavDropdown eventKey={3} title="Rankings" id="basic-nav-dropdown">
	              <MenuItem onClick={()=>onItemClick('qbRankNormal')} eventKey={3.1}>Quarterbacks</MenuItem>
	              <MenuItem onClick={()=>onItemClick('rbRankNormal')} eventKey={3.2}>Running Backs</MenuItem>
	              <MenuItem onClick={()=>onItemClick('wrRankNormal')} eventKey={3.3}>Wide Receivers</MenuItem>
	              <MenuItem onClick={()=>onItemClick('teRankNormal')} eventKey={3.4}>Tight Ends</MenuItem>
	              <MenuItem onClick={()=>onItemClick('deRankNormal')} eventKey={3.4}>Defenses</MenuItem>
	              <MenuItem divider />
	            </NavDropdown>
	           	<NavDropdown eventKey={3} title="Draft" id="basic-nav-dropdown">
	              <MenuItem onClick={()=>onItemClick('qbRankNormal')} eventKey={3.1}>Quarterbacks</MenuItem>
	              <MenuItem onClick={()=>onItemClick('rbRankNormal')} eventKey={3.2}>Running Backs</MenuItem>
	              <MenuItem onClick={()=>onItemClick('wrRankNormal')} eventKey={3.3}>Wide Receivers</MenuItem>
	              <MenuItem onClick={()=>onItemClick('teRankNormal')} eventKey={3.4}>Tight Ends</MenuItem>
	              <MenuItem onClick={()=>onItemClick('deRankNormal')} eventKey={3.4}>Defenses</MenuItem>
	              <MenuItem divider />
	            </NavDropdown>
	          </Nav>
           	  <Navbar.Text pullRight>Consolidated rankings data and draft strategy guide</Navbar.Text>
	        </Navbar>
		</div>
	)
}

export default NavbarFunc;




	            // <NavItem eventKey={1} href="#">
	            //   Link
	            // </NavItem>