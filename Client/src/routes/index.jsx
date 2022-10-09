import { HashRouter, Routes as Switch, Route } from 'react-router-dom';
import { UserDashboard } from 'Pages/UserDashboard';
import { DoctorDashboard } from 'Pages/DoctorDashboard';
import { AdminDashboard } from 'Pages/AdminDashboard';
import { Layout } from '../components';

export const Routes = () => {
	return (
		<HashRouter>
			<Switch>
				<Route path='/' element={<Layout />} />
				<Route path='/patients/:id' element={<UserDashboard />} />
				<Route path='/doctors/:id' element={<DoctorDashboard />} />
				<Route path='/admin' element={<AdminDashboard />} />
			</Switch>
		</HashRouter>
	);
};
