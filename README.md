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
- Code Splitting
- Diffrential Bundling - support older browsers
- HTTPs
- Tree Shaking - remove unused code
- Different Dev & Prod bundles
- 

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

# Higher Order Component

# Props drilling

# Create Context

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Create cardslice (to add item)
- Dispatch (action)
- Selector