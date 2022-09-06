/** @type {import('next').NextConfig} */
const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
	openAnalyzer: true,
})


module.exports = withBundleAnalyzer({
	reactStrictMode: true,
	webpack: config => {
		config.resolve.alias['@'] = path.resolve(__dirname);
		config.module.rules.push({
			test: /\.svg$/,
			use: '@svgr/webpack'
		});
		return config;
	},
	async headers() {
		return [
			{
				// matching all API routes
				source: '/api/:path*',
				headers: [
					{ key: 'Access-Control-Allow-Credentials', value: 'true' },
					{ key: 'Access-Control-Allow-Origin', value: '*' },
					{
						key: 'Access-Control-Allow-Methods',
						value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
					},
					{
						key: 'Access-Control-Allow-Headers',
						value:
							'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
					}
				]
			}
		];
	},
	images: {
		domains: [
			'lh3.googleusercontent.com',
			'res.cloudinary.com',
			'a0.muscache.com',
			'mdbcdn.b-cdn.net',
			'unsplash.com',
			'images.unsplash.com',
			'lottiefiles.com',
			'assets10.lottiefiles.com',
			'flagcdn.com'
		]
	},
	env: {}
});


