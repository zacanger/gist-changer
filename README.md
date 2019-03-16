Based on <https://github.com/matchai/bird-box>

Update a Gist on a schedule, for display in your pinned repos area.

## How To

1. Create a new public GitHub Gist (https://gist.github.com/)
1. Create a token with the `gist` scope and copy it. (https://github.com/settings/tokens/new)
1. Fork this repo
1. Log into CircleCI with your GitHub (https://circleci.com/vcs-authorize/)
1. Click on "Add Projects" on the sidebar
1. Set up a project with the newly created fork
1. Go to Project Settings > Environment Variables
1. Add the following environment variables:
  - **GIST_ID:** The ID portion from your gist url `https://gist.github.com/matchai/`**`6d5f84419863089a167387da62dd7081`**.
  - **GITHUB_TOKEN:** The GitHub token generated above.
1. Add a newline-delimited text file of content you'd like to have posted in your Gist.
