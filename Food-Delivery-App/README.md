## Virtual DOM in React
It is the copy of the Browser DOM/UI which is kept in the memory and it is synced to the real DOM by a library known as ReactDOM.

## What is Reconciliation in React ?
Whenever some change occurs (state/props) in a component, React creates a new virtual DOM and compares the previous virtual DOM and compares between the two using the diffing algorithm and then updates only those specific changes made to the real DOM. This makes it faster than updating the real DOM directly as React only needs to update the changes made to the real DOM rather than rendering them all again and again.

## Imports and Exports in React
Two types of Imports and Exports are Named and Default. Named exports can export multiple items at a time whereas Default exports can export single item at a time. 