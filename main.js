const GitHubAPIWrapper = require("./githubAPIWrapper");

const githubToken = "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";
const github = new GitHubAPIWrapper(githubToken);

const testFetchRepositories = async () => {
  const username = "shibam17";
  try {
    const repos = await github.fetchRepositories(username);
    console.log("Repositories:", repos);
  } catch (error) {
    console.error("Error fetching repositories:", error);
  }
};

const testFetchProjects = async () => {
  const org = "your_organization";
  try {
    const projects = await github.fetchProjects(org);
    console.log("Projects:", projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

const testFetchCommits = async () => {
  const owner = "your_username";
  const repo = "your_repository";
  try {
    const commits = await github.fetchCommits(owner, repo);
    console.log("Commits:", commits);
  } catch (error) {
    console.error("Error fetching commits:", error);
  }
};

async function runTests() {
  await testFetchRepositories();
  await testFetchProjects();
  await testFetchCommits();
}

runTests();
