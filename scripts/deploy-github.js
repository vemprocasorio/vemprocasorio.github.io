const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'git@github.com:padovan/padovan.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
