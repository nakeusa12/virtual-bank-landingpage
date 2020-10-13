import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer, Hero, Info, Navbar, Services, Sidebar } from '../Components';
import {
	homeObjOne,
	homeObjTwo,
	homeObjThree,
} from '../Components/InfoSection/Data';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Router>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<Hero />
			<Info {...homeObjOne} />
			<Info {...homeObjTwo} />
			<Services />
			<Info {...homeObjThree} />
			<Footer />
		</Router>
	);
};

export default Home;
