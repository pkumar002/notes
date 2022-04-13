# NextJs introductions

![ssr-explanation](./ssr-explanation.jpg)

Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
<br/>

# Autometic Setup

We recommend creating a new next.js app using `create-next-app` which sets up everything automatically for you.

```
npx create-next-app@latest
# or
yarn create next-app
```

If you want to start with a TypeScript project you can use the --typescript flag:

```
npx create-next-app@latest --typescript
# or
yarn create next-app --typescript
```

After the installation is complete:

\- Run `npm run dev` or `yarn dev` to start the development server on [localhost](http://localhost:3000).

\- Visit `http://localhost:3000` to view your application.

\- Edit `pages/index.js` and see the updated result in your browser.

<br/>

# Create Next App

Create next app comes with the following options:

\- **--ts**, **--typescript** - initialize as a Typescript project.

\- **-e**, **--example[name][github-url]** - an example to bootstrap the app with.

<br/>

# Manual setup

\- Create empty folder

\- install `next`,`react`, and `react-dom` in your project directory

<pre>
npm install next react react-dom
# or
yarn add next react react-dom
</pre>

Open `package.json` and add the following `scripts`:

```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

<br/>
These scripts refer to the different stages of developing an application:

\- dev - Runs `next dev` which starts Next.js in development mode

\- build - Runs `next build` which builds the application for production usage

\- start - Runs `next start` which starts a Next.js production server

\- lint - Runs `next lint` which sets up Next.js' built-in ESLint configuration

Next.js is built around the concept of pages. A page is a [React Component](https://reactjs.org/docs/components-and-props.html) exported from a `.js`, `.jsx`, `.ts`, or `.tsx` file in the pages directory.
