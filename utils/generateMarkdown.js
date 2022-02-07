// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// module.exports = generateMarkdown;
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    
  switch (license) {
    case 'MIT':
      return ('[![License: MIT](https://img.shields.io/apm/l/vim-mode?color=orange&style=for-the-badge.svg)](https://opensource.org/licenses/MIT)');
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-green.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/aur/license/android-studio?style=for-the-badge.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'Boost 1.0':
      return '[![License: Boost 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    default:
      ('')
  }

}

// Function that returns the license link. Returning an empty string if there's no license
function renderLicenseLink(license) {

  switch (license) {
    case 'MIT':
      return ('[License: MIT](https://opensource.org/licenses/MIT)');
    case 'GNU GPLv3':
      return '[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache 2.0':
      return '[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'Boost 1.0':
      return '[License: Boost 1.0](https://www.boost.org/LICENSE_1_0.txt)';
    case 'Unlicense':
      return '[License: Unlicense](http://unlicense.org/)';
    default:
      ('')
  }
}

//A function that returns the license section of README. Returning an empty string if there's no license
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license)
  // console.log((!license) ? '' : `If License has not been chosen then please follow the preferred option MIT license in the following link ${licenseLink}`);
  if (!license) {
    return ""
  } else {
    return `This project is available under the MIT license. Visit ${licenseLink} for full license text`
  }
};

renderLicenseSection('MIT');

function generateMarkdown(data) {

//creating a variable for when the licence badge has been selected it's based on the inquire.prompt field with the same name in (./index.js)  
const licenseBadge = renderLicenseBadge(data.license);
const licenseSection = renderLicenseSection(data.license)
  
//returning the markdown version of the readme
  return `
# ${data.name}
${licenseBadge}

## Table of contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Description
# What is the app for?
${data.description}

## Installation 
| Steps | Instructions | 
| ------------- |:-------------:| 
| Installation Requirements | ${data.inquirer} |
| Step 1 | ${data.Step1} |
| Step 2 | ${data.Step2} |
| Step 3 | ${data.Step3} |
| Step 4 | ${data.Step4} |


## Final Look
# Usage
<img src='assets/images/${data.usage}' alt="final-look" >

## License
${licenseSection}

## Contribute
${data.contribute}

## Tests
${data.test}

## Questions
${data.questions}

Git profile: https://github.com/${data.github}
Email: ${data.email}
`
;
};

module.exports = generateMarkdown;