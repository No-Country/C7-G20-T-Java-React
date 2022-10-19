import { Box, Input, Typography } from '@mui/material';
import PlusFile from '../../../assets/add-file.png';

const CreateUserWithCSV = () => {
	return (
		<Box minHeight='240px' p='30px' bgcolor='white' borderRadius='10px'>
			<Typography variant='h6' mb={2}>
				Crear usuario desde archivo
			</Typography>

			<Box
				position='relative'
				height='180px'
				width='100%'
				bgcolor='#DAD7CD'
				borderRadius='10px'
				display='flex'
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
				border='0.5px solid grey'
			>
				<input
					type='file'
					accept='.csv'
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						height: '100%',
						width: '100%',
						outline: 'none',
						opacity: 0,
						cursor: 'pointer',
					}}
				/>
				<Typography variant='subtitle1' mb={2}>
					Arrastrar un archivo .csv
				</Typography>
				<img
					src={PlusFile}
					alt='add file'
					style={{ width: '10%', height: 'auto', cursor: 'pointer' }}
				/>
			</Box>
		</Box>
	);
};
export default CreateUserWithCSV;
