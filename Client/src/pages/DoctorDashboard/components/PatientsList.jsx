import { Box, Grid, Typography } from '@mui/material';
import { Buttons, HeaderTable, ItemTable } from '../../../components';

function createData(name, entity, hourDate, action) {
	return { name, entity, hourDate, action };
}

const rows = [
	createData(
		'Jhon Doe Smith',
		'Curando Salud',
		'14:00',
		<Buttons title={{ first: 'Detalles' }} quantity={1} />
	),
	createData(
		'Daniel González',
		'Swiss Medical',
		'14:30',
		<Buttons title={{ first: 'Detalles' }} quantity={1} />
	),
	createData(
		'Abdías Morales',
		'Medifé',
		'15:00',
		<Buttons title={{ first: 'Detalles' }} quantity={1} />
	),
	createData(
		'Cristian Corzo',
		'Osde',
		'15:30',
		<Buttons title={{ first: 'Detalles' }} quantity={1} />
	),
	createData(
		'Mónica Nisman',
		'Curando Salud',
		'16:00',
		<Buttons title={{ first: 'Detalles' }} quantity={1} />
	),
	createData(
		'Carlos Esquivel',
		'Osde',
		'16:30',
		<Buttons title={{ first: 'Detalles' }} quantity={1} />
	),
	createData(
		'Vivian Dupont',
		'Swiss Medical',
		'17:00',
		<Buttons title={{ first: 'Detalles' }} quantity={1} />
	),
	createData(
		'Edgar Navarro',
		'Medifé',
		'17:30',
		<Buttons title={{ first: 'Detalles' }} quantity={1} />
	),
	createData(
		'Elisa Clinton',
		'Swiss Medical',
		'18:00',
		<Buttons title={{ first: 'Detalles' }} quantity={1} />
	),
	createData(
		'Emily Jhonson',
		'Curando Salud',
		'18:30',
		<Buttons title={{ first: 'Detalles' }} quantity={1} />
	),
];

const columns = [
	'Nombre completo',
	'Entidad de salud',
	'Hora de cita',
	'Acción',
];

const PatientsList = () => {
	return (
		<>
			<Typography variant='h6' mb={1}>
				Lista de pacientes
			</Typography>
			<Box
				sx={{
					height: '550px',
					overflowY: 'scroll',
					width: '100%',
					position: 'relative',
					borderRadius: '8px',
					paddingBottom: '5px',
				}}
			>
				<Grid
					item
					xs={12}
					sx={{
						position: 'sticky',
						top: '0',
						zIndex: '100',
						marginBottom: '10px',
					}}
				>
					<HeaderTable style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
						{columns.map((title) => (
							<Grid key={title}>
								<Typography variant='h6'>
									<b>{title}</b>
								</Typography>
							</Grid>
						))}
					</HeaderTable>
				</Grid>
				<Grid container spacing={1}>
					{rows.map((row, index) => (
						<Grid item xs={12} key={index}>
							<ItemTable style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
								<Grid>{row.name}</Grid>
								<Grid>{row.entity}</Grid>
								<Grid>{row.hourDate}</Grid>
								<Grid>{row.action}</Grid>
							</ItemTable>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
};

export default PatientsList;
