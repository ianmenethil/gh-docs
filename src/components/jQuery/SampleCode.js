import React, { useState } from 'react';
import { Container, Grid, Typography, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';

const domains = [
	{ label: 'Live', value: 'live.yourdomain.com' },
	{ label: 'UAT', value: 'uat.yourdomain.com' }
];

const SampleCode = () => {
	const [selectedDomain, setSelectedDomain] = useState(domains[0].value);

	const handleDomainChange = event => {
		setSelectedDomain(event.target.value);
	};

	return (
		<Container>
			<Typography variant="h4" gutterBottom>
				Sample Code
			</Typography>
			<Typography variant="body1" gutterBottom>
				Include the following in your code
			</Typography>
			<Typography variant="body1" gutterBottom>
				<strong>Stylesheet:</strong> https://cdn.{selectedDomain}/css/zenpay.payment.css
			</Typography>
			<Typography variant="body1" gutterBottom>
				<strong>JavaScript:</strong> https://cdn.{selectedDomain}/js/zenpay.payment.js
			</Typography>
			<Typography variant="body1" gutterBottom>
				The implementation depends on jQuery version 3.4.1 and requires jQuery to be included in your code.
			</Typography>
			<Typography variant="body1" gutterBottom>
				Execute the following jQuery code on the click of your "Pay Now" button.
			</Typography>
			<Box sx={{ my: 2 }}>
				<FormControl fullWidth>
					<InputLabel id="domain-select-label">Select Domain</InputLabel>
					<Select labelId="domain-select-label" value={selectedDomain} onChange={handleDomainChange}>
						{domains.map(domain => (
							<MenuItem key={domain.value} value={domain.value}>
								{domain.label}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
			<pre>
				<code>
					{`
var payment = $.zpPayment({
  url: 'https://${selectedDomain}/online/v4',
  merchantCode: '<MERCHANT-CODE>',
  apiKey: '<API-KEY>',
  fingerprint: '<FINGERPRINT>',
  redirectUrl: '<Your Redirect URL>',
  mode: 0,
  customerName: 'Customer Name',
  customerReference: 'Reference 1',
  paymentAmount: 100.00
});
payment.open();
          `}
				</code>
			</pre>
			<Typography variant="body2" gutterBottom>
				PROGRAM DOMAIN, PROGRAM SUB-DOMAIN, and API-KEY will be provided by Zenith Payments. (Note that these will be different for each
				environment i.e. Live and UAT.) For FINGERPRINT refer to the parameter details below.
			</Typography>
		</Container>
	);
};

export default SampleCode;
