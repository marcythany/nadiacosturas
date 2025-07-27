module.exports = {
	ci: {
		collect: {
			staticDistDir: './out',
		},
		assert: {
			assertions: {
				'categories:accessibility': ['error', { minScore: 0.95 }],
				'categories:performance': ['error', { minScore: 0.9 }],
				'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
				'largest-contentful-paint': ['error', { maxNumericValue: 1200 }],
			},
		},
	},
};
