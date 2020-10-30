# What

A slack bot that you can just run once to notify you if, from members of your team:

From JIRA:

- A ticket has been blocked for too long
- Someone has no tickets in progress
- A ticket is in progress for a long time
- Someone is not working on an item from the top of the backlog

From GIT:

- PR's are waiting feedback
- A PR is open too long

The point of the bot is that, while we are all able of managing ourselves. It can help that there is an impartial bot to keep us on the straight and narrow of not forgetting about things like open PR's and so on. Especially when these checks can be automated 😍

## Running 🏃‍♂️

You can run the function as many times as you like. so maybe set it up as a lambda or something you hit X times per day. Just run `yarn start` and configure it following the steps below.

## Configuration ⚙️

You can configure how thresholds for the notification, team members and so on
in the public config object that can be committed to git. This will adjust
how the bot behaves. For API token configuration have a look at "secrets"

As the project is in TypeScript and there is a type config for the configuration it should be fairly self explanatory 🚀

## Secrets 🕵️‍♀️

To use, add secrets into a `.env` file at the root of the project for:

- BOT_TOKEN, this is the token for the slack bot you create
- [JIRA_TOKEN](https://confluence.atlassian.com/cloud/api-tokens-938839638.html) token from jira for basic rest auth
