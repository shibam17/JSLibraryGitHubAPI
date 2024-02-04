class GitHubAPIWrapper {
  constructor(token) {
    this.token = token;
    this.baseUrl = "https://api.github.com";
  }

  async fetchRepositories(username) {
    // Fetch repositories for a given username
    const url = `${this.baseUrl}/users/${username}/repos`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `token ${this.token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching repositories:", error);
      throw error;
    }
  }

  async fetchOrganizationProjects(orgName) {
    // Fetch projects for a given organization
    const url = `${this.baseUrl}/orgs/${orgName}/projects`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `token ${this.token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch organization projects");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching organization projects:", error);
      throw error;
    }
  }

  async fetchCommits(owner, repo) {
    // Fetch commits for a given repository
    const url = `${this.baseUrl}/repos/${owner}/${repo}/commits`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `token ${this.token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch commits");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching commits:", error);
      throw error;
    }
  }
}

module.exports = GitHubAPIWrapper;