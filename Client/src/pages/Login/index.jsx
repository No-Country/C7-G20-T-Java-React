import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { THEME } from '../../theme/theme';
import Logo from '../../assets/logo';
import { Label } from '../../components';
import { useState } from 'react';

const Login = () => {
	const [values, setValues] = useState({ email: '', password: '' });

	const navigate = useNavigate();

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		console.log(values);
	};

	const handleGoToRegister = () => {
		navigate('/Register', { replace: true });
	};

	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100vh',
			}}
		>
			<Grid container height={500} justifyContent='center' alignItems='center'>
				<Grid
					item
					height='100%'
					xs={5}
					sx={{
						display: 'flex',
						alignItems: 'flex-start',
						justifyContent: 'flex-start',
						backgroundColor: 'white',
						borderTopLeftRadius: 20,
						borderBottomLeftRadius: 20,
						padding: '50px 50px',
					}}
				>
					<form
						onSubmit={handleSubmit}
						style={{
							display: 'flex',
							flexDirection: 'column',
							width: '100%',
							height: '100%',
						}}
					>
						<Typography
							sx={{
								...THEME.typography.h3,
								textAlign: 'center',
								marginBottom: 2,
							}}
						>
							Ingresar
						</Typography>

						<Label label='Email' />
						<input
							type='text'
							name='email'
							placeholder='tuemail@aqui.com'
							autoComplete='off'
							onChange={handleChange}
							style={{
								height: '30px',
								borderRadius: '8px',
								borderWidth: 0.5,
								borderColor: 'rgba(0, 0, 0, 0.3)',
								padding: '5px',
								fontSize: '1rem',
							}}
						/>

						<Label label='Contraseña' />
						<input
							type='password'
							autoComplete='off'
							name='password'
							onChange={handleChange}
							style={{
								height: '30px',
								borderRadius: '8px',
								borderWidth: 0.5,
								borderColor: 'rgba(0, 0, 0, 0.3)',
								padding: '5px',
								fontSize: '1rem',
							}}
						/>

						<Typography
							sx={{
								...THEME.typography.subtitle2,
								marginTop: '40px',
								textAlign: 'center',
							}}
						>
							¿Olvidaste la contraseña?
						</Typography>

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								width: '100%',
							}}
							mt='auto'
						>
							<Button
								type='button'
								variant='contained'
								color='secondary'
								onClick={handleGoToRegister}
							>
								Registrarse
							</Button>
							<Button type='submit' variant='contained' color='primary'>
								Ingresar
							</Button>
						</Box>
					</form>
				</Grid>
				<Grid
					item
					height='100%'
					xs={5}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: THEME.palette.secondary.main,
						borderTopRightRadius: 20,
						borderBottomRightRadius: 20,
					}}
				>
					<Logo />
				</Grid>
			</Grid>
		</Container>
	);
};
export default Login;
