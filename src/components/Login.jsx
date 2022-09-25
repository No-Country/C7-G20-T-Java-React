const Login = () => {
	const handleSubmit = () => {};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='email'>Email</label>
				<input type='text' name='email' placeholder='emailexample@gmail.com' />
				<label htmlFor='password'>Contraseña</label>
				<input
					type='password'
					name='password'
					placeholder='Your password here'
				/>
			</form>
		</div>
	);
};

export default Login;
