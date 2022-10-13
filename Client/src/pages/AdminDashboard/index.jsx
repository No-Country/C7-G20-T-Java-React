import UsersList from './components/UsersList';
import Layout from '../../components/Layout';

const AdminDashboard = () => {
	return (
		<Layout>
			<h1>AdminDashboard</h1>
			<UsersList />
		</Layout>
	);
};

export default AdminDashboard;
