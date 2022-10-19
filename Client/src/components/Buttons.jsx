import { Button, Stack, styled } from '@mui/material';
import PropsTypes from 'prop-types';

const BootstrapButton = styled(Button)({
	boxShadow: 'none',
	textTransform: 'none',
	fontSize: 16,
	padding: '6px 12px',
	borderRadius: '8px',
	lineHeight: 1.5,
	backgroundColor: '#588157',
	fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(','),
	'&:hover': {
		backgroundColor: '#A3B18A',
		borderColor: '#A3B18A',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#A3B18A',
		borderColor: '#A3B18A',
	},
	'&:focus': {
		boxShadow: '0 0 0 0.2rem #A3B18A',
	},
});

const Buttons = ({ title, quantity }) => {
	const { first, second = null } = title;

	return quantity === 1 ? (
		<Button variant='contained'>{first}</Button>
	) : (
		<Stack spacing={1} direction='row'>
			<BootstrapButton variant='contained'>{first}</BootstrapButton>
			<BootstrapButton variant='contained'>{second}</BootstrapButton>
		</Stack>
	);
};

Buttons.propTypes = {
	title: PropsTypes.object,
	quantity: PropsTypes.number,
};

export default Buttons;
