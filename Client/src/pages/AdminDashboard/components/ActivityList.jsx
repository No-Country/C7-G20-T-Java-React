import { Box, Grid, Typography } from '@mui/material';
import PropsTypes from 'prop-types';
import { THEME } from '../../../theme/theme';

const ActivityList = () => {
	const createData = (name, action, role, time) => {
		return { name, action, role, time };
	};

	const rows = [
		createData('Jhon Doe', 'created', 'doctor', 'Hace 2 horas'),
		createData('Peter Smith', 'created', 'patient', 'Hace 3 horas'),
		createData('Jenny Ackerman', 'deleted', null, 'Hace 5 horas'),
		createData('Jack Murphy', 'created', 'doctor', 'Hace 7 horas'),
	];
	console.log({ rows });

	const Items = ({ name, action, role, time }) => {
		const getAction = () => {
			switch (action) {
				case 'created':
					return 'fue creado con rol de';
				case 'deleted':
					return 'fue eliminado.';
				default:
					return '';
			}
		};

		const getRole = () => {
			switch (role) {
				case 'patient':
					return 'Paciente.';
				case 'doctor':
					return 'Medico.';
				default:
					return '';
			}
		};

		return (
			<Box
				width='100%'
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				height='40px'
				borderBottom='1px solid lightgrey'
			>
				<Typography variant='subtitle1'>
					<b>{name}</b>&nbsp;
					{getAction()}&nbsp;
					{role && <b>{getRole()}</b>}
				</Typography>
				<Typography variant='subtitle1' color={THEME.palette.secondary.main}>
					<b>{time}</b>
				</Typography>
			</Box>
		);
	};

	Items.propTypes = {
		name: PropsTypes.string,
		action: PropsTypes.string,
		role: PropsTypes.string,
		time: PropsTypes.string,
	};

	return (
		<Box
			height='240px'
			p='30px'
			bgcolor='white'
			borderRadius='10px'
			display='flex'
			flexDirection='column'
		>
			<Typography variant='h6' mb={2}>
				Actividad
			</Typography>
			<Grid container spacing={1}>
				{rows.map((row, index) => (
					<Grid key={index} item xs={12}>
						<Items
							name={row.name}
							action={row.action}
							role={row.role}
							time={row.time}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};
export default ActivityList;
