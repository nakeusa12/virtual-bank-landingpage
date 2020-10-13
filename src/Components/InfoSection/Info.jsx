import React from 'react';
import { Button } from '../../Elements/ButtonElements';
import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	Column2,
	ImgWrap,
	Img,
	BtnWrap,
} from './InfoElement';

const Info = ({
	lightBg,
	id,
	imgStart,
	topLine,
	lightText,
	headline,
	darkText,
	description,
	buttonLine,
	img,
	alt,
	primary,
	dark,
	dark2,
	Pcolor,
}) => {
	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine Pcolor={Pcolor}>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
								<BtnWrap>
									<Button
										to='/home'
										smooth={true}
										duration={500}
										spy={true}
										exact='true'
										offset={-80}
										primary={primary ? 1 : 0}
										dark={dark ? 1 : 0}
										dark2={dark2 ? 1 : 0}>
										{buttonLine}
									</Button>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
};

export default Info;
