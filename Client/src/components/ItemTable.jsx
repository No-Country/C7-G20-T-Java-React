import { Paper, styled } from '@mui/material';

const ItemTable = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.subtitle1,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	display: 'grid',
	justifyContent: 'space-between',
	alignItems: 'center',
	borderRadius: '8px',
}));

export default ItemTable;
