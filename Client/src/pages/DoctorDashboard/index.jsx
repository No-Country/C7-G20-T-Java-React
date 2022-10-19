import { Box, Grid, Typography } from '@mui/material';
import Layout from '../../components/Layout';
import AsideMenuDoctor from './components/AsideMenuDoctor';
import PatientsList from './components/PatientsList';

const doctorData = [
	{
		label: 'Nombre:',
		value: 'Arturo Hernández',
	},
	{
		label: 'Edad:',
		value: '38 años',
	},
	{
		label: 'Fecha de nacimiento:',
		value: '16/01/1984',
	},
	{
		label: 'Especialidad:',
		value: 'Traumatólogo',
	},
];

const DoctorDashboard = () => {
	return (
		<Layout>
			<Grid
				width='100%'
				pb='60px'
				bgcolor='#dad7dc'
				display='grid'
				gridTemplateColumns='2, 1fr'
			>
				<Box
					sx={{
						padding: '30px',
						BoxColumn: '1/2',
					}}
				>
					<Typography variant='h5' mb={2}>
						<b>Tu tablero</b>
					</Typography>

					<PatientsList />
				</Box>

				<Grid gridColumn='2/3'>
					<AsideMenuDoctor data={doctorData} title='Datos personales' />
				</Grid>
			</Grid>
		</Layout>
	);
};

export default DoctorDashboard;
