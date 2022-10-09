import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Header from './Header';

const Layout = ({ children }) => {
	return (
		<Box sx={{ width: '100%' }}>
			<Header />
			{children}
		</Box>
	);
};

Layout.propTypes = {
	children: PropTypes.node,
};

export default Layout;
