import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
	FooterContainer,
	FooterWrap,
	FooterLinkContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from './FooterElement';
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaGithub,
	FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinkContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to='/'>How it works</FooterLink>
							<FooterLink to='/'>Testimonials</FooterLink>
							<FooterLink to='/'>Careers</FooterLink>
							<FooterLink to='/'>Investors</FooterLink>
							<FooterLink to='/'>Terms of Service</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Contact Us</FooterLinkTitle>
							<FooterLink to='/'>Contact</FooterLink>
							<FooterLink to='/'>Support</FooterLink>
							<FooterLink to='/'>Destinations</FooterLink>
							<FooterLink to='/'>Sponsorships</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Video</FooterLinkTitle>
							<FooterLink to='/'>Submit Video</FooterLink>
							<FooterLink to='/'>Ambassadors</FooterLink>
							<FooterLink to='/'>Agency</FooterLink>
							<FooterLink to='/'>Influencer</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Social Media</FooterLinkTitle>
							<FooterLink to='/'>Instagram</FooterLink>
							<FooterLink to='/'>Facebook</FooterLink>
							<FooterLink to='/'>Youtube</FooterLink>
							<FooterLink to='/'>Twitter</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinkContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/' onClick={toggleHome}>
							Hoola
						</SocialLogo>
						<WebsiteRights>
							Hoola &copy; {new Date().getFullYear()} All rights reserved.{' '}
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href='/' target='blank' aria-label='Facebook'>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href='/' target='blank' aria-label='Instagram'>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href='/' target='blank' aria-label='Youtube'>
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink href='/' target='blank' aria-label='Twitter'>
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink href='/' target='blank' aria-label='Github'>
								<FaGithub />
							</SocialIconLink>
							<SocialIconLink href='/' target='blank' aria-label='Linkedin'>
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;