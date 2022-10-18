import { Box, Grid, Typography } from '@mui/material';
import { THEME } from '../../../theme/theme';

const BoxResult = () => {
	const nums = [
		{
			num: 1,
			text: `Hemos recibido
            tu muestra`,
		},
		{
			num: 2,
			text: `Estamos preparando 
            el resultado`,
		},
		{
			num: 3,
			text: `Tu resultado
            está listo`,
		},
	];

	return (
		<Grid
			container
			sx={{
				backgroundColor: '#fff',
				borderRadius: '6px',
				padding: '30px',
				gap: '10px',
				height: '100%',
			}}
		>
			<Grid item>
				<Typography
					variant='h6'
					color={THEME.palette.primary.main}
					mb={1}
					sx={{ width: '100%' }}
				>
					<strong>
						¡Felicitaciones!
						<br />
						Tu muestra ha sido recibida por nuestro laboratorio.
					</strong>
				</Typography>
			</Grid>
			<Grid item>
				<Typography variant='subtitle1' sx={{ width: '80%' }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate
					natus in quaerat labore cum, obcaecati, sed vitae omnis sapiente porro
					maxime neque reprehenderit modi tempore quo! Animi, voluptates!
					Labore.
				</Typography>
			</Grid>
			<Grid
				container
				sx={{
					justifyContent: 'space-between',
					position: 'relative',
				}}
			>
				<Grid item sx={{ position: 'relative', width: '100%' }}>
					<Typography
						sx={{
							border: '2px solid #344E41',
							width: '100%',
							position: 'absolute',
							top: '25px',
						}}
					></Typography>
				</Grid>
				<Grid
					position='relative'
					display='flex'
					flexDirection='row'
					justifyContent='space-between'
					width='100%'
				>
					{nums.map((item) => (
						<Box
							key={item.num}
							display='flex'
							flexDirection='column'
							alignItems='center'
							width='100%'
						>
							<Typography
								variant='h6'
								sx={{
									borderRadius: '50%',
									border: '1px solid #A3B18A',
									padding: '10px 10px',
									width: '30px',
									backgroundColor: '#fff',
									textAlign: 'center',
								}}
							>
								<b>{item.num}</b>
							</Typography>
							<Typography variant='subtitle2' sx={{ textAlign: 'center' }}>
								{item.text.split(' ').slice(0, 3).join(' ')}
								<br />
								{item.text.split(' ').slice(3, item.text.length).join(' ')}
							</Typography>
						</Box>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default BoxResult;
