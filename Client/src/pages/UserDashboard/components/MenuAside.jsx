import { Box, Card, CardContent, Typography } from '@mui/material';

const MenuAside = () => {
	const asideApp = {
		backgroundColor: '#fff',
		height: '100vh',
		padding: '30px',
	};

	return (
		<aside style={asideApp}>
			<section>
				<Box sx={{ height: 'fit-content' }}>
					<Card
						sx={{
							height: 'inherit',
							border: '1px solid #A3B18A',
							borderRadius: '6px',
						}}
					>
						<CardContent
							sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
						>
							<Typography variant='h6' sx={{ marginBottom: '20px' }}>
								<b>Datos personales</b>
							</Typography>
							<Typography component='div' variant='body2'>
								<b>Nombre:</b>
							</Typography>
							<Typography component='div' variant='body2'>
								<b>Edad:</b>
							</Typography>
							<Typography component='div' variant='body2'>
								<b>Fecha de nacimiento:</b>
							</Typography>
							<Typography component='div' variant='body2'>
								<b>Entidad de salud:</b>
							</Typography>
						</CardContent>
					</Card>
				</Box>
				<article>soporte tecnico</article>
			</section>
		</aside>
	);
};

export default MenuAside;
