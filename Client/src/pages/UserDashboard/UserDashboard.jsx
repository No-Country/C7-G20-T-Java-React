// Aquí se crearán los componentes propios de cada vista,
// esto mejora la eficiencia en la carga de la App
import ResultList from './components/ResultList';

const UserDashboard = () => {
	return (
		<>
			<h1>User dashboard</h1>
			<ResultList />
		</>
	);
};

export default UserDashboard;
