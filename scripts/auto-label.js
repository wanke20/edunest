import { getInput, setFailed } from '@actions/core';
import { getOctokit, context } from '@actions/github';

async function run() {
  try {
    const token = getInput('github-token', { required: true });
    const octokit = getOctokit(token);

    const issue = context.payload.issue;
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
        owner: context.repo.owner,
        repo: context.repo.repo,
        issue_number: issue.number,
        labels: labels
      });
    }
  } catch (error) {
    setFailed(error.message);
  }
}

run();
