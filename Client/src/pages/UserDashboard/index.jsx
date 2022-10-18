// Aquí se crearán los componentes propios de cada vista,
// esto mejora la eficiencia en la carga de la App
import ResultList from './components/ResultList';
import MenuAside from './components/MenuAside';
import { Box, Typography } from '@mui/material';
import BoxResult from './components/BoxResult';
import { Layout } from '../../components';

const UserDashboard = () => {
	const mainApp = {
		backgroundColor: '#dad7dc',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: '2fr, 1fr',
		gap: '40px',
		paddingBottom: '60px',
	};

	const mainViewApp = {
		gridColumn: '1/2',
		marginLeft: '30px',
		display: 'grid',
		gridTemplateRows: ' 50px repeat(2,1fr)',
		gap: '20px',
	};
	const asideViewApp = {
		gridColumn: '2/3',
	};

	return (
		<Layout>
			<main style={mainApp}>
				<Box style={mainViewApp}>
					<Typography variant='h5' my={2}>
						<b>Tu tablero</b>
					</Typography>
					<article>
						<BoxResult />
					</article>
					<article>
						<ResultList />
					</article>
				</Box>
				<section style={asideViewApp}>
					<MenuAside
						data={[
							'Nombre:',
							'Edad:',
							'Fecha de nacimiento:',
							'Entidad de salud:',
						]}
						title='Datos personales'
					/>
				</section>
			</main>
		</Layout>
	);
};

export default UserDashboard;
