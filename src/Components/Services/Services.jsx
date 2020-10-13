import React from 'react';
import ServiceCard from './ServiceCard';
import Icon1 from '../../Assets/Images/svg-1.svg';
import Icon2 from '../../Assets/Images/svg-4.svg';
import Icon3 from '../../Assets/Images/svg-5.svg';
import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
} from './ServicesElements';

const Services = () => {
	return (
		<ServicesContainer id='services'>
			<ServicesH1>Our Services</ServicesH1>
			<ServicesWrapper>
				<ServiceCard
					icon={Icon1}
					heading='Reduce Expenses'
					paragraph='We help reduce your fess and increase your overall revenue.'
				/>
				<ServiceCard
					icon={Icon2}
					heading='Virtual Offices'
					paragraph='You can access our platform online anywhere in the world.'
				/>
				<ServiceCard
					icon={Icon3}
					heading='Reduce Expenses'
					paragraph='Unlock our special membership card that returns 5% cashback.'
				/>
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default Services;
