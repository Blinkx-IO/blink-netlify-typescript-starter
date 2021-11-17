# Blink X

This is the Blink X Netlify repo.
A small example site to generate and deploy.

## Clone and deploy with a click

You can get started with your own version of this site with a couple of clicks. the button below will clone this repo to your own GitHub account and link it to a new site for you on [Netlfy](https://www.netlify.com)

<!-- Markdown snippet -->
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Blink-CMS/blink-netlify-typescript-starter)

After you deploy to Netlify, add your Blink API key.

To add your Blink API key you to your site :

1. Find you new site under "Sites" in Netlify
2. Click "Site settings"
3. Click "Build & deploy"
4. Scroll down to "Environment" & click edit variables
5. In the "Key" field enter "blinkApiKey" and in the "Value" field enter your Blink API Key and save.
6. Refresh the public facing link for your new site and make live changes in your Blink X account.

...or you can clone it down to your local development machine and run & build it there before deploying, if you prefer.

## Installation & Local Development

Please insure you have Typescript, and NodeJS v14+ installed on your local environment.

```bash

npm -i package.json

```

## Environment Files and Variables

Create a .env file and edit the blinkApiKey variable to your blink organizations api key.

## Running Locally

After you've installed the npm packages per the instructions either use npm via the CLI or a debugger like the one in visual studio

Use the local-dev script to test out the template locally using the netlify-cli tools

```bash

npm run local-dev

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
