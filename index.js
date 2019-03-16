const Octokit = require('@octokit/rest')
const wordwrap = require('wordwrap')

const items = require('fs')
  .readFileSync(require('path').resolve(__dirname, 'list.txt'))
  .toString()
  .split('\n')
  .filter(Boolean)

const getItem = () =>
  items[~~(Math.random() * items.length)]

const { GIST_ID: gistId, GITHUB_TOKEN: ghToken } = process.env

const octokit = new Octokit({
  auth: `token ${ghToken}`
});

const updateGist = async (item) => {
  const wrap = wordwrap(46)

  let gist
  try {
    gist = await octokit.gists.get({ gist_id: gistId })
  } catch (err) {
    console.error(`Unable to get gist\n${err}`)
  }

  // Get original filename to update that same file
  const filename = Object.keys(gist.data.files)[0]

  try {
    await octokit.gists.update({
      gist_id: gistId,
      files: {
        [filename]: {
          content: wrap(item)
        }
      }
    })
    console.log(`Updated gist to ${item}`)
  } catch (err) {
    console.error('Unable to update gist')
    throw err
  }
}

;(async () => {
  await updateGist(getItem())
})()

process.on('unhandledrejection', process.exit)
