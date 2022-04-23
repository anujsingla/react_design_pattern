import React from "react";
import "./App.css";
import { Count } from "./components/Count";
import { Theme } from "./components/Theme";
import { UserDetails } from "./components/UserDetails";
import { CountNThemeProvider } from "./context/countNThemeContext";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountNThemeProvider>
          <UserProvider>
            <Count />
            <Theme />
            <UserDetails />
          </UserProvider>
        </CountNThemeProvider>
      </header>
    </div>
  );
}

export default App;

/*

Design Pattern

Design pattern helps us to improve the flexibility and abstractions of 
the components. It provide us the ability to make code more reusable.
we are using these pattern when we are designing component for our app
or making library and writing code for our app.
It will helps to build abstractions.
Design pattern are also described as micro architecture, as they can be used
over and over on many different scales in the same applications.


We will see multiple design patterns:

1. Context Module Pattern | Provider Pattern
2. Compound Components
3. Render props
4. Controlled components
5. State Reducer
6. Higher order components

Context Module Pattern | Provider Pattern

Context in React is used to share data between component tree such as
authenticated user, preferred theme or many more without passing that data
as props. It solves prop drilling problem. The provider pattern allows us
to store data in a central location e.g. react context object.
It pass data to any component that needs it directly without drilling props.
Suppose we need to pass preferred theme in different component.
we can use this pattern for this.

In this i will not cover basic because I have covered in another video.

const context = React.createContext(defaultValue);
 - Create context object that is used to pass down the value to a component
 tree without using props.

<MyContext.Provider value={objectvalue}>
- All the component that are descendants of provided will re-render whenever
the value prop changes. It subscribe to the context changes.

const value = useContext(context);
- It is hook which accept a context object and returns the current context 
value.

Task: make user details form with usecontext and reducer

Reference: 
https://reactjs.org/docs/context.html
https://reactjs.org/docs/hooks-reference.html#usecontext

*/
