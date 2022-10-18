import { Grid, Typography } from '@mui/material';

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
				<Typography variant='h5' sx={{ width: '70%' }}>
					<b>
						Felicitaciones!, tu muestra ha sido recibida por nuestro laboratorio
					</b>
				</Typography>
			</Grid>
			<Grid item>
				<Typography variant='body2' sx={{ width: '70%' }}>
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
					padding: '0 30px',
					position: 'relative',
				}}
			>
				<Grid item sx={{ position: 'relative', width: '100%' }}>
					<Typography
						sx={{
							border: '2px solid #344E41',
							width: '90%',
							position: 'absolute',
							top: '25px',
							left: '30px',
						}}
					></Typography>
				</Grid>
				{nums.map((item) => (
					<Grid
						key={item.num}
						sx={{
							zIndex: '200',
							position: 'relative',
							width: 'fit-content',
						}}
					>
						<Typography
							variant='h6'
							sx={{
								borderRadius: '50%',
								border: '1px solid #A3B18A',
								padding: '6px 16px',
								width: '45px',
								backgroundColor: '#fff',
								margin: 'auto',
							}}
						>
							<b>{item.num}</b>
						</Typography>
						<Typography variant='body2' sx={{ textAlign: 'center' }}>
							{item.text.split(' ').slice(0, 3).join(' ')}
							<br />
							{item.text.split(' ').slice(3, item.text.length).join(' ')}
						</Typography>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};

export default BoxResult;
