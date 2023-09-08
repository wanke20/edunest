const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const token = core.getInput('github-token', { required: true });
    const octokit = github.getOctokit(token);

    const issue = github.context.payload.issue;
    const issueTitle = issue.title.toLowerCase();
    const labels = [];

    if (issueTitle.includes('bug') || issueTitle.includes('error')) {
      labels.push('bug');
    }

    if (issueTitle.includes('feature request')) {
      labels.push('feature');
    }

    if (issueTitle.includes('help wanted')) {
      labels.push('help-wanted');
    }

    if (issueTitle.includes('improvement') || issueTitle.includes('enhancement')) {
      labels.push('enhancement');
    }

    if (labels.length > 0) {
      await octokit.rest.issues.addLabels({
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        issue_number: issue.number,
        labels: labels
      });
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
