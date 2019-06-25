import React, { Fragment } from 'react';
import Jumbotron from '../layout/Jumbotron';
import Main from '../layout/Main';
import Sidebar from '../layout/Sidebar';
import Info from '../layout/Info';
import Footer from '../layout/Footer';

const Home = () => {
	return (
		<Fragment>
			<Jumbotron />
			<div className='container-fluid'>
				<div className='row justify-content-around px-3 pl-4'>
					<Main />
					<Sidebar />
				</div>
				<hr />
				<Info />
				<Footer />
			</div>
		</Fragment>
	);
};

export default Home;
