# Notes for _AppContext_ , _AppProvider_ _useContext_

I understand that the `context.js` file is executed only once. During execution, it creates a functional component called AppProvider, which defines and manages shared state, methods, and instances. It uses the React.createContext() API to set up a AppContext that acts as a store for these shared resources.

The AppProvider wraps the components passed to it, providing access to the shared state and logic via the AppContext. Using the `useContext` hook for (or a custom wrapper like useGlobalContext), any component within the AppProvider's subtree can access and consume the shared state or methods. This makes it possible for components like ComponentA, ComponentB, and others to share state seamlessly.

However, components outside the AppProvider’s subtree (e.g., ComponentD if placed outside the provider) cannot access the context and will throw an error if they try to use useContext to retrieve values from AppContext.

This means the shared state in context.js is not tied to the components themselves, but rather made accessible to components via the AppProvider. It’s analogous to a centralized “store” or “module” (similar to a mod.rs in Rust), which injects shared state and functionality into its consumers.

## AppContext useContext AppProvider Usage Example

```jsx
// context.js
import React, { useContext, useState } from 'react'
const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [variable, setVariable] = useState('shared state')
  const instance = { key: 'value', method: () => 'shared method' }

  return (
    <AppContext.Provider value={{ variable, setVariable, instance }}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
```

```jsx
// App.js
import React from 'react'
import { AppProvider, useGlobalContext } from './context'

const ComponentA = () => {
  const { variable, setVariable } = useGlobalContext()
  return (
    <div>
      <h3>Variable: {variable}</h3>
      <button onClick={() => setVariable('Updated State')}>Update</button>
    </div>
  )
}

const ComponentB = () => {
  const { instance } = useGlobalContext()
  return (
    <div>
      <h3>Instance Key: {instance.key}</h3>
      <h3>Instance Method: {instance.method()}</h3>
    </div>
  )
}

const App = () => {
  return (
    <AppProvider>
      <ComponentA />
      <ComponentB />
    </AppProvider>
  )
}

export default App
```
