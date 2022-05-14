module.exports = {
	branches: ["main", "develop"],
	repositoryUrl: "https://github.com/evaj10/github-actions",
	plugins: [
		"@semantic-release/commit-analyzer", // analizira komit poruke i odredjuje narednu verziju
		"@semantic-release/release-notes-generator", // generise release notes na osnovu komita
		"@semantic-release/github" // kreira github release
	]
}