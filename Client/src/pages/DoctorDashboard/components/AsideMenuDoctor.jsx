import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PropsTypes from 'prop-types';
import { THEME } from '../../../theme/theme';

const Tags = ({ item }) => {
	return (
		<Box
			sx={{
				border: `1px solid ${THEME.palette.primary.main}`,
				backgroundColor: THEME.palette.secondary.main,
				borderRadius: '6px',
				padding: '5px 10px',
				marginY: '5px',
				width: 'fit-content',
				...THEME.typography.subtitle1,
				color: 'white',
				boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.5)',
				textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.5)',
			}}
		>
			{item}
		</Box>
	);
};

Tags.propTypes = {
	item: PropsTypes.string,
};

const AvailableExams = [
	'Radiografía de tórax',
	'TAC cerebral',
	'Muestra de sangre',
	'Espirométria',
	'Resonancia magnética',
	'Doppler',
];

const AsideMenuDoctor = ({ data, title }) => {
	const asideApp = {
		backgroundColor: '#fff',
		height: '100%',
		padding: '30px 15px',
		display: 'grid',
		gridTemplateRows: 'repeat(3fr)',
		gap: '30px',
	};

	const styleSupport = {
		color: '588157',
		fontSize: '2em',
		cursor: 'pointer',
	};

	return (
		<aside style={asideApp}>
			<Box sx={{ height: 'fit-content' }}>
				<Card
					sx={{
						height: 'inherit',
						border: '1px solid #344E41',
						borderRadius: '6px',
					}}
				>
					<CardContent
						sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
					>
						<Typography
							variant='h6'
							color={THEME.palette.primary.main}
							sx={{ marginBottom: '10px' }}
						>
							<b>{title}</b>
						</Typography>
						{data.map((item, index) => (
							<Typography key={index} variant='subtitle1'>
								<b>{item.label}</b>&nbsp;
								{item.value}
							</Typography>
						))}
					</CardContent>
				</Card>
			</Box>
			<Box>
				<Card sx={{ border: '1px solid #344E41', cursor: 'pointer' }}>
					<CardContent>
						<Grid
							display='flex'
							flexDirection='row'
							alignItems='center'
							justifyContent='space-between'
						>
							<Grid>{<ContactSupportRoundedIcon style={styleSupport} />}</Grid>
							<Grid
								container
								sx={{ width: 'fit-content', flexDirection: 'column' }}
							>
								<Typography variant='subtitle2'>
									<b>Chatear con soporte</b>
								</Typography>
								<Typography variant='subtitle2'>
									Agente Clínico medical solutions
								</Typography>
							</Grid>
							<Grid>{<ArrowForwardIosIcon style={styleSupport} />}</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Box>
			<Box>
				<Card sx={{ border: '1px solid #344E41', cursor: 'pointer' }}>
					<CardContent>
						<Typography
							variant='h6'
							color={THEME.palette.primary.main}
							sx={{ marginBottom: '10px' }}
						>
							<b>Exámenes disponibles</b>
						</Typography>
						<Grid display='flex' flexDirection='column'>
							{AvailableExams.map((exam, index) => (
								<Tags item={exam} key={index} />
							))}
						</Grid>
					</CardContent>
				</Card>
			</Box>
		</aside>
	);
};

AsideMenuDoctor.propTypes = {
	data: PropsTypes.array,
	title: PropsTypes.string,
};

export default AsideMenuDoctor;
