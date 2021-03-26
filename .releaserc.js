module.exports = {
  branch: 'main',
  plugins: [
    '@semantic-release/changelog',
    ['@semantic-release/git', { assests: 'changelog.md' }],
    '@semantic-release/commit-analyzer',
    '@semantic-release/npm',
    '@semantic-release/release-notes-generator',
  ],
};
