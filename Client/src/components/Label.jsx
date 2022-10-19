import { Typography } from '@mui/material';
import { THEME } from '../theme/theme';
import PropTypes from 'prop-types';

const Label = ({ label }) => {
	return (
		<Typography
			sx={{ ...THEME.typography.subtitle2, marginTop: 3, marginBottom: 1 }}
		>
			{label}
		</Typography>
	);
};

Label.propTypes = {
	label: PropTypes.string,
};

export default Label;
