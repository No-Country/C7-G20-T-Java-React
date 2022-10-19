import {
	Box,
	Button,
	Grid,
	Paper,
	Stack,
	styled,
	Typography,
} from '@mui/material';
import PropsTypes from 'prop-types';

const BootstrapButton = styled(Button)({
	boxShadow: 'none',
	textTransform: 'none',
	fontSize: 16,
	padding: '6px 12px',
	borderRadius: '8px',
	lineHeight: 1.5,
	backgroundColor: '#588157',
	fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(','),
	'&:hover': {
		backgroundColor: '#A3B18A',
		borderColor: '#A3B18A',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#A3B18A',
		borderColor: '#A3B18A',
	},
	'&:focus': {
		boxShadow: '0 0 0 0.2rem #A3B18A',
	},
});

const Buttons = ({ title, quantity }) => {
	const { first, second = null } = title;

	return quantity === 1 ? (
		<Button variant='contained'>{first}</Button>
	) : (
		<Stack spacing={1} direction='row'>
			<BootstrapButton variant='contained'>{first}</BootstrapButton>
			<BootstrapButton variant='contained'>{second}</BootstrapButton>
		</Stack>
	);
};

Buttons.propTypes = {
	title: PropsTypes.object,
	quantity: PropsTypes.number,
};

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

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.subtitle1,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	display: 'grid',
	gridTemplateColumns: 'repeat(6,1fr)',
	justifyContent: 'space-between',
	alignItems: 'center',
	borderRadius: '8px',
}));

const Header = styled(Paper)(({ theme }) => ({
	backgroundColor: '#A3B18A',
	color: '#000',
	padding: theme.spacing(1),
	textAlign: 'center',
	display: 'grid',
	gridTemplateColumns: 'repeat(6,1fr)',
	justifyContent: 'space-between',
	fontWeight: '600',
	borderRadius: '8px',
}));

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
					<Header>
						{columns.map((title) => (
							<Grid key={title}>
								<Typography variant='h6'>
									<b>{title}</b>
								</Typography>
							</Grid>
						))}
					</Header>
				</Grid>
				<Grid container spacing={1}>
					{rows.map((row, index) => (
						<Grid item xs={12} key={index}>
							<Item>
								<Grid>{row.id}</Grid>
								<Grid>{`${row.firstName} ${row.lastName}`}</Grid>
								<Grid>{row.role}</Grid>
								<Grid>{row.createAt}</Grid>
								<Grid>{row.status}</Grid>
								<Grid>{row.action}</Grid>
							</Item>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
};

export default UsersList;
