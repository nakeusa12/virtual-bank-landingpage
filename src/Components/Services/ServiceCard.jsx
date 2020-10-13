import React from 'react';
import {
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP,
} from './ServicesElements';

const ServiceCard = ({ icon, heading, paragraph }) => {
	return (
		<ServicesCard>
			<ServicesIcon src={icon} />
			<ServicesH2>{heading}</ServicesH2>
			<ServicesP>{paragraph}</ServicesP>
		</ServicesCard>
	);
};

export default ServiceCard;
