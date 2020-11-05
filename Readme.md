# What

A slack bot that you can just run once to notify you if, from members of your team (this is just an example of look and feel):

<img width="523" alt="Screenshot 2020-10-31 at 23 24 44" src="https://user-images.githubusercontent.com/1426390/97791250-ac222b00-1bd0-11eb-8732-4e18a49fafba.png">

From JIRA:

- A ticket has been blocked for too long ✅
- Someone has no tickets in progress ✅
- A ticket is in progress for a long time ✅
- Someone is working on an issue that is lower in priority than an unassigned higher priority issue ✅

From GIT: (to be added)

- PR's are waiting feedback ❌
- A PR is open too long ❌

The point of the bot is that, while we are all able of managing ourselves. It can help that there is an impartial bot to keep us on the straight and narrow of not forgetting about things like open PR's and so on. Especially when these checks can be automated 😍

## Running 🏃‍♂️

You can run the function as many times as you like. so maybe set it up as a lambda or something you hit X times per day. Just run `yarn start` and configure it following the steps below.

## Configuration ⚙️

You can configure how thresholds for the notification, team members and so on
in the public config object that can be committed to git. This will adjust
how the bot behaves. For API token configuration have a look at "secrets"

As the project is in TypeScript and there is a type config for the configuration it should be fairly self explanatory 🚀 but some cool settings you can change

- number of days a ticket is in state blocked before slacking about it
- number of days a ticket is in state in progress before slacking about it.
- the names of the states as you may have called them something custom
- team members, you need to supply details from jira, slack and git in there so we can work out who to mention etc
- your status and priority names to make it work with your jira config

config right now is done in code. but this will be done on the 'Home Tab' of the slack app. you can find the config file in `packages/bot/src/config.ts`

## Secrets 🕵️‍♀️

To use, add secrets into a `.env` file at the bot package and in the infrastructure package. reason it is in both is if you want to run it locally. however the env vars get added to the lambda that goes up to aws which is why they are needed in infrastructure package.

- BOT_TOKEN, this is the token for the slack bot you create
- [JIRA_TOKEN](https://confluence.atlassian.com/cloud/api-tokens-938839638.html) token from jira for basic rest auth

## Deployments

Take a look at the details in the infrastructure package about how to deploy it. But take note you need to run `yarn package` in the bot package to get the dist folder ready to go up to aws. As it need compiled ts, and prod node modules along with it.

## TODO 📝

- make a home page for the app as per [here](https://api.slack.com/surfaces/tabs/using) to get the config input so it is not just in code
- work out how to call the lambda x times per day from slack
