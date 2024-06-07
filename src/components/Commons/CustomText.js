import React from 'react';
import PropTypes from 'prop-types';

// Base component
const CustomText = ({ children, style }) => {
	return <span style={style}>{children}</span>;
};

CustomText.propTypes = {
	children: PropTypes.node.isRequired,
	style: PropTypes.object
};

CustomText.defaultProps = {
	style: {}
};

// Common font styles
const commonStyles = {
	fontFamily:
		'system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
	fontSize: '16px',
	fontStyle: 'normal',
	fontVariant: 'normal',
	fontWeight: 400,
	letterSpacing: 'normal',
	lineHeight: '26.4px',
	textDecoration: 'none',
	textAlign: 'start',
	textIndent: '0px',
	textTransform: 'none',
	verticalAlign: 'baseline',
	whiteSpace: 'normal',
	wordSpacing: '0px',
	color: 'rgb(255, 255, 255)' // Default color; can be overridden
};

// Style definitions with common font styles
const styles = {
	blueBoldText: { ...commonStyles, color: 'blue', fontWeight: 'bold' },
	redBoldText: { ...commonStyles, color: 'red', fontWeight: 'bold' },
	greenBoldText: { ...commonStyles, color: 'green', fontWeight: 'bold' },
	blueText: { ...commonStyles, color: 'blue' },
	greenText: { ...commonStyles, color: 'green' },
	redText: { ...commonStyles, color: 'red' }
};

// Individual styled components
export const BlueBoldText = ({ children }) => <CustomText style={styles.blueBoldText}>{children}</CustomText>;
export const RedBoldText = ({ children }) => <CustomText style={styles.redBoldText}>{children}</CustomText>;
export const GreenBoldText = ({ children }) => <CustomText style={styles.greenBoldText}>{children}</CustomText>;
export const BlueText = ({ children }) => <CustomText style={styles.blueText}>{children}</CustomText>;
export const GreenText = ({ children }) => <CustomText style={styles.greenText}>{children}</CustomText>;
export const RedText = ({ children }) => <CustomText style={styles.redText}>{children}</CustomText>;

export default CustomText;
