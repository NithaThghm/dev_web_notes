## Composants

<!-- Badge -->
<div class="badge-ctn">
   <img alt="Static Badge" src="https://img.shields.io/badge/Débutant-blue?logo=vuedotjs&labelColor=gray" />
</div>

> 👓 Keep in mind : [Le système de composant](#système-de-composants)

Chaque fichier `.vue`, qui représente un composant, sera transformer en un ViewModel par Vue.js lors de l'instanciation de l'application.  
Use PascalCase tag names for child components.

### Créer un composant

#### Composant monofichier (Single-File Component ou SFC)

Un peu déroutant au début, mais l'architecture d'un fichier `.vue` se révèle être très 'handy'.
On retrouve notre CSS, HTML et JS dans un seul et même fichier qui décrit un composant de notre application et tout se passe dans le même fichier. Je trouve ça très bien.
L'avantage de la balise `<template>` est que Vue interprétera le JavaScript embarqué sous le HTML. C'est un mélange de HTML/JavaScript qui peut porter à confusion, mais si on le garde à l'esprit on s'en sort.

>[!NOTE]
> La balise `<template>` est obligatoire dans un fichier `.vue`.
> `<style scoped>` : Best practise! Le css n'impacte que les éléments du fichier dans lequel il réside.

``` vue
<script>
// .. JavaScript here
</script>
<template>
<!-- .. HTML / JavaScript here -->
</template>
<style scoped>
/* .. CSS here */
</style>
```
#### Directement en JavaScript
*Pour le moment je ne m'en préoccupe pas, je focus sur le SFC, à voir plus tard.*

### Exporter, Importer & Utiliser un composant

```vue
<script setup>
import ExempleComposant from './ExampleComposant.vue'
</script>

<template>
  <ExempleComposant />
</template>
```
Avec la composition API Vue se charge d'effectuer l'`export default` pour nous, il nous suffit d'importer le composant.
It's also possible to globally register a component, making it available to all components in a given app without having to import it.

<details>
<summary> 📘 Read more : Javascript | Export & Import </summary>
https://javascript.info/import-export
</details>

### Props

Voir chapitre les [Props]()

### In-DOM

On peut écrire des template Vue directement dans la balise native template d'HTML
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template