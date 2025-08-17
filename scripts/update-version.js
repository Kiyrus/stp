const fs = require('fs');
const path = require('path');

// Получаем версию из аргументов или package.json
const newVersion = process.env.npm_package_version;

// Пути к файлам, где нужно обновить версию
const targetFiles = [
	'src/types/version.ts',
	'package.json'
];

targetFiles.forEach(file => {
	const filePath = path.resolve(__dirname, '..', file);

	if (fs.existsSync(filePath)) {
		let content = fs.readFileSync(filePath, 'utf8');

		// Обновляем версию в зависимости от типа файла
		if (file.endsWith('.ts')) {
			content = content.replace(
					/export const APP_VERSION = ['"`].+?['"`]/,
					`export const APP_VERSION = '${newVersion}'`
			);
		}
		else if (file === 'public/manifest.json') {
			const manifest = JSON.parse(content);
			manifest.version = newVersion;
			content = JSON.stringify(manifest, null, 2);
		}

		fs.writeFileSync(filePath, content, 'utf8');
		console.log(`✅ Updated version in ${file}`);
	}
});

console.log(`\n🚀 Version updated to ${newVersion}`);
