import React, { useState } from 'react';
import Content0 from '@site/docs/jquery-plugin/input-parameters.md';
import Content1 from '@site/docs/jquery-plugin/input-parameters.md';
import Content2 from '@site/docs/jquery-plugin/input-parameters.md';

const ModeSelector = () => {
	const [mode, setMode] = useState(0);

	const renderContent = () => {
		switch (mode) {
			case 0:
				return <Content0 />;
			case 1:
				return <Content1 />;
			case 2:
				return <Content2 />;
			default:
				return <Content0 />;
		}
	};

	return (
		<div id="mode-selector-container">
			<label htmlFor="mode">Select Mode: </label>
			<select id="mode" value={mode} onChange={e => setMode(Number(e.target.value))}>
				<option value={0}>Make Payment</option>
				<option value={1}>Tokenise</option>
				<option value={2}>Custom Payment</option>
			</select>
			<div className="content">{renderContent()}</div>
		</div>
	);
};

export default ModeSelector;
