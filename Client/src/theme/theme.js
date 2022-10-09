import { COLORS } from '../colors';

export const THEME = {
	typography: {
		fontFamily: ['Roboto', 'DM Sans'].join(','),
		h1: {
			fontFamily: `'Roboto', sans-serif`,
			fontSize: '3.5rem',
			fontWeight: 700,
			lineHeight: '41.02px',
		},
		h2: {
			fontFamily: `'Roboto', sans-serif`,
			fontSize: '2.8rem',
			fontWeight: 600,
			lineHeight: '32.81px',
		},
		h3: {
			fontFamily: `'Roboto', sans-serif`,
			fontSize: '1.8rem',
			fontWeight: 600,
			lineHeight: '21.09px',
		},
		subtitle1: {
			fontFamily: `'Roboto', sans-serif`,
			fontSize: '1rem',
			fontWeight: 400,
			lineHeight: '20px',
		},
		subtitle2: {
			fontFamily: `'Roboto', sans-serif`,
			fontSize: '0.875rem',
			fontWeight: 500,
			lineHeight: '20px',
		},
		body1: {
			fontFamily: `'Roboto', sans-serif`,
			fontSize: '1.8rem',
			fontWeight: 400,
			lineHeight: '20px',
		},
		body2: {
			fontFamily: `'Roboto', sans-serif`,
			fontSize: '1.6rem',
			fontWeight: 400,
			lineHeight: '20px',
		},
		button: {
			fontFamily: `'Roboto', sans-serif`,
			fontSize: '2rem',
			fontWeight: 400,
			lineHeight: '23.44px',
		},
		caption: {
			fontFamily: `'Roboto', sans-serif`,
			fontSize: '3.5rem',
			fontWeight: 700,
			lineHeight: '41.02px',
		},
	},
	palette: {
		primary: {
			main: COLORS.primary,
		},
		secondary: {
			main: COLORS.secondary,
		},
		error: {
			main: COLORS.error,
		},
		warning: {
			main: COLORS.warning,
		},
		info: {
			main: COLORS.info,
		},
		success: {
			main: COLORS.success,
		},
		text: {
			primary: COLORS.textMain,
		},
	},
	components: {
		MuiSvgIcon: {
			styleOverrides: {
				root: {
					fill: COLORS.primary,
				},
			},
		},
		MuiButton: {
			defaultProps: {
				disableElevation: true,
			},
			styleOverrides: {
				root: {
					borderRadius: '5px',
					boxShadow: 'none',
					textTransform: 'initial',
				},
				sizeSmall: {
					fontSize: '14px',
					padding: '3px 10px',
				},
				sizeMedium: {
					fontSize: '16px',
					padding: '7px 16px',
				},
				sizeLarge: {
					fontSize: '18px',
					padding: '11px 22px',
				},
				containedPrimary: {
					color: '#FFFFFF',
					background: COLORS.primary,
				},
				containedSecondary: {
					color: '#FFFFFF',
					background: COLORS.contrast,
				},
			},
		},
	},
};
