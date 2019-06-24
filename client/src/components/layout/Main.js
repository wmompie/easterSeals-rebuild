import React from 'react';
import running from '../../img/running.png';

const Main = () => {
	return (
		<div className='col-12 col-lg-7 order-1'>
			<div className='border-bottom mb-5'>
				<h2>Easterseals Commitment</h2>
				<p>
					For the past 95 years, Easter Seals has played an important role in providing support for
					children and youth with physical disabilities. Thanks to our generous donors, we continue
					to offer programs that allow kids to experience freedom, independence and a sense of
					accomplishment. For families, Easter Seals is somewhere to turn for help when they need
					it.
				</p>
				<p>
					Easter Seals is a registered charitable organization that helps children and youth with
					physical disabilities from all ethnic and religious backgrounds. We assist families with
					the purchase of costly mobility equipment such as wheelchairs, walkers, porch lifts and
					ramps, as well as communication devices, toileting aids and bathing equipment. Easter
					Seals also offers post-secondary scholarships and provides access to information and
					resources, and public education and awareness.
				</p>
				<p>Easter Seals helps kids BE KIDS.</p>
			</div>
			<div className='mb-4'>
				<p>
					<i className='far fa-calendar-alt pr-1' />
					<strong>Event Start Time:</strong> America Airlines Arena, 601 Biscayne Blvd, Miami 33132
				</p>
				<h3 className='mt-4'>
					<img
						className='img-fluid easter-girl pr-2'
						src={running}
						alt='Easterseals woman running'
					/>
					Run/Walk 1 Mile
				</h3>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>REGISTRATION TYPE</th>
							<th scope='col'>EFFECTIVE DATES</th>
							<th scope='col'>ALL AGES</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Early Registration</td>
							<td>January 20, 2019 - February 2, 2019</td>
							<td>&#36;40</td>
						</tr>
						<tr>
							<td>General Registration</td>
							<td>February 3, 2019 - February 16, 2019</td>
							<td>&#36;45</td>
						</tr>
						<tr>
							<td>Late Registration</td>
							<td>February 17, 2019 - Race Day</td>
							<td>&#36;50</td>
						</tr>
					</tbody>
				</table>
				<p>&#42;Children 10 and Under are FREE and do not need to be registered.</p>
				<h3 className='mt-5'>
					<img
						className='img-fluid easter-girl pr-2'
						src={running}
						alt='Easterseals woman running'
					/>
					Run/Walk 5k or 10k
				</h3>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>REGISTRATION TYPE</th>
							<th scope='col'>EFFECTIVE DATES</th>
							<th scope='col'>ALL AGES</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Early Registration</td>
							<td>January 20, 2019 - February 2, 2019</td>
							<td>&#36;35</td>
						</tr>
						<tr>
							<td>General Registration</td>
							<td>February 3, 2019 - February 16, 2019</td>
							<td>&#36;40</td>
						</tr>
						<tr>
							<td>Late Registration</td>
							<td>February 17, 2019 - Race Day</td>
							<td>&#36;45</td>
						</tr>
					</tbody>
				</table>
				<div className='asterisk-section mb-4'>
					<p>&#42;Children 10 and Under are FREE and do not need to be registered.</p>
					<p>
						&#42;Children will not receive a race t-shirt. They will be given a finishers medal.
					</p>
					<p>
						&#42;A &#36;5 fee will apply to any race/bib changes after registration is completed.
						This applies to runners only as they will be timed and a new timing chip will be
						required.
					</p>
				</div>
				<h3>What Does Your Registration Fee Cover?</h3>
				<p>
					The Miami Easter Seals 1 Mile, 5k and 10k Run/Walk is a fundraiser for children and youth
					with physical disabilities. Your event registration fee helps offset the cost of the event
					and support the programs and services offered by Easter Seals of South Florida. Your
					registration fee entitles you to the following:
				</p>

				<div className='container'>
					<div className='row justify-content-around'>
						<img
							src='https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
							alt='Registration event'
							id='regis-event-img'
							className='order-1 order-lg-2 d-none d-md-inline img-fluid col-md-6 my-1 mx-auto mb-4 px-0 rounded'
						/>
						<ul className='justify-content-start order-2 order-lg-1 col-md-6 col-lg-4 my-1 m-auto pb-4'>
							<li>Event entry</li>
							<li>Technical t-shirt for participants</li>
							<li>Chip timing</li>
							<li>Race number/bib</li>
							<li>Post-race food</li>
							<li>Race kit goodie bag</li>
							<li>Finisher's medal</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='row mt-5 mb-4 justify-content-center'>
				{/* <a
					href='signup.php'
					data-toggle='tooltip'
					data-placement='top'
					title='Head to Sign-up Page'
					className='btn btn-lg bg-orange col-xl-6'
					role='button'
				>
					Register Here!
				</a> */}
			</div>
		</div>
	);
};

export default Main;
