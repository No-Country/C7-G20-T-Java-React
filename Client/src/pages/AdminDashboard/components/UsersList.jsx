import PropTypes from 'prop-types';
import { useState } from 'react';
import {
	Box,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import { Stack } from '@mui/system';

function createData(id, firstName, lastName, role, createAt, status) {
	return { id, firstName, lastName, role, createAt, status };
}

const rows = [
	createData(0, 'Ricardo', 'Aguirre', 'Paciente', '05/06/2021', 'Activo'),
	createData(1, 'Laura', 'Suarez', 'Paciente', '21/06/2021', 'Activo'),
	createData(2, 'Eduardo', 'Torres', 'Doctor', '03/01/2021', 'Activo'),
	createData(3, 'Julia', 'Díaz', 'Paciente', '15/09/2021', 'Activo'),
	createData(4, 'Sara', 'Hernández', 'Doctor', '05/06/2021', 'Activo'),
	createData(5, 'Juan', 'Pérez', 'Paciente', '18/11/2021', 'Activo'),
	createData(6, 'Jimena', 'Ríos', 'Admin', '07/01/2021', 'Activo'),
];

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

const headCells = [
	{
		id: 'id',
		align: 'left',
		disablePadding: false,
		label: 'ID',
	},
	{
		id: 'fullname',
		align: 'left',
		disablePadding: true,
		label: 'Nombre Completo',
	},
	{
		id: 'role',
		align: 'right',
		disablePadding: false,
		label: 'Rol',
	},
	{
		id: 'created_at',
		align: 'left',
		disablePadding: false,
		label: 'Fecha de Creación',
	},
	{
		id: 'status',
		align: 'right',
		disablePadding: false,
		label: 'Estado',
	},
];

function OrderTableHead({ order, orderBy }) {
	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.align}
						padding={headCell.disablePadding ? 'none' : 'normal'}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						{headCell.label}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

OrderTableHead.propTypes = {
	order: PropTypes.string,
	orderBy: PropTypes.string,
};

const UsersList = () => {
	const [order] = useState('asc');
	const [orderBy] = useState('id');
	const [selected] = useState([]);

	const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;

	return (
		<Box>
			<TableContainer
				sx={{
					width: '100%',
					overflowX: 'auto',
					position: 'relative',
					display: 'block',
					maxWidth: '100%',
					'& td, & th': { whiteSpace: 'nowrap' },
				}}
			>
				<Table
					aria-labelledby='tableTitle'
					sx={{
						'& .MuiTableCell-root:first-of-type': {
							pl: 2,
						},
						'& .MuiTableCell-root:last-child': {
							pr: 3,
						},
					}}
				>
					<TableBody>
						{stableSort(rows, getComparator(order, orderBy)).map(
							(row, index) => {
								const isItemSelected = isSelected(row.id);
								const labelId = `enhanced-table-checkbox-${index}`;

								return (
									<TableRow
										hover
										role='checkbox'
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
										aria-checked={isItemSelected}
										tabIndex={-1}
										key={row.id}
										selected={isItemSelected}
									>
										<TableCell
											component='th'
											id={labelId}
											scope='row'
											align='left'
										>
											<Typography color='secondary'>{row.id}</Typography>
										</TableCell>
										<TableCell align='left'>
											{row.firstName} {row.lastName}
										</TableCell>
										<TableCell align='right'>{row.role}</TableCell>
										<TableCell align='left'>
											<Stack direction='row' spacing={1} alignItems='center'>
												<Typography>{row.createAt}</Typography>
											</Stack>
										</TableCell>
										<TableCell align='right'>
											<Stack direction='row' spacing={1} alignItems='center'>
												<Typography>{row.status}</Typography>
											</Stack>
										</TableCell>
									</TableRow>
								);
							}
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default UsersList;
