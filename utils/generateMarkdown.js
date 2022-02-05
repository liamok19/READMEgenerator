// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//Other random badges 
// [![forthebadge](https://forthebadge.com/images/badges/powered-by-coffee.svg)](https://forthebadge.com)
// [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
// [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com)


const badgeURL = ('https://img.shields.io/apm/l/testing?style=for-the-badge');

function renderLicenseBadge(license) {
  // if {
  //   mitBadge: (badgeURL),
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  mitBadge

`;
}

module.exports = generateMarkdown;
