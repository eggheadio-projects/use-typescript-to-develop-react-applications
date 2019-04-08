# Changelog

All notable changes to “Use TypeScript to develop React Applications” will be documented in this file. 

## 1.0.0
- The instructor's github repo had all the lesson code from the beginning of each lesson rather than the end. 
- `webpack-cli` now has to be added as a devDependency. 
- NPM Link does not work in lesson 05. After apparently successfully running npm link and npm link fancy in the requisite repositories ( as show in the lesson ), this error message pops up. Deleting the Fancy call in `use/src/app.tsx` fixes the error message but also destroys the point of the lesson.

- ![image of the error message](errormessage.png)

### Added

- This file.
- .JSON output file 
- A package.json file in order to convert the project to easily download as a yarn workspace. 
- webpack.config.js file for lesson 01. 

### Changed

- Renamed all folder titles on git to accurately reflect the lesson titles. 
- All lesson folder code to be the code shown at the end of each video, rather than at the beginning. 
- Update `@types/react#16.4.2->16.8.8`.
- Update `@types/react-dom#16.0.6->16.8.2`.
- Update `react#16.4.1->16.8.4`.
- Update `react-dom#16.4.1->16.8.4`.
- Update `webpack-cli#3.0.8->3.3.0`.
- Update `typescript#2.9.2->3.3.4`.
- Update `ts-loader#4.4.1->5.3.3`.
- Update `webpack-dev-server#3.1.4->3.2.1`.
- Update `webpack#4.12.1->4.29.6`.
- Update `@types/enzyme#3.1.9->3.9.1`.
- Update `@types/jest#22.2.0->24.0.11`.
- Update `enzyme#3.3.0->3.9.0`.
- Update `enzyme-adapter-react-16#1.1.1->1.11.2`.
- Update `jest#22.4.2->24.5.0`.
- Update `ts-jest#22.4.1->24.0.0`.

### Fixed

- Change `React.SFC` to `React.FunctionComponent` as of recent React versions, function components can no longer be considered 'stateless'. Please use `FunctionComponent` instead.
- Set "target": "es2015" in `tsconfig` to fix `error TS2583: Cannot find name 'Set'. Do you need to change your target library? Try changing the 'lib' compiler option to es2015 or later.`
- changed all the start scripts in each package.json from: 
    ```json
            "scripts": {
                "build": "webpack -p",
                "start": "webpack-dev-server -d --content-base ./public"
    ```
  -  to 
    ```json
            "scripts": {
                "build": "webpack -p",
                "start": "webpack-dev-server -d --content-base ./public" 
    ```
- Sets "moduleResolution": "node" in tsconfig to fix `error TS2307: Cannot find module`

### Removed
-

 