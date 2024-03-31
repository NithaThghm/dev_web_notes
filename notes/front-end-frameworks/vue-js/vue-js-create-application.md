---
order: 2
---

# Créer une application
<BadgeVueJunior class="badge-ctn" />

## 📘 Read more

<details>
<summary>Documentation officielle</summary>
<a href="https://vuejs.org/guide/essentials/application.html" target="_blank">https://vuejs.org/guide/essentials/application.html</a>
</details>

<details>
<summary>Vue application instance</summary>

**Application Context Object :**

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
**Vue application instance :**

In Vue.js, the createApp function is used to create a Vue application instance. This instance represents your entire Vue application and provides access to various features and functionalities, ***including the application context object**.
- Objectif :
  L'instance d'application Vue représente l'ensemble de votre application Vue et offre une structure pour gérer les composants, les données, l'état et le comportement.
- Fonctionnalités : Elle inclut des fonctionnalités telles que la liaison de données, les hooks de cycle de vie des composants, les propriétés calculées, les méthodes, les observateurs et la gestion des événements.
- Utilisation : Vous créez une instance d'application Vue en utilisant la fonction createApp et la configurez avec des composants, des directives, des plugins et d'autres paramètres.

**Différance avec le DOM :**

In summary, a Vue application instance and a DOM object serve distinct purposes within web development. The Vue instance manages the application's logic and component interactions, while the DOM represents the document structure and enables client-side manipulation and interactivity. They work together harmoniously to create dynamic and responsive web applications
</details>

## ◻️ Créer une application Vue

Pour que Vue fonctionne en arrière plan, il a besoin de savoir à quoi ressemble notre application Vue finale.  Pour ça on instancie notre application via la fonction `createApp()` qui retournera une Vue application instance [^vpi] soit un object Vue, aussi appelé un 'application context object'. [^vue-application-instance]

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


## ◻️ Monter l'application

Une fois notre instance d'application créé, on la donne à la méthode `.mount()` pour obtenir le rendu visuel.
Vue a besoin de savoir où il doit monter notre application, dans quel élément existant.

Le mount doit être exécuter à la toute fin [^mount], après toutes les configurations.

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

## ◻️ Multiple instances d'application

Il est possible d'avoir plusieurs instances d'application vue montées sur différents élément du DOM.

```html
<!-- index.html -->
<div id="app1"></div>
<div id="app2"></div>
```


```js
// main.js
import { createApp } from 'vue'
import App1 from './App1.vue'
import App2 from './App2.vue'

const app1 = createApp(App)
app.mount('#app1')

const app2 = createApp(App)
app.mount('#app2')
```



<!--  Footnotes -->
[^vue-doc]: https://vuejs.org/guide/essentials/application.html
[^vue-application-instance]: 📖 https://vueschool.io/articles/vuejs-tutorials/the-benefits-of-the-vue-3-app-initialization-code/
[^vpi]: 🗝️ Vue application instance
[^mount]: 🗝️ `.mount()` à la toute fin