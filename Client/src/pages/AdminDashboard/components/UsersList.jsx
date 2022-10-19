import { Box, Grid, Typography } from '@mui/material';
import { Buttons, HeaderTable, ItemTable } from '../../../components';

function createData(id, firstName, lastName, role, createAt, status, action) {
	return { id, firstName, lastName, role, createAt, status, action };
}

const rows = [
	createData(
		0,
		'Ricardo',
		'Aguirre',
		'Paciente',
		'05/06/2021',
		'Activo',
		<Buttons title={{ first: 'Editar', second: 'Eliminar' }} quantity={2} />
	),
	createData(
		1,
		'Laura',
		'Suarez',
		'Paciente',
		'21/06/2021',
		'Activo',
		<Buttons title={{ first: 'Editar', second: 'Eliminar' }} quantity={2} />
	),
	createData(
		2,
		'Eduardo',
		'Torres',
		'Doctor',
		'03/01/2021',
		'Activo',
		<Buttons title={{ first: 'Editar', second: 'Eliminar' }} quantity={2} />
	),
	createData(
		3,
		'Julia',
		'Díaz',
		'Paciente',
		'15/09/2021',
		'Activo',
		<Buttons title={{ first: 'Editar', second: 'Eliminar' }} quantity={2} />
	),
	createData(
		4,
		'Sara',
		'Hernández',
		'Doctor',
		'05/06/2021',
		'Activo',
		<Buttons title={{ first: 'Editar', second: 'Eliminar' }} quantity={2} />
	),
	createData(
		5,
		'Juan',
		'Pérez',
		'Paciente',
		'18/11/2021',
		'Activo',
		<Buttons title={{ first: 'Editar', second: 'Eliminar' }} quantity={2} />
	),
	createData(
		6,
		'Jimena',
		'Ríos',
		'Admin',
		'07/01/2021',
		'Activo',
		<Buttons title={{ first: 'Editar', second: 'Eliminar' }} quantity={2} />
	),
];

const columns = ['ID', 'Nombre', 'Rol', 'Fecha de Alta', 'Estado', 'Acción'];

const UsersList = () => {
	return (
		<>
			<Typography variant='h6' mb={1}>
				Lista de usuarios
			</Typography>
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
					<HeaderTable style={{ gridTemplateColumns: 'repeat(6,1fr)' }}>
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
							<ItemTable style={{ gridTemplateColumns: 'repeat(6,1fr)' }}>
								<Grid>{row.id}</Grid>
								<Grid>{`${row.firstName} ${row.lastName}`}</Grid>
								<Grid>{row.role}</Grid>
								<Grid>{row.createAt}</Grid>
								<Grid>{row.status}</Grid>
								<Grid>{row.action}</Grid>
							</ItemTable>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
};

export default UsersList;
