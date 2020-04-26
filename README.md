# react-amplify

Publish React apps to Amplify (demo).

- **Demo (master):** https://master.d340r4z5620hly.amplifyapp.com/
- **Active PR:** https://github.com/rxhl/react-amplify/pull/2
- **PR preview:**

## Steps

```
# 1. Install Amplify CLI
$ npm install -g @aws-amplify/cli

# 2. Setup Amplify and create a new IAM profile (AdminAccess)
$ amplify configure

# 3a. Launch Amplify from your app
# 3b. Select the appropriate prompts and the Amplify IAM user
$ cd my-app && amplify init
```

At this point, you should see a `amplify` directory in your app root.
You can now add hosting and other goodies.

```
# 4. Host the app
$ amplify add hosting
```

Once the app is hosted, you can add PR reviews and feature branch builds from the Amplify console.
