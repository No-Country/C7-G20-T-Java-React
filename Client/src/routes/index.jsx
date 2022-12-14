import { HashRouter, Routes as Switch, Route } from 'react-router-dom';
import UserDashboard from '../pages/UserDashboard';
import DoctorDashboard from '../pages/DoctorDashboard';
import AdminDashboard from '../pages/AdminDashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';

export const Routes = () => {
	return (
		<HashRouter>
			<Switch>
				<Route path='/' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/patients/:id' element={<UserDashboard />} />
				<Route path='/doctors/:id' element={<DoctorDashboard />} />
				<Route path='/admin' element={<AdminDashboard />} />
			</Switch>
		</HashRouter>
	);
};
