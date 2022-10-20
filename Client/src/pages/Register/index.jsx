import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { THEME } from '../../theme/theme';
import Logo from '../../assets/logo';
import { Label, SelectInput } from '../../components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const emailValidation =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const nameValidation = /^[a-z ,.'-]+$/i;

const ageValidation = /^[0-9]*$/;

const roles = ['Administrador', 'Doctor', 'Paciente'];

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		fetch('https://analisis-clinico.herokuapp.com/v1/user/addUser', {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((e) => console.error(e));
	};

	const navigate = useNavigate();

	const handleGoToLogin = () => {
		navigate('/', { replace: true });
	};

	const countErrors = Object.keys(errors).length;

	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100vh',
				padding: '40px 0',
			}}
		>
			<Grid
				container
				height={countErrors ? 900 + 20 * countErrors : 900}
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
							Registro
						</Typography>

						<Label label='Nombre' />
						<input
							type='text'
							name='firstName'
							placeholder='Roberto'
							{...register('firstName', {
								pattern: nameValidation,
								required: 'Te faltó completar este campo.',
							})}
							aria-invalid={errors.firstName ? 'true' : 'false'}
							style={{
								height: '30px',
								borderRadius: '8px',
								borderWidth: 0.5,
								borderColor: 'rgba(0, 0, 0, 0.3)',
								padding: '10px',
								fontSize: '1rem',
							}}
						/>
						{errors.firstName && (
							<p
								role='alert'
								style={{
									color: THEME.palette.error.main,
									margin: 0,
									...THEME.typography.subtitle2,
								}}
							>
								{errors.firstName.type === 'pattern'
									? 'El nombre ingresado es inválido.'
									: errors.firstName.message}
							</p>
						)}

						<Label label='Apellido' />
						<input
							type='text'
							name='lastName'
							placeholder='Suárez'
							{...register('lastName', {
								pattern: nameValidation,
								required: 'Te faltó completar este campo.',
							})}
							aria-invalid={errors.lastName ? 'true' : 'false'}
							style={{
								height: '30px',
								borderRadius: '8px',
								borderWidth: 0.5,
								borderColor: 'rgba(0, 0, 0, 0.3)',
								padding: '10px',
								fontSize: '1rem',
							}}
						/>
						{errors.lastName && (
							<p
								role='alert'
								style={{
									color: THEME.palette.error.main,
									margin: 0,
									...THEME.typography.subtitle2,
								}}
							>
								{errors.lastName.type === 'pattern'
									? 'El apellido ingresado es inválido.'
									: errors.lastName.message}
							</p>
						)}

						<Label label='Edad' />
						<input
							type='text'
							name='age'
							{...register('age', {
								pattern: ageValidation,
								required: 'Te faltó completar este campo.',
							})}
							aria-invalid={errors.age ? 'true' : 'false'}
							style={{
								height: '30px',
								borderRadius: '8px',
								borderWidth: 0.5,
								borderColor: 'rgba(0, 0, 0, 0.3)',
								padding: '10px',
								fontSize: '1rem',
							}}
						/>
						{errors.age && (
							<p
								role='alert'
								style={{
									color: THEME.palette.error.main,
									margin: 0,
									...THEME.typography.subtitle2,
								}}
							>
								{errors.age.type === 'pattern'
									? 'La edad debe contener sólo números.'
									: errors.age.message}
							</p>
						)}

						<SelectInput
							name='role'
							label='Rol'
							{...register('role', { required: 'Elige un rol.' })}
							aria-invalid={errors.role ? 'true' : 'false'}
							options={roles}
						/>
						{errors.role && (
							<p
								role='alert'
								style={{
									color: THEME.palette.error.main,
									margin: 0,
									...THEME.typography.subtitle2,
								}}
							>
								{errors.role.message}
							</p>
						)}

						<Label label='Email' />
						<input
							type='text'
							name='email'
							placeholder='robertosuarez@gmail.com'
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
								padding: '10px',
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
								onClick={handleGoToLogin}
							>
								Iniciar Sesión
							</Button>
							<Button type='submit' variant='contained' color='primary'>
								Registrarse
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
export default Register;
