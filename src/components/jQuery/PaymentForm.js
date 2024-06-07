import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Grid, Checkbox, FormControlLabel, Typography } from '@mui/material';
import FormField from './FormField';

const PaymentForm = () => {
	const { handleSubmit, control, register } = useForm();

	const onSubmit = data => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} id="test-key-form">
			<Typography variant="h6" gutterBottom>
				Test Your Key
			</Typography>
			<Grid container spacing={3}>
				<FormField name="url" label="URL" register={register} required />
				<FormField name="merchantCode" label="Merchant Code" register={register} required />
				<FormField name="apiKey" label="API Key" register={register} required />
				<FormField name="fingerprint" label="Fingerprint" register={register} required />
				<FormField name="redirectUrl" label="Redirect URL" register={register} required />
				<FormField name="mode" label="Mode" register={register} required />
				<FormField name="customerName" label="Customer Name" register={register} required />
				<FormField name="customerReference" label="Customer Reference" register={register} required />
				<FormField name="paymentAmount" label="Payment Amount" register={register} required />
				<FormField name="customerEmail" label="Customer Email" register={register} required />
				<FormField name="merchantUniquePaymentId" label="Merchant Unique Payment ID" register={register} required />
				<FormField name="timestamp" label="Timestamp" register={register} required />
				<FormField name="cardProxy" label="Card Proxy" register={register} />
				<FormField name="callbackUrl" label="Callback URL" register={register} />
				<FormField name="overrideFeePayer" label="Override Fee Payer" register={register} />
				<FormField name="userMode" label="User Mode" register={register} />
				<FormField name="minHeight" label="Min Height" register={register} />

				{/* Add Checkboxes */}
				<Grid item xs={12}>
					<Controller
						name="allowBankAcOneOffPayment"
						control={control}
						render={({ field }) => (
							<FormControlLabel control={<Checkbox {...field} />} label="Allow Bank Account One-Off Payment" className="checkbox-label" />
						)}
					/>
					<Controller
						name="allowPayIdOneOffPayment"
						control={control}
						render={({ field }) => (
							<FormControlLabel control={<Checkbox {...field} />} label="Allow PayID One-Off Payment" className="checkbox-label" />
						)}
					/>
					<Controller
						name="allowApplePayOneOffPayment"
						control={control}
						render={({ field }) => (
							<FormControlLabel control={<Checkbox {...field} />} label="Allow Apple Pay One-Off Payment" className="checkbox-label" />
						)}
					/>
					<Controller
						name="allowGooglePayOneOffPayment"
						control={control}
						render={({ field }) => (
							<FormControlLabel control={<Checkbox {...field} />} label="Allow Google Pay One-Off Payment" className="checkbox-label" />
						)}
					/>
					<Controller
						name="allowLatitudePayOneOffPayment"
						control={control}
						render={({ field }) => (
							<FormControlLabel control={<Checkbox {...field} />} label="Allow Latitude Pay One-Off Payment" className="checkbox-label" />
						)}
					/>
					<Controller
						name="showFeeOnTokenising"
						control={control}
						render={({ field }) => (
							<FormControlLabel control={<Checkbox {...field} />} label="Show Fee on Tokenising" className="checkbox-label" />
						)}
					/>
					<Controller
						name="showFailedPaymentFeeOnTokenising"
						control={control}
						render={({ field }) => (
							<FormControlLabel
								control={<Checkbox {...field} />}
								label="Show Failed Payment Fee on Tokenising"
								className="checkbox-label"
							/>
						)}
					/>
					<Controller
						name="hideTermsAndConditions"
						control={control}
						render={({ field }) => (
							<FormControlLabel control={<Checkbox {...field} />} label="Hide Terms and Conditions" className="checkbox-label" />
						)}
					/>
					<Controller
						name="sendConfirmationEmailToCustomer"
						control={control}
						render={({ field }) => (
							<FormControlLabel control={<Checkbox {...field} />} label="Send Confirmation Email to Customer" className="checkbox-label" />
						)}
					/>
				</Grid>
			</Grid>
			<Button type="submit" variant="contained" color="primary">
				Test
			</Button>
		</form>
	);
};

export default PaymentForm;
