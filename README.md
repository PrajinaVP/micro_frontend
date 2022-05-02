App 1

prajina@M-Prajina micro-frontend % npx create-mf-app
Need to install the following packages:
  create-mf-app
Ok to proceed? (y) y
? Pick the name of your app: home
? Project Type: Application
? Port number: 3000
? Framework: react
? Language: typescript
? CSS: Tailwind
Your 'home' project is ready to go.

Next steps:

▶️ cd home
▶️ npm install
▶️ npm start

npm notice 
npm notice New minor version of npm available! 8.3.0 -> 8.7.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v8.7.0
npm notice Run npm install -g npm@8.7.0 to update!

App 2
______

prajina@M-Prajina product-page % npx create-mf-app
? Pick the name of your app: products
? Project Type: Application
? Port number: 3001
? Framework: react
? Language: typescript
? CSS: Tailwind
Your 'products' project is ready to go.

Next steps:

▶️ cd products
▶️ npm install
▶️ npm start



Home
______
1. Header component
2. Footer 
3. Expose Header and Footer so that the other apps can use them
  Add them under "exposes" in webpack.config.js
  plugins: [
    new ModuleFederationPlugin({
      name: "home",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Header": "./src/Header.tsx",
        "./Footer": "./src/Footer.tsx"
      },
      shared: {
        ...deps,


Products
___________________
1. Add reference to home

API Server
_____________

prajina@M-Prajina micro-frontend % npx cr
eate-mf-app
? Pick the name of your app: server
? Project Type: API Server
? Port number: 8080
? Template: nestjs-auth
Your 'server' project is ready to go.

Next steps:

▶️ cd server
▶️ npm install
▶️ npm start

App 3 - Cart 
Same as above

why using create-mf-app in steadt of create-react-app or next.js?
 as create-react-app, and next have very complex setups. Everything is in there with a really comples Webpack configuration, and es lint and testing, and prettier and all the rest of ir. It is a great starting point but a lot of extra clutter and bloat, that distracts from what I want to do with create a MFM, which is give you a way to make poc and test applications so that you can test out how model federation and micro frontends are going to work in your environmnet without actually going and making all the adjustments to those things yourself. So, each one of the apps that it creates is the smallest possible thing that I can think of, It is basically just Webpack, and X webpack, and react webpack and view webpack. And all of the different. There is 10 different templates that you can use, So, you know it is very very simple and lightweight and it is all there for you to try and play with.
 
 css should be share in module federated services


### Reference
https://www.youtube.com/watch?v=lKKsjpH09dU