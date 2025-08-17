import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newVersion = process.env.npm_package_version;

const targetFiles = [
	'src/version.ts',
	'public/manifest.json'
];

(async () => {
	console.log(`Updating files to version: ${newVersion}`);

	for (const file of targetFiles) {
		const filePath = path.resolve(__dirname, '..', file);

		try {
			let content = await fs.readFile(filePath, 'utf8');

			if (file.endsWith('.ts')) {
				content = content.replace(
					/export const APP_VERSION = ['"`].+?['"`]/,
					`export const APP_VERSION = '${newVersion}'`
				);
			} else if (file === 'public/manifest.json') {
				const manifest = JSON.parse(content);
				manifest.version = newVersion;
				content = JSON.stringify(manifest, null, 2);
			}

			await fs.writeFile(filePath, content, 'utf8');
			console.log(`✅ Updated ${file}`);
		} catch (error) {
			console.error(`⚠️ Error updating ${file}:`, error.message);
		}
	}

	console.log('\n🚀 Version update complete!');
})();
