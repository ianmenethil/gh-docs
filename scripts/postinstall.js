const { execSync } = require('child_process');

try {
	const log = message => {
		console.log(`[LOG] ${message}`);
	};
	log(`Current script file: ${__filename}`);
	log(`npm install -g npm-check-updates`);
	execSync('npm install -g npm-check-updates', { stdio: 'inherit' });

    log('Running: npx npm-check-updates -u');
	execSync('npx npm-check-updates -u', { stdio: 'inherit' });

	process.env.DOCUSAURUS_SWIZZLE_TYPE = 'javascript';
	log(`SET DOCUSAURUS_SWIZZLE_TYPE: ${process.env.DOCUSAURUS_SWIZZLE_TYPE}`);

	const swizzlecommand = 'npx docusaurus swizzle @docusaurus/theme-classic SearchBar --javascript --wrap';

    log('Running: ' + swizzlecommand);
	execSync(swizzlecommand, { stdio: 'inherit' });
	console.log('Overrides applied successfully.');

} catch (error) {
	console.error('Error applying overrides:', error);
	process.exit(1);
}
