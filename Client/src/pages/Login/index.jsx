import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { THEME } from '../../theme/theme';
import Logo from '../../assets/logo';
import { useForm } from 'react-hook-form';
import { Label } from '../../components';

const emailValidation =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		fetch('https://analisis-clinico.herokuapp.com/v1/user/login', {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			})
			.catch((e) => console.error(e));
	};

	const navigate = useNavigate();

	const countErrors = Object.keys(errors).length;
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
			<Grid
				container
				height={countErrors ? 500 + 20 * countErrors : 500}
				justifyContent='center'
				alignItems='center'
			>
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
						onSubmit={handleSubmit(onSubmit)}
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
							{...register('email', {
								pattern: emailValidation,
								required: 'Te faltó completar este campo.',
							})}
							aria-invalid={errors.email ? 'true' : 'false'}
							style={{
								height: '30px',
								borderRadius: '8px',
								borderWidth: 0.5,
								borderColor: 'rgba(0, 0, 0, 0.3)',
								padding: '10px',
								fontSize: '1rem',
							}}
						/>
						{errors.email && (
							<p
								role='alert'
								style={{
									color: THEME.palette.error.main,
									margin: 0,
									...THEME.typography.subtitle2,
								}}
							>
								{errors.email.type === 'pattern'
									? 'El email ingresado es inválido.'
									: errors.email.message}
							</p>
						)}

						<Label label='Contraseña' />
						<input
							type='password'
							autoComplete='off'
							name='password'
							{...register('password', {
								minLength: 8,
								required: 'Te faltó completar este campo.',
							})}
							aria-invalid={errors.password ? 'true' : 'false'}
							style={{
								height: '30px',
								borderRadius: '8px',
								borderWidth: 0.5,
								borderColor: 'rgba(0, 0, 0, 0.3)',
								padding: '5px',
								fontSize: '1rem',
							}}
						/>
						{errors.password && (
							<p
								role='alert'
								style={{
									color: THEME.palette.error.main,
									margin: 0,
									...THEME.typography.subtitle2,
								}}
							>
								{errors.password.type === 'minLength'
									? 'La contraseña debe contener al menos 8 caracteres.'
									: errors.password.message}
							</p>
						)}

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
								variant='outlined'
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
