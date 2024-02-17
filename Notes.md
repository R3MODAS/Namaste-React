## Props
Props is just a shortform for properties which we pass to components (Parent to child) which is just an object to share values. Think of it as passing arguments to a function.

Swiggy uses Config driven UI concept to make their website so we have to make sure that UI Layer and Data Layer are in sync.

## Keys in React
Keys are an unique identifier so that React doesn't remove all the items and re-render the whole DOM instead it can just uniquely identify each items and update the necessary item to the specified place without re-rendering the whole DOM and this is a huge performance boost for React.

## Virtual DOM in React
It is the copy of the Browser DOM/UI which is kept in the memory and it is synced to the real DOM by a library known as ReactDOM.

## What is Reconciliation Algorithm in React ?
Whenever some change occurs (state/props) in a component, React creates a new virtual DOM and compares the previous virtual DOM and compares between the two using the diffing algorithm and then updates only those specific changes made to the real DOM. This makes it faster than updating the real DOM directly as React only needs to update the changes made to the real DOM rather than rendering them all again and again.

## Imports and Exports in React
Two types of Imports and Exports are Named and Default. Named exports can export multiple items at a time whereas Default exports can export single item at a time. 

## Hooks
Hooks are normal JS functions given by React which comes with some superpowers.

- Difference between state variables and normal variables is that when state variable value changes, React re-renders the UI but for normal variables, it doesn't re-render the UI and doesn't sync with Data layer as our main purpose should be synchronisation of UI Layer and Data Layer.

- useState(): It is a helper/utility function that helps to maintain the state of the component locally. Eg: const [Restaurant, setRestaurant] = useState([])
Restaurant is a state variable which has a default value -> []
setRestaurant is a function that helps to change the value of the state variable Restaurant as we cannot change the value of state variable directly but using this function we can change its value.

## Monolith Architecture
It is the traditional way of creating projects as all the diff code(Auth, UI, DB, API) are kept in a single place and this project is compiled and deployed and this becomes all big bulky project and this is known as monolith architecture.

## Microservices Architecture
