// F:\ZenDocs\docusaurus-2\src\pages\Homepage\homepage.js
import React from 'react';
import clsx from 'clsx';

const FeatureList = [
	{
		title: 'Powered by Test',
		Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		description: <>accusam in suscipit aliquam. Est quis ut wisi et lorem dolor kasd et ea.</>
	},
	{
		title: 'Kevin Marketing 2',
		Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		description: (
			<>
				invidunt et vulputate eirmod in eos amet vel ullamcorper dolore clita dolore tempor. Et sed tempor feugiat et sit. Placerat sit in
			</>
		)
	},
	{
		title: 'Kevin Marketing 3',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>
				invidunt et vulputate eirmod in eos amet vel ullamcorper dolore clita dolore tempor. Et sed tempor feugiat et sit. Placerat sit in
			</>
		)
	}
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className="featureSvg" role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageMarketing() {
	return (
		<section className="features">
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
