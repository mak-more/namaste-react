# Namaste React #

# Git config #
git init <br/>
git add . <br/>
git branch -M main <br/>
git commit -m "episode-01" <br/>
git push origin main <br/>

# NPM config #
npm init (package.json will install) <br/>
npm install -D parcel (D stands for development) <br/>

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Differential Bundling - support older browsers
- HTTPs
- Tree Shaking - remove unused code
- Different Dev & Prod bundles
- npm parcel build index.html

# Two types of React Components
- Class Component - OLD
- Functional Components - NEW

# Two types of Export/Import
 - Default Export/Import
    - export default Component;
    - import Component from "path";

 - Named Export/Import
    - export const Component;
    - import {Component} from "path";

# React Hooks
- Normal JS Utility Functions
- Two types of Hooks:
  - useState() - Superpowerful State Variables in react. Whenever State variable updates, React triggers the reconciliation cycle (Re-render the component)
  - useEffect()
  - useContext()
  - useRouteError()
  - useParams()
  - custom hooks

# React Fiber Architecture

# React Life Cycle Diagram

# Install React Router
-  npm react-router-dom

# Two types of Routing in WEB Apps
- Client Side Routing
- Server Side Routing

# Optimizing Apps - Smaller Bundlers of a large file, load when user clicks
- Chunking
- Code Splitting
- Dynamic Bundling
- Lazy Loading
- On Demand Loading
- Dynamic Import

# Config. Driven UI

# Cloudinary Image ID (CDN link of images)

# Map, Filter, Reduce - Javascript

# Higher Order Component

# Monolith, Micro-Services

# CORS
- Chrome extension
- corsproxy.io

# Props drilling

# Create Context

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Create cardslice (to add item)
- Dispatch (action)
- Selector

# Types of Testing - Testing to be do by Developer
- Unit Testing
- Integration Testing
- End to End Testing - Testing react app from start to end

# Setting up Testing in our App
- Install React Testing Library
- Install React Jest
- Insatll Babel dependencies (Jest using Babel)
- Config. Babel
- Config. Parcel to disable Babel transpilation, which override the default Parcel config for JS to exclude @parcel/transformer-babel
- Jest Config. - "npx jest --init"
- Install Jsdom library
- Dunder Method
- Install "@babel/preset-react" to make JSX wrok in test cases
- Include "@babel/preset-react" inside Babel config
- npm i -D "@testing-library/jest-dom"