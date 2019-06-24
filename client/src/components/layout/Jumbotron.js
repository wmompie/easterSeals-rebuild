import React from 'react';

const Jumbotron = () => {
	return (
		<div id='home-section' className='jumbotron-fluid pb-5 bg-light shadow mb-5'>
			<div className='dark-overlay' />
			<div className='container text-center text-light'>
				<h1 id='mainHeading' className='display-2'>
					Easterseals Run
				</h1>
				<img
					src='https://images.unsplash.com/photo-1519056312994-33952f238fac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1988&q=80'
					alt='Easterseals Headquarters'
					id='jumbo-img'
					className='d-none d-sm-inline img-fluid w-75 my-2 rounded'
				/>
				<div id='jumbo-content'>
					<p className='lead pt-3'>
						The 2019 Miami Easter Seals 1 Mile, 5k and 10k Run/Walk will be held near America
						Airlines Arena on Sunday, February 24 at 601 Biscayne Blvd in Downtown Miami along
						Biscayne Bay. The race venue will provide a fun, family-friendly atmosphere, while also
						delivering a flat, fast and scenic run course through the Metropolitan area.
					</p>
					<hr className='my-4' />
					<p>
						All events will start and finish at the America Airlines Arena. Registrants receive a
						t-shirt <i className='fas fa-tshirt' />, finisher’s medal <i className='fas fa-medal' />
						, post-race food <i className='fas fa-hamburger' /> and more.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Jumbotron;
