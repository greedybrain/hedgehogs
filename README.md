# Contribution Guide

## First contribution:

1. Fork this repository
2. Clone it locally
3. Set your remote upstream: 
`git remote add upstream git@github.com:allisonkadel/hedgehogs.git`

## All Contributions:

4. Create a new branch:
git checkout -b branch-name
5. Make any change to the repo locally and save it
6. Stage and Commit the change
`git add .`
`git commit -m 'first commit'`
7. Push the change to your remote repo
`git push origin branch-name`
8. open a pull request for the change on github

## Ongoing:

9. After the pr is accepted, make sure your local repo is up to date with the remote upstream:
`git pull upstream master`
10. And also make sure your remote repo is up to date with your local repo:
`git push origin master`