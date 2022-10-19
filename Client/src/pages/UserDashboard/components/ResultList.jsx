import { Grid, Box, Typography } from '@mui/material';
import { Buttons, HeaderTable, ItemTable } from '../../../components';

const createData = (date, typeExam, state, action) => {
	return {
		date,
		typeExam,
		state,
		action,
	};
};

const columns = ['Fecha', 'Examen', 'Estado', 'Acción'];

const rows = [
	createData(
		`${new Date().getDate()}/${new Date().getDay()}/${new Date().getFullYear()}`,
		'Radiología',
		false,
		<Buttons title={{ first: 'Ver', second: 'Descargar' }} quantity={2} />
	),
	createData(
		`${new Date().getDate()}/${new Date().getDay()}/${new Date().getFullYear()}`,
		'Radiología',
		false,
		<Buttons title={{ first: 'Ver', second: 'Descargar' }} quantity={2} />
	),
	createData(
		`${new Date().getDate()}/${new Date().getDay()}/${new Date().getFullYear()}`,
		'Radiología',
		false,
		<Buttons title={{ first: 'Ver', second: 'Descargar' }} quantity={2} />
	),
	createData(
		`${new Date().getDate()}/${new Date().getDay()}/${new Date().getFullYear()}`,
		'Radiología',
		false,
		<Buttons title={{ first: 'Ver', second: 'Descargar' }} quantity={2} />
	),
	createData(
		`${new Date().getDate()}/${new Date().getDay()}/${new Date().getFullYear()}`,
		'Radiología',
		false,
		<Buttons title={{ first: 'Ver', second: 'Descargar' }} quantity={2} />
	),
	createData(
		`${new Date().getDate()}/${new Date().getDay()}/${new Date().getFullYear()}`,
		'Radiología',
		false,
		<Buttons title={{ first: 'Ver', second: 'Descargar' }} quantity={2} />
	),
];

const ResultList = () => {
	return (
		<Box
			sx={{
				height: '330px',
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
							<Grid>{row.date}</Grid>
							<Grid>{row.typeExam}</Grid>
							<Grid>{row.state ? 'Disponible' : 'No disponible'}</Grid>
							<Grid>{row.action}</Grid>
						</ItemTable>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default ResultList;
