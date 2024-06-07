// F:\ZenDocs\docusaurus-2\src\components\jQuery\PaymentDemo.js
import React from 'react';
import { Button, Grid, Typography, FormControlLabel, Checkbox } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const PaymentDemo = () => {
	const { control } = useForm();

	return (
		<div>
			<Typography variant="h6" gutterBottom>
				Quick Demo
			</Typography>
			<Grid container spacing={2}>
				<Grid item>
					<Button variant="contained" color="primary">
						Pay $500.00
					</Button>
				</Grid>
				<Grid item>
					<Button variant="contained" color="primary">
						Pay Now
					</Button>
				</Grid>
				<Grid item>
					<Button variant="contained" color="primary">
						Tokenise with $500
					</Button>
				</Grid>
				<Grid item>
					<Button variant="contained" color="primary">
						Tokenise only
					</Button>
				</Grid>
			</Grid>
			<Typography variant="h6" gutterBottom>
				Options
			</Typography>
			<Grid container spacing={2}>
				<Grid item>
					<Controller
						name="displayFeeAndTokenise"
						control={control}
						render={({ field }) => <FormControlLabel control={<Checkbox {...field} />} label="Display Fee and Tokenise" />}
					/>
					<Controller
						name="displayFailedPaymentFee"
						control={control}
						render={({ field }) => <FormControlLabel control={<Checkbox {...field} />} label="Display Failed Payment Fee on Tokenise" />}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default PaymentDemo;
