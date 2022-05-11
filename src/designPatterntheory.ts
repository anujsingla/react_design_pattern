/*

React Design pattern

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

Compound components design pattern:

Compound component is an advanced React design pattern which helps to 
communicate between UI components and share state between components.
It helps to build flexible APIs to share state and logic between parent
and child components.
We will use React Context API for this.

In simple word:
Multiple components work together to share state and handle logic together.

How it Work:
1. The Parent component has some state.
2. Using React Context API, we share state between child component.
3. Child component uses share method and state to communicate between component.

Example:
<Tabs onChange={onChangeFun}>
  <TabList>
      <Tab>Tab1</Tab>
      <Tab>Tab2</Tab>
  </TabList>
  <TabPanels>
      <TabPanel>Panel 1</TabPanel>
      <TabPanel>Panel 2</TabPanel>
  </TabPanels>
</Tabs>

Example:
<select>
  <option value="option1">option1</option>
  <option value="option2">option2</option>
</select>

Here select tag works together with option tag. Select tag manage the state
of the UI and share state with option element.

Task: 
Accordion example same like this - https://reach.tech/accordion
Toggle button with show text on/off


Reference:
https://reach.tech/tabs/
https://reactjs.org/docs/context.html
https://github.com/reach/reach-ui/blob/develop/packages/accordion/src/index.tsx
https://getbootstrap.com/docs/5.1/components/accordion/

Render Props:

https://flexiple.com/react/render-props-an-advanced-react-pattern
https://blog.logrocket.com/react-render-props-vs-custom-hooks/
https://medium.com/geekculture/render-props-in-reactjs-d672e3106bc1


React Render Props design pattern:

Render props refers to a technique for sharing code between React components
using a props whose value is a function - React Website.

A render props is a function prop that a component uses to know what to render.
Child component takes render props as a function and call it instead of
implmenting its own render logic means we pass a function from the parent
component to the child component, the child component calls that function
instead of implementing its own logic.

export function ParentComponent() {
  return (
    <div>
      Parent Props
      <ChildComponent renderProps={() => <div>Render Props</div>} />
    </div>
  );
}

export function ChildComponent(props: IProps) {
  return <div>Child component {props.renderProps()}</div>;
}

Input change example.
Mouse position example.


Task:
Write one wrapper component which fetch data as per url prop and
pass to the render prop function component. Parent component will render
in the UI.
{props.renderProp(fetchdata)}


Reference:
https://reactjs.org/docs/render-props.html
https://medium.com/@mjackson/use-a-render-prop-50de598f11ce

*/

export {};
