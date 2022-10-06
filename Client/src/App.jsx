import UserDashboard from './pages/UserDashboard/UserDashboard';
import './App.css';

const App = () => {
	const backgroundApp = {
		backgroundColor: '#dad7dc',
		height: '100vh',
	};

	return (
		<main style={backgroundApp}>
			<section>
				<UserDashboard />
			</section>
			<section>
				<aside></aside>
			</section>
		</main>
	);
};

export default App;
