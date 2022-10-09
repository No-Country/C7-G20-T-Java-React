import UserDashboard from './pages/UserDashboard/UserDashboard';
import './App.css';
import MenuAside from './pages/UserDashboard/components/MenuAside';

const App = () => {
	const mainApp = {
		backgroundColor: '#dad7dc',
		height: '100vh',
		width: '100%',
		display: 'flex',
		gap: '60px',
	};

	const dashboardApp = {
		flexBasis: '75%',
		marginLeft: '20px',
	};
	const menuAsideApp = {
		flexBasis: '25%',
	};

	return (
		<main style={mainApp}>
			<section style={dashboardApp}>
				<article></article>
				<article>
					<UserDashboard />
				</article>
			</section>
			<section style={menuAsideApp}>
				<MenuAside />
			</section>
		</main>
	);
};

export default App;
