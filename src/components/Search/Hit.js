// F:\ZenDocs\docusaurus-2\src\components\Search\Hit.js

import React from 'react';
import { Highlight } from 'react-instantsearch';

export const Hit = ({ hit }) => {
	return (
		<article>
			<img src={hit.poster_path} alt={hit.title} />
			<div className="hit-original_title">
				<Highlight attribute="original_title" hit={hit} />
			</div>
			<div className="hit-title">
				<Highlight attribute="title" hit={hit} />
			</div>
			<div className="hit-release_date">
				<Highlight attribute="release_date" hit={hit} />
			</div>
		</article>
	);
};
