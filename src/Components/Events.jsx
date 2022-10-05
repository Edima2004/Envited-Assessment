import React from 'react';
import TagOutlay from '../reusable components/Tag Outlay';

const Events = () => {
	return (
		<div className="event">
			<div className='event-img'>
				<img className='event-IMG' src="../images/Event image.png" alt="" />
			</div>
         
            <div className="container event-bottom">
               <h2 className='event-h2'>Birthday Bash</h2>
               <p className='event-p'>Hosted by Elysia</p>
            
            <TagOutlay icon='../images/calendar_icon.png' name='18 August 6:00PM' detail='to 19 August 1:00PM UTC +10' />
            <TagOutlay icon= '../images/location_icon.png' name= 'Street name' detail='Suburb, State, Postcode' />
         </div>
		</div> 
	);
};

export default Events;
