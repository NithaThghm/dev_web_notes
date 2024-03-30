## Props

> [!INFO]
> Prérequis : avoir lu et compris chapitre sur le système de composant et les composants.

Every component instance has its own isolated scope. This means you cannot (and should not) directly reference parent data in a child component’s template. Data can be passed down to child components using props.

A “prop” is a field on a component’s data that is expected to be passed down from its parent component. A child component needs to explicitly declare the props it expects to receive using the props option:

### Déclarer des props