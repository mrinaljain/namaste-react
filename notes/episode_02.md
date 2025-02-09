# Ignite the App

 - What is NPM ?


 #### package.json

 package json is a configuration manager for NPM.

 - There are 2 types of dependencies which we can install 
   - Development dependency
    ```
      npm install -D pachage_name
   ```
   - Normal/ Prod Dependency
      ```
      npm install pachage_name
   ```

#### Bundler 
Super power which will change make the app / code production ready. Bundler is an orchastrator which manages everything

##### Diffrence between tilde ~ and caret ^
  -  ^ auto PATCH/MINOR update 
  ```
  Examples:
    ^1.2.3 matches >= 1.2.3 <2.0.0.
    ^0.2.3 matches >= 0.2.3 <0.3.0.
    ^0.0.3 matches >= 0.0.3 <0.0.4.
  ```



  -  ~  auto PATCH update only 
  ```
  Examples:
    ~1.2.3 matches >=1.2.3 <1.3.0.
    ~0.2.3 matches >=0.2.3 <0.3.0.
  ```

 ![Package details](https://media.geeksforgeeks.org/wp-content/uploads/semver.png)

### [Parcel](www.parceljs.org)

  - creates local server
  - implements hot reload [Hot module replecement]
  - creates build for running
  - Parcel uses a file watching algorithm to ttrack changes
  - Parcel also caches code to give fast build times
  - Image optimization for us.
  - minification
  - Tree shaking
  - Diffrential bundling (diffrent bundle for diff browsers)
  - gives https server


#### Browserslist  compatibility
==========================

- What is the diffrence between package.json and package-lock.json ?

 - What are transtive dependencies?
   when one npm package is dependent on another NPM package. 

- do we need to put package-lock and package json on github ?
  YES both


- What makes React app faster?
  Talk about bundler and its tasks.

## TODO

read more on parcel website.
