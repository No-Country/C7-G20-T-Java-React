import { Paper, styled } from '@mui/material';

const HeaderTable = styled(Paper)(({ theme }) => ({
	backgroundColor: '#A3B18A',
	color: '#000',
	padding: theme.spacing(1),
	textAlign: 'center',
	display: 'grid',
	justifyContent: 'space-between',
	fontWeight: '600',
	borderRadius: '8px',
}));

export default HeaderTable;
