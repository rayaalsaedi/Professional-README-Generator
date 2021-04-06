// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license ==="NONE"){
    return "";
  }
  else{
    return`![license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license ==="NONE"){
    return "";
  }
  else{
  return `* [License](#license) `
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license ==="NONE"){
    return "";
  }
  else{
  return `## License 
  
  This application is licensed under the ${license} license.
  `


  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  * [Instructions](#instructions)
  * [Description](#description)
  * [Installation](#installation)
  * [Test](#tests)
  * [Usage](#usage)
  * [Github Username](#github)
  * [Email](#email)
  
  ${renderLicenseLink (data.license)}

  ${renderLicenseSection(data.license)}

  ## Instructions

  ${data.instructions}

  # Description
  ${data.description}

  # Installation
  ${data.installation}

  # Tests
  ${data.test}
  
  # Usage
  ${data.usage}

  # Github
  ${data.username}

  # Email
  ${data.email}
`;
}

module.exports = generateMarkdown;
