# Onboarding DX Mobile

## Prerequisites
- Setup React Native environment: [Official Setup](https://reactnative.dev/docs/environment-setup)
  - Follow the official setup using the "React Native CLI Quickstart" configuration stop on "Creating a new application" step.

- Setup development environment
  - Extensions: [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode), [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
- Install [SourceTree](https://www.sourcetreeapp.com/)
- Install [React Native Debugger](https://github.com/jhen0409/react-native-debugger#installation)

## Tools
Tools used:
- Visual Studio Code
- React Native Debugger
- React Native Cli
## Technology Stack
Technologies used:
- React-Native ([Link](https://facebook.github.io/react-native/))
- Typescript ([Link](https://www.typescriptlang.org/index.html))
- Redux ([Link](https://redux.js.org/))
- React-Redux ([Link](https://redux.js.org/basics/usage-with-react))
- Redux-Sagas ([Link](https://redux-saga.js.org/))
- Typesafe-actions ([Link](https://github.com/piotrwitek/typesafe-actions))
- React-Navigation ([Link](https://reactnavigation.org/))
- Jest

For a basic understanding of react native read and/or do the official React Native tutorial. ([Link](https://facebook.github.io/react-native/docs/tutorial))
## Source Control
- Learn about [git basics](https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/)
- Learn about [feature branch](https://martinfowler.com/bliki/FeatureBranch.html)

## Build a Sample App
### Base Setup
- Generate an app skeleton:
```shell
npx react-native init SampleApp --template react-native-template-typescript --npm
```
- Run app on an emulator:
```shell
cd AwesomeProject
npx react-native run-android
//or
npx react-native run-ios
```

You're now ready to start implementing our sample app.
### App navigation and layout
- Read React-Navigation [Documentation](https://reactnavigation.org/docs/en/hello-react-navigation.html) from 'Hello React Navigation' to 'Passing parameters to routes' inclusive.
- Add React-Navigation to your app following the [Official Setup](https://reactnavigation.org/docs/en/getting-started.html#install-into-an-existing-project)
-  In the end your folder structure should look something like this:
```shell
+-- src
|   +-- components
|       +-- LoginPage.tsx
|       +-- HomePage.tsx
|       +-- DetailPage.tsx
|   +-- models
|       +-- Expense.ts
|       +-- ...
|   +-- App.tsx
+-- index.js
+-- app.json
...
```
- Setup navigation using react-navigaton, the navigation tree is supposed to look like this:
```shell
.switch navigation
+-- Login
+-- LoggedIn
    .stack navigation
    +-- Home
    +-- Detail
```

- Implement your react components following the specs.

 Note: Components should be implemented as Function Components and using Typescript. Don't bother with the data management just create some mocked data to be able to see the correct layout.

 ### Data management
 - Do and/or read the redux basic [Tutorial](https://redux.js.org/basics/basic-tutorial)
 - Add redux to your app following the [Official Setup](https://react-redux.js.org/introduction/quick-start)
 - Add typesafe-actions to your app following the [Official Setup](https://github.com/piotrwitek/typesafe-actions)
 - In the end your folder structure should look something like this:
```shell
+-- src
|   +-- components
|       +-- LoginPage.tsx
|       +-- HomePage.tsx
|       +-- DetailPage.tsx
|   +-- models
|       +-- Expense.ts
|       +-- ...
|   +-- store
|       +-- expenses
|           +-- actions.ts //action creators
|           +-- types.ts //action types (constants)
|           +-- reducers.ts
|           +-- models.ts //state model type
|       +-- root.reducer.ts
|   +-- App.tsx
+-- index.js
+-- app.json
...
```
 - Modify your app to consume and change data from the redux store.
 
 Notes: 
 - Use typesafe actions method `action` to create your typed action creators
 - Use redux `combineReducers` to create a root reducer combining feature specifics reducers
 - To interact with the store from react components use redux `connect`

### Fetching data from an API
- Read Redux Sagas [Documentation](https://redux-saga.js.org/docs/introduction/) from 'Introduction' to 'Basic Concepts' inclusive.
- Read about REST API's [Introduction](https://www.geeksforgeeks.org/rest-api-introduction/)
 - In the end your folder structure should look something like this:
```shell
+-- src
|   +-- components
|       +-- LoginPage.tsx
|       +-- HomePage.tsx
|       +-- DetailPage.tsx
|   +-- models
|       +-- Expense.ts
|       +-- ...
|   +-- store
|       +-- expenses
|           +-- actions.ts
|           +-- types.ts
|           +-- reducers.ts
|           +-- models.ts
|           +-- sagas.ts
|       +-- root.reducer.ts
|       +-- root.sagas.ts
|   +-- App.tsx
+-- index.js
+-- app.json
...
```
- Change your app to retrieve data from server using redux sagas to manage async code.

Api documentation at https://dx-bootcamp-api.azurewebsites.net/swagger/index.html
> :warning: **API currently not deployed**: The source code is [here](./BootCampApi)!
- You should create an account via swagger and get that account by Id on login. 
- After that you should use /api/Accounts/{id}/transactions/* operations to get, update and delete transactions.
- TransactionType as two values: 'Expense' and 'Outcome'.
- Id's and createdDate are generated by the server.

Notes:
- Use `fetch` API to execute HTTP requests.

