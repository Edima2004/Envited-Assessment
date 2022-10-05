import React from 'react';
import CreateButton from '../reusable components/CreateButton';

const Home = () => {
	return (
		<div className="home-all">
         <div className="container text-center event home-all">
            <header>
               <h1>
                  Imagine if <br />
                  <span className="home-purple">Snapchat</span>
                  <br />
                  had events.
               </h1>
               <p className="home-p">
                  Easily host and share events with your friends across any social
                  media.
               </p>
               <div className="show-flex">
                  <CreateButton/>
                </div>
            </header>
            <div className="home-img">
               <img src="../images/home_image.png" alt="home" />
            </div>
            <div className="hide-flex">
               <CreateButton/>
            </div>
         </div>
      </div>
	);
};

export default Home;
