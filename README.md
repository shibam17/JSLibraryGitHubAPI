
# GitHub API Wrapper

The GitHub API Wrapper is a JavaScript library that provides a convenient interface for interacting with the GitHub REST API. It encapsulates common API calls, handles authentication, and simplifies error handling, allowing you to easily fetch data from GitHub in your JavaScript applications.

## Features

- Fetch repositories for a given GitHub user.
- Fetch projects for a given organization.
- Fetch commits for a given repository.

## Installation

To use the GitHub API Wrapper in your project, follow these steps:

1. Download the `githubAPIWrapper.js` file from this repository.
2. Place the `githubAPIWrapper.js` file in your project directory.

## Usage

### Importing the Wrapper

Begin by importing the GitHub API Wrapper into your project:

```javascript
const GitHubAPIWrapper = require('./githubAPIWrapper');
```

### Initializing the Wrapper

```javascript
const githubToken = 'your_github_personal_access_token';
const github = new GitHubAPIWrapper(githubToken);
```

### Fetching Repositories

Retrieve repositories for a specific GitHub user:

```javascript
const username = 'github_username';
github.fetchRepositories(username)
  .then(repos => {
    console.log('Repositories:', repos);
  })
  .catch(error => {
    console.error('Error fetching repositories:', error);
  });
```

### Fetching Organization Projects

Access projects associated with a GitHub organization:


```javascript
const orgName = 'organization_name';
github.fetchOrganizationProjects(orgName)
  .then(projects => {
    console.log('Projects:', projects);
  })
  .catch(error => {
    console.error('Error fetching organization projects:', error);
  });
```

### Fetching Commits

Retrieve commit history for a specific repository:

```javascript
const owner = 'repository_owner';
const repo = 'repository_name';
github.fetchCommits(owner, repo)
  .then(commits => {
    console.log('Commits:', commits);
  })
  .catch(error => {
    console.error('Error fetching commits:', error);
  });
```

This README provides clear instructions on installing, initializing, and utilizing the GitHub API Wrapper in your projects. Enjoy streamlining your GitHub API interactions with this powerful library!