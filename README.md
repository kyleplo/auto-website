# auto-website
Auto-generate a website based off of your Github account.
## Docs
First, embed the script
`<script src="https://kyleplo.github.io/auto-website/autowebsite.js"></script>`
Then call `autoWebsite(user,template,place)`
**user** is your username.
**template** is the id of the template element.
**place** is the id of the place you want each repository to go.
### Templates
The template is the code for each repository.
In the template, you have variables that are filled in for that repository.
Variables look like this: [[variableName]]
### Variables
[[name]] - the name of the repository.
[[fullname]] - the full name.
[[user]] - your username.
[[avatar]] - link to your avatar image.
[[link]] - link to the repository
[[issuesdisplay]] - returns hidden if there are no issues.
[[projectdisplay]] - returns hidden if there are no projects.
[[downloaddisplay]] - returns hidden if there are no downloads.
[[wikidisplay]] - returns hidden if there is not a wiki.
[[pagesdisplay]] - returns hidden if not published to github pages.
[[forkdisplay]] - returns hidden if this is not a fork.
[[stargazers]] - stargazer count.
[[watchers]] - watcher count.
[[forks]] - fork count.
[[issues]] - open issue count.
[[desc]] - description.
[[homepage]] - repository homepage url.
[[homepagedisplay]] - returns hidden if there is not a homepage.
[[issueslink]] - link to the issues.
[[pullslink]] - link to the pull requests.
[[projectslink]] - link to the projects.
[[wikilink]] - link to the wiki.
