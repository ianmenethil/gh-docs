// F:\ZenDocs\docusaurus-2\src\pages\index.js
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageMarketing from '/src/components/Homepage/homepageMarketingComponent';
import SearchBox from '/src/components/Search/SearchBar';

import '../css/base.css';
import '../css/components.css';
import '../css/layout.css';

function HomepageHero() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', 'heroBanner')}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className="buttons">
					<Link className="button button--secondary button--lg" to="/docs/intro">
						📕 ZenPay Developer Guide 📕
					</Link>
				</div>
				<div className="buttons">
					<HomepageMarketing />
				</div>
			</div>
		</header>
	);
}

// Main //wrapper for the homepage
export default function Home() {
	return (
		<Layout title="Hello friend" description="">
			<HomepageHero />
			<main>
				<HomepageMarketing />
				<div className="buttons">
					<br></br>
					<br></br>
					<br></br>
					<SearchBox />
				</div>
			</main>
		</Layout>
	);
}