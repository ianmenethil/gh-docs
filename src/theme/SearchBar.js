import React from 'react';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

export default function SearchBarWrapper(props) {
	return <DocSearch appId="R2IYF7ETH7" indexName="docsearch" apiKey="599cec31baffa4868cae4e79f180729b" {...props} />;
}
