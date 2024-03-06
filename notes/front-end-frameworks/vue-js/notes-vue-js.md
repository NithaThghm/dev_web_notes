---
title: Vue JS
---

# Vue Js



## Introduction

Vue est un framework javascript permettant de coder rapidement des interfaces utilisateurs.
Il se focalise sur le Model de vue du pattern MVVM.
Sa logique se base sur la déclaration de composants à utiliser dans l'application.

Il y a deux notions clés dans la logique du framework Vue :
- Rendu déclaratif : la construction sous forme de HTML via les templates.
- Réactivité : Tracker de manière efficiente les changements dans le DOM.

Vue est 'client side rendered' soit exécuté du côté du client, ce qui est logique car Vue est un framework JavaScript et le JavaScript est éxécuté côté client.

Vue est flexible, adaptable et évolutif. Il peut être utiliser dans différents besoin simple comme complexe, d'où son slogan "The progressive framework", il promet de nous satisfaire dans nos différents cas d'usage.

Vue implémente une logique de single file components 
- single page application
- re-rendering html

### Installation

- CDN => /!\ On ne peut bénéficier de la syntaxe Single-File Component si on utilise un CDN car Vue ne sera pas builder. 
- package npm

Créer un projet

- npm create vue@latest : créer un projet vue avec vite
- ES Module build ?

## Concepts

### :book: <ins>Source</ins> :

Rien de mieux que de lire la [doc des versions v.0.x et v.1.x](https://012.vuejs.org/guide/index.html) _(écrit par Evan You lui même en anglais .. et en chinois)_ !

### :old_key: <ins>Key points</ins>

- Vue.js se focalise sur le **'ViewModel'** de l'architecture [MVVM](https://www.ramotion.com/blog/what-is-mvvm/).
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

Pour en prendre main Vue JS et comprendre les mécaniques de base du framework, il est nécessaire de comprendre ces premières notions.

🗂️ Projets Repo :
- Github : https://github.com/NithaThghm/learning_vuejs.git


### Syntaxe de template

<img src="/assets/vue/declarative-bind.svg" alt="declarative bind scheme" />


Vue instancie tous les composants écrit sous la syntaxe HTML, soit les transforme en objet.

### Composant monofichier (Single-File Component)

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

### Style d'API

- option api : `<script>`
Coding style utilisé dans la version 1 et 2 de Vue.

- composition api : `<script setup>` Vue comprendra qu'on utilise la logique composition API.
Coding style plus concis qui améliore et simplifie l'usage de Vue depuis Vue 3. Le style composition API est nettement plus agréable a utiliser et écrire que l'option Api. Néanmoins, on se doit d'avoir une compréhesnion du style options API si jamais on le rencontre.
  
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

## Expert Vue JS

<!-- Badge -->
<div class="badge-ctn">
   <img alt="Static Badge" src="https://img.shields.io/badge/Expert-4fc08d?logo=vuedotjs&labelColor=gray" />
</div>

https://fr.vuejs.org/guide/extras/ways-of-using-vue.html
https://fr.vuejs.org/guide/scaling-up/sfc.html

## Terminologie

Single-File Component (SFC Vue)

    