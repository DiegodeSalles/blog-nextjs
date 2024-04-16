## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Testing on a local environment

If you want to test this project on a local environment, you need to add a file to the root directory called: ".env.local"

You'll need this file to access a Github repository. Otherwise, you may go to './app/about/projects/components/projectlist.js' and follow the instructions on the comments. But if you make too many requests to Github, you will not be able to fetch any data using their API for some minutes.

Inside the ".env.local" file, add the following lines:

```bash
GIT_USER=username
GIT_API=api_token
```
