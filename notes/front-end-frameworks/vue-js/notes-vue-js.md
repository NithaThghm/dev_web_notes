# Vue Js

## Introduction

### 🗺️ Roadmap

*On peut suivre l'avancée de l'acquisition des différentes compétences via la roadmap proposée par [roadmap.sh](https://roadmap.sh/vue)*

### 📁 Projets

*Petits exercices pour prendre en main Vue.js et comprendre les mécaniques de base.*

- Repo : https://github.com/NithaThghm/learning_vuejs.git

### Vue JS

> Article de blog d'Evan You présentant Vue.js : [read me](https://blog.evanyou.me/2015/10/25/vuejs-re-introduction/)

A la base, Vue.js était une simple librairie javascript. En combinant Vue.js à d'autres librairies (ex : router, webpack, vite, ...), Vue.js devient un framework front-end. La version 3 de Vue.js est considérée comme un framework.

Vue.js permet de concevoir, rapidement et simplement, des interfaces web interactive.  
Il se focalise sur le ViewModel du pattern MVVM [^mvvm]. (concept de data driven view)
Sa logique se base sur la déclaration de composants à utiliser dans l'application.

Le but de Vue.js est d'exploiter les avantages des données réactives par liaison et le système de composants.

Il y a deux notions clés dans la logique du framework Vue :
- Rendu déclaratif : la construction sous forme de HTML via les templates.
- Réactivité : Tracker de manière efficiente les changements dans le DOM.

Vue est 'client side rendered' soit exécuté du côté du client, ce qui est logique car Vue est un framework JavaScript et le JavaScript est éxécuté côté client.

Vue est flexible, adaptable et évolutif. Il peut être utiliser dans différents besoin simple comme complexe, d'où son slogan "The progressive framework", il promet de nous satisfaire dans nos différents cas d'usage.

Vue implémente une logique de single file components 
- single page application
- re-rendering html

### 💡 Concepts


>[!INFO]
> Vue manages a virtual DOM representation internally to optimize rendering and minimize actual DOM manipulations, improving performance and user experience.

Les deux concepts clés de l'essence même de Vue.js :

#### Réactivité

> Tracker la data et synchroniser le DOM le plus simplement possible.

<img src="/assets/vue/vuejs-mvvm-scheme.svg" style="margin: auto"/>

Pour mettre à jour un élèment du DOM avec JavaScript Vanilla et/ou Jquery, on s'aperçoit que la tâche est plutôt fastidieuce car nécessites quelques ligne de code.
Vue.js nous facilite la tâche en créant des liens direct entre la vue et la data (reactive data binding).

#### Système de composants

> The component system is the foundation for building large apps with Vue.js. [^doc-vue-v1-component]
 

<img src="/assets/vue/vuejs-component-system.svg" />

Un concept majeur de l'essence même de Vue.js : le système de composants.  
Cette logique va nous permettre de segmentiser notre application en de petits composants isolés qu'on imbriquera dans d'autres composants qui seront appeller dans le 'Root Component'.  
Ainsi il sera beaucoup plus facile de concevoir des applications plus large et de maintenir ses applications.

### Installation

- CDN => /!\ On ne peut bénéficier de la syntaxe Single-File Component si on utilise un CDN car Vue ne sera pas builder. 
- package npm

Créer un projet

- npm create vue@latest : créer un projet vue avec vite
- ES Module build ?


### :book: <ins>Source</ins> :

- https://blog.evanyou.me/2015/10/25/vuejs-re-introduction/
- Rien de mieux que de lire la [doc de la v.1.x](https://v1.vuejs.org/guide/) _(écrit par Evan You lui même en anglais .. et en chinois)_ !
- https://www.w3.org/wiki/WebComponents/
- https://www.w3.org/TR/components-intro/

### :old_key: <ins>Key points</ins>

- Vue.js se focalise sur le **'ViewModel'** de l'architecture MVVM.
- Vue.js connecte la **'View'** et le **'Model'** avec une synchronisation de la data dans les deux sens (two data binding) grâce aux Directives et aux Filtres.
- Chaque fichier `*.vue` est un **'ViewModel'**.
- Un **'ViewModel'** est un objet dont le rôle est d'assurer la sychronisation entre la **'View'** et le **'Model'** (binding).
- Un **'ViewModel'** est instancié grâce au constructor `new Vue()`
- Chaque **'ViewModel'** est forcément associé à un élément du [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).
- L'instance vue de l'élèment du DOM réagit immédiatement à chaque changement de la data côté client (data binding).
  
## Compréhension de base

<!-- Badge -->
<div class="badge-ctn">
   <img alt="Static Badge" src="https://img.shields.io/badge/Débutant-blue?logo=vuedotjs&labelColor=gray" />
</div>

### 1. Créer une application Vue

<details>
<summary>📘 Read More : Vue application instance</summary>

#### Application Context Object :

Imagine you're building a house, and you have different rooms like a bedroom, a kitchen, a living room, and a bathroom.  Each room serves a specific purpose, and they all come together to form your entire house.  Now, let's translate this into web development:
- House = Web Application
- Rooms = Components or Modules
- Application Context Object = Blueprint or Map:
    Now, think of the application context object as a blueprint or a map of your entire house (web application). It's like having a document that describes where each room is, what it contains, and how everything is interconnected.
- Purpose of the Application Context Object:
    - Centralized Information: The application context object holds important information about your application, such as configuration settings, database connections, and other global data.
    - Access to Resources: It provides a way for different parts of your application to access shared resources or services without having to pass them around manually.
    - Lifecycle Management: It can manage the lifecycle of your application, including initialization, startup, and shutdown processes.
- Benefits of Using an Application Context Object:
    - Simplifies Development: It makes it easier to organize and manage your application's resources.
    - Promotes Reusability: Components can access shared resources through the context object, promoting code reuse and modularity.
    - Enhances Scalability: As your application grows, the context object helps maintain a structured architecture that can scale with your needs.
    - 
#### Vue application instance :
In Vue.js, the createApp function is used to create a Vue application instance. This instance represents your entire Vue application and provides access to various features and functionalities, ***including the application context object**.
- Objectif :
  L'instance d'application Vue représente l'ensemble de votre application Vue et offre une structure pour gérer les composants, les données, l'état et le comportement.
- Fonctionnalités : Elle inclut des fonctionnalités telles que la liaison de données, les hooks de cycle de vie des composants, les propriétés calculées, les méthodes, les observateurs et la gestion des événements.
- Utilisation : Vous créez une instance d'application Vue en utilisant la fonction createApp et la configurez avec des composants, des directives, des plugins et d'autres paramètres.

#### Différance avec le DOM :

In summary, a Vue application instance and a DOM object serve distinct purposes within web development. The Vue instance manages the application's logic and component interactions, while the DOM represents the document structure and enables client-side manipulation and interactivity. They work together harmoniously to create dynamic and responsive web applications
</details>

Pour que Vue fonctionne en arrière plan, il a besoin de savoir à quoi ressemble notre application Vue finale.  Pour ça on instancie notre application via la fonction `createApp()` qui retournera une ==Vue application instance== [^key-points] soit un object Vue, aussi appelé un 'application context object'. [^vue-application-instance]

```js
import { createApp } from 'vue'

// Deux façons de faire :
// - Manuel : on saisit les informations du composant manuellement.
const app = createApp({
  /* root component options */
})
// - Avec la logique 'Single File Component'
import App from './App.vue' // 1. on importe le 'Root Component'
const app = createApp(App) // 2. on passe notre composant racine pour instancier notre application vue.

/* Dans Vue 2 */
const app = new Vue({
    /* options */
})
```

On passe à la fonction `createApp()` ni plus ni moins qu'un ViewModel soit un composant `.vue`.


### 2. Monter l'application

Une fois notre instance d'application créé, on la donne à la méthode `.mount()` pour obtenir le rendu visuel.
Vue a besoin de savoir où il doit monter notre application, dans quel élément existant.

==Le mount doit être exécuter à la toute fin== [^key-points], après toutes les configurations.

```html
<!-- index.html -->
<div id="app"></div>
```

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
```

### Style d'API

- option api : `<script>`
Coding style utilisé dans la version 1 et 2 de Vue.

- composition api : `<script setup>` Vue comprendra qu'on utilise la logique composition API.
Coding style plus concis qui améliore et simplifie l'usage de Vue depuis Vue 3. Le style composition API est nettement plus agréable a utiliser et écrire que l'option Api. Néanmoins, on se doit d'avoir une compréhesnion du style options API si jamais on le rencontre.



### Instance de Vue

Avec la version 3 de Vue.js, l'instanciation du ViewModel se fait 'under the hood', nous n'avons plus à l'écrire à la main. Mais il bien de comprendre ce qu'il se passe.

  
### Les fondamentaux de la réactivité

#### Usage simple

- import { ref } from "vue" : vue ne rafraichit que les état, pour éviter de supprimer et de re-render le html

`ref` est un attribut spécial fournit par Vue.js, il y a en a d'autre comme `key` par exemple.
Il permet de déclarer des variables accessible uniquement au template monté.

Pour avoir l'objet DOM d'un élément, nous devons faire référence au `ref` dans la méthode `onMounted` sinon nous n'aurons pas accès aux data.
Ceci est dût au fait que Vue a d'abord besoin de générer les templates puis de générer les `ref`, les étapes sont asynchrones et Vue semble gérer cette asynchronicité dans sa méthode `onMounted`.

Déclarer et utiliser un `ref` sous le style api composition :

``` vue
<script setup>
    import { ref, onMounted } from 'vue'
    const refTest = ref('Msg stocké dans ma ref')
    const input = ref(null)
    onMounted(() => {
        input.value.focus()
        console.log(input.value.id) //Affichera : "test"
    })
    console.log(input.value.id) // Affichera : "Uncaught (in promise) TypeError: can't access property "id", input.value is null"
</script>
<template>
    <p>{{ refTest }}</p>  <!-- Affichera : 'Msg stocké dans ma ref' -->
    <input ref="input" id="test" value="0" />
</template>
```


#### Usage plus poussé

Nous pouvons faire appeler des fonctions en `ref`

``` vue
<input :ref=()=>{} />
```
Sources :
- https://fr.vuejs.org/guide/essentials/template-refs.html
- https://fr.vuejs.org/api/built-in-special-attributes.html#ref
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules


### Directives

Prefixed HTML attributes that tell Vue.js to do something about a DOM element.

Les directives sont des attributs spéciaux fournis par Vue et effectue une action ciblé sur l'élément du DOM concerné.

>[!TIP]
>Toutes les directives Vue sont préfixés par 'v-'

Directives :

v-html
v-bind
v-on="click" : shorthand => @click

### Ecoute d'évènement

## Compréhension avancée

<!-- Badge -->
<div class="badge-ctn">
   <img alt="Static Badge" src="https://img.shields.io/badge/Avancée-red?logo=vuedotjs&labelColor=gray" />
</div>

### Configurer l'application

## Expert Vue JS

<!-- Badge -->
<div class="badge-ctn">
   <img alt="Static Badge" src="https://img.shields.io/badge/Expert-4fc08d?logo=vuedotjs&labelColor=gray" />
</div>

https://fr.vuejs.org/guide/extras/ways-of-using-vue.html  
https://fr.vuejs.org/guide/scaling-up/sfc.html  

### Vue CLI

*L'outil Vue CLI pour être prise en main après l'acquisition d'une bonne connaissance de Vue*

## Terminologie

Single-File Component (SFC Vue)

[^mvvm]: Comprendre le MVVM : https://www.ramotion.com/blog/what-is-mvvm/
[^doc-vue-v1-component]: Documentation de la version 1, chapitre composant : https://v1.vuejs.org/guide/overview.html#Component-System
[^vue-application-instance]: Comprendre une instance d'application vue : https://vueschool.io/articles/vuejs-tutorials/the-benefits-of-the-vue-3-app-initialization-code/
[^key-points]: ### 🗝️ Key Points