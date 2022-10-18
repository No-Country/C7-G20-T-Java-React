import { Box, MenuItem, Select } from '@mui/material';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import { THEME } from '../theme/theme';

const SelectInput = forwardRef(
	({ onChange, onBlur, name, label, options }, ref) => (
		<Box width='100%'>
			<Label label={label} />
			<Select
				name={name}
				ref={ref}
				onChange={onChange}
				onBlur={onBlur}
				defaultValue=''
				fullWidth
				sx={{ height: '45px', ...THEME.typography.subtitle1 }}
			>
				{options.map((option, index) => (
					<MenuItem value={index} key={index} sx={{ fontSize: '16px' }}>
						{option}
					</MenuItem>
				))}
			</Select>
		</Box>
	)
);

SelectInput.propTypes = {
	onChange: PropTypes.any,
	onBlur: PropTypes.any,
	name: PropTypes.string,
	label: PropTypes.string,
	options: PropTypes.array,
};

export default SelectInput;
