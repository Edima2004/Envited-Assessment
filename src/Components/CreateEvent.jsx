import React from 'react';
import { useGlobalContext } from '../context';

const CreateEvent = () => {
	const { nextBtn } = useGlobalContext();
	return (
		<div className="form-all">
			<h2 className="text-center"> Fill the form below to create an event.</h2>
			<form action="">
				<label htmlFor="Event Name">
					{' '}
					Event Name <br /> <input className="input-box" type="text" />
				</label>
				<br />

				<label htmlFor="Host Name">
					{' '}
					Host Name <br />
					<input className="input-box" type="text" />
				</label>
				<br />

				<label htmlFor="Start Date">
					{' '}
					Start Date <br />
					<input className="input-box" type="datetime-local" />
				</label>
				<br />

				<label htmlFor="End Date">
					{' '}
					End Date <br />
					<input className="input-box" type="datetime-local" />
				</label>
				<br />

				<label htmlFor="Location">
					{' '}
					Location <br />
					<input className="input-box" type="location" />
				</label>
				<br />

				<label htmlFor="Event Photo">
					{' '}
					Event Photo <br />
					<input className="input-box" type="file" />
				</label>
				<br />
				<div>
					<a href="/event" className="btn-next home-button text-center">
						Next
					</a>
				</div>
			</form>
		</div>
	);
};

export default CreateEvent;
