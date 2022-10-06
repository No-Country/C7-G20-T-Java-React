import { Paper, Grid, Box, styled, Button, Stack } from '@mui/material';
import { style } from '@mui/system';

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

const createData = (date, typeExam, state, action) => {
	return {
		date,
		typeExam,
		state,
		action,
	};
};

const columns = ['Fecha', 'Examén', 'Estado', 'Acción'];

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	display: 'grid',
	gridTemplateColumns: 'repeat(4,1fr)',
	justifyContent: 'space-between',
	alignItems: 'center',
	borderRadius: '8px',
}));
const Header = styled(Paper)(({ theme }) => ({
	backgroundColor: '#A3B18A',
	...theme.typography.body2,
	color: '#000',
	padding: theme.spacing(2),
	textAlign: 'center',
	display: 'grid',
	gridTemplateColumns: 'repeat(4,1fr)',
	justifyContent: 'space-between',
	fontWeight: '600',
	borderRadius: '8px',
}));

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
];

const ResultList = () => {
	return (
		<Box sx={{ width: '100%' }}>
			<Grid container spacing={1.5}>
				<Grid item xs={12}>
					<Header>
						{columns.map((title) => (
							<Grid key={title}>{title}</Grid>
						))}
					</Header>
				</Grid>

				{rows.map((row, index) => (
					<Grid item xs={12} key={index}>
						<Item>
							<Grid>{row.date}</Grid>
							<Grid>{row.typeExam}</Grid>
							<Grid>{row.state ? 'Disponible' : 'No disponible'}</Grid>
							<Grid>{row.action}</Grid>
						</Item>
					</Grid>
				))}
			</Grid>
		</Box>
		// <TableContainer component={Paper}>
		// 	<Table>
		// 		<TableHead>
		// 			<TableRow>
		// 				<TableCell>Fecha</TableCell>
		// 				<TableCell>Examen</TableCell>
		// 				<TableCell>Estado</TableCell>
		// 				<TableCell>Acción</TableCell>
		// 			</TableRow>
		// 		</TableHead>
		// 		<TableBody>
		// 			{rows.map((row, index) => (
		// 				<TableRow key={index}>
		// 					<TableCell>{row.date}</TableCell>
		// 					<TableCell>{row.typeExam}</TableCell>
		// 					<TableCell>
		// 						{row.state ? 'Disponible' : 'No disponible'}
		// 					</TableCell>
		// 					<TableCell>{row.action}</TableCell>
		// 				</TableRow>
		// 			))}
		// 		</TableBody>
		// 	</Table>
		// </TableContainer>
	);
};

export default ResultList;
