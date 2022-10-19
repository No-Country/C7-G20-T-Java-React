import UsersList from './components/UsersList';
import Layout from '../../components/Layout';
import { Box, Grid, Typography } from '@mui/material';
import CreateUserWithCSV from './components/CreateUserWithCSV';
import ActivityList from './components/ActivityList';

const AdminDashboard = () => {
	return (
		<Layout>
			<Box sx={{ padding: '30px' }}>
				<Typography variant='h5' mb={2}>
					<b>Tu tablero</b>
				</Typography>

				<UsersList />

				<Grid container spacing={3} my={3}>
					<Grid item xs={6}>
						<CreateUserWithCSV />
					</Grid>
					<Grid item xs={6}>
						<ActivityList />
					</Grid>
				</Grid>
			</Box>
		</Layout>
	);
};

export default AdminDashboard;
