import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

const Navbar = () => {
	return (
		<div id='mainNavbar' className='navbar navbar-expand-sm navbar-light bg-light'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					<img id='logo' src={logo} alt='Easterseals Logo' />
				</Link>
				<button
					class='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span class='navbar-toggler-icon' />
				</button>
				<div class='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item'>
							<Link className='nav-link' to='!#'>
								Run Sign-Up
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/about'>
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
