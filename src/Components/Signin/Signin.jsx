import React from 'react';
import {
	Container,
	FormH1,
	ForwWrap,
	Icon,
	FormContent,
	Form,
	FormLabel,
	FormInput,
	FormButton,
	Text,
} from './SigninElement';

const Signin = () => {
	return (
		<>
			<Container>
				<ForwWrap>
					<Icon to='/'>Hoola</Icon>
					<FormContent>
						<Form>
							<FormH1>Sign in to your account</FormH1>
							<FormLabel htmlFor='for'>Email</FormLabel>
							<FormInput type='email' required />
							<FormLabel htmlFor='for'>Password</FormLabel>
							<FormInput type='password' required />
							<FormButton type='submit'>Continue</FormButton>
							<Text>Forgot Password</Text>
						</Form>
					</FormContent>
				</ForwWrap>
			</Container>
		</>
	);
};

export default Signin;
