// F:\ZenDocs\docusaurus-2\src\components\jQuery\FormField.js
import React from 'react';
import { TextField, Grid } from '@mui/material';

const FormField = ({ name, label, register, required }) => (
	<Grid item xs={12} sm={6}>
		<TextField fullWidth label={label} {...register(name, { required })} variant="outlined" />
	</Grid>
);

export default FormField;
