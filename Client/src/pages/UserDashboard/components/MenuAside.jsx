import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PropsTypes from 'prop-types';
import { THEME } from '../../../theme/theme';

const MenuAside = ({ data, title }) => {
	const asideApp = {
		backgroundColor: '#fff',
		height: '100%',
		padding: '15px',
		display: 'grid',
		gridTemplateRows: 'repeat(2,0fr)',
		gap: '30px',
	};

	const styleSupport = {
		color: '588157',
		fontSize: '2em',
		cursor: 'pointer',
	};

	return (
		<aside style={asideApp}>
			<Box sx={{ height: 'fit-content' }}>
				<Card
					sx={{
						height: 'inherit',
						border: '1px solid #344E41',
						borderRadius: '6px',
					}}
				>
					<CardContent
						sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
					>
						<Typography
							variant='h6'
							color={THEME.palette.primary.main}
							sx={{ marginBottom: '10px' }}
						>
							<b>{title}</b>
						</Typography>
						{data.map((item) => (
							<Typography key={item} variant='subtitle1'>
								<b>{item}</b>
							</Typography>
						))}
					</CardContent>
				</Card>
			</Box>
			<Box>
				<Card sx={{ border: '1px solid #344E41', cursor: 'pointer' }}>
					<CardContent>
						<Grid
							display='flex'
							flexDirection='row'
							alignItems='center'
							justifyContent='space-between'
						>
							<Grid>{<ContactSupportRoundedIcon style={styleSupport} />}</Grid>
							<Grid
								container
								sx={{ width: 'fit-content', flexDirection: 'column' }}
							>
								<Typography variant='subtitle2'>
									<b>Chatear con soporte</b>
								</Typography>
								<Typography variant='subtitle2'>
									Agente Clínicos medical solutions
								</Typography>
							</Grid>
							<Grid>{<ArrowForwardIosIcon style={styleSupport} />}</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Box>
		</aside>
	);
};

MenuAside.propTypes = {
	data: PropsTypes.array,
	title: PropsTypes.string,
};

export default MenuAside;
