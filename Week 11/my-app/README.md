### How to setup the cloud-flare on local
```
    - npm create cloudflare -- my-app : To initaliaze a cloud-flare app onto our local
    - npm run dev  : Run the application
```
### How to deploy your local code to cloud-flare using wrangler CLI
```
    - npx wrangler login     : Warngler is a CLI tool powered by cloud-flare
    - npm run deploy         : To Deploy our application to cloudflare

    - npx wrangler whoami    : To check the loggedin user details and scope
```

### How to deploy another application using the same code base
```
    - Go to wrangler.toml file and package.json
    - Change the name property of the application to your desired one.
    - Run the command again - npm run deploy