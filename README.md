# React + Typescript Starter Kit

A React + Typescript + Docker + Vite starter kit with event bus with only 2 dependencies: React and React-Dom (v17).

Action | Command
:--- | :---
Docker Image | `docker build -t node-16 .`
Docker Container | `docker run -d -it -v $(pwd):/src -p 5000:3000 -p 5001:3001 --name <some-container-name> node-16`
Docker SSH | `docker exec -it <some-container-name> /bin/sh`
Install | `npm install`
Run | `npm run dev`
Build |`npm run build`
Preview Build |`npm run preview`

**In this example, port 3000 in the container will be available at localhost:5000. HMR hot-reloading with Vite requires its own port to be specified. In this example its 5001. This needs to match what's in vite.config.ts as clientPort.*

**Be sure to set `base` in vite.config.ts if publishing a public branch to github for demo*

<script src="https://gist.github.com/iamjohnmills/77fd0507678f8be6d9e07213a937cd2b"></script>
