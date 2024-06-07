// F:\ZenDocs\docusaurus-2\src\components\jQuery\PaymentPlugin.js
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import PaymentForm from './PaymentForm';
import PaymentDemo from './PaymentDemo';

const PaymentPlugin = () => {
	return (
		<Container>
			<Typography variant="h4" gutterBottom>
				Payment Plugin
			</Typography>
			<Grid container spacing={4}>
				<Grid item xs={12} md={8}>
					<PaymentForm />
				</Grid>
				<Grid item xs={12} md={4}>
					<PaymentDemo />
				</Grid>
			</Grid>
		</Container>
	);
};

export default PaymentPlugin;
