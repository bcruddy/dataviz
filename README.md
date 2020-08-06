# dataviz

quick and dirty app for hacking together quick data visualizations with express, vue.js, and highcharts.

there are no rules. do whatever you want.

## why

everyone needs to visualize datasets from time to time and spinning up the tools necessary always takes longer than anticipated. the intent of this project is to eliminate start up time and get directly to consuming and displaying the data.

## what

a single repository supporting both a UI application based on vue.js and a backend API based on express for pulling and visualizing data.

## how

the application is composed of two child apps - the UI and and the API layer.

start the ui:

```bash
$ dataviz/ui npm run serve
```

start the api:

```bash
$ dataviz/api node index.js
```

## notes and contributung

upstream changes to this repository will include new routes and views as i need them. they will also include building out the infrastructure required for visualizing any datasets for which it does not currently support.

if you have a use case not accounted for in this project, submit a pull request. for code-based opinions, please fix the linting if you like four spaces and a space between function names and the parens. otherwise keep them in your own fork (or clone, i won't be offended).
