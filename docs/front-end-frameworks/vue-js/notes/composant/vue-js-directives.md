# Directives



<BadgeVueJunior />

## Directives de base

Liste des directives à connaitre et à maîtriser pour avoir une maîtrise de base de VueJs : 

### v-bind

permet de rendre dynamique un attribut html

```vue
<!-- Si dynamicId est null ou undefined, Vue n'affichera pas l'attr. id -->
<div v-bind:id="dynamicId"></div>

<!-- Shorthand -->
<div :id="dynamicId"></div>

<!-- Same-name Shorthand. ex: :id="id"-->
<div :id></div>
<div v-bind:id></div>
```
> [!WARNING] Atribut booléen
> Si `isButtonDisabled` est un empty string, Vue affichera disabled="", et l'élément sera disabled tout de même.

```html
<button :disabled="isButtonDisabled">Button</button>
```
### v-html

```html
<p>Using text interpolation: {{ rawHtml }}</p>
<!-- Using text interpolation: <span style="color: red">This should be red.</span> -->

<p>Using v-html directive: <span v-html="rawHtml"></span></p>
<!-- Using v-html directive: This should be red. (le texte est écrit en rouge.) --> 
```
### v-model

Principalement utiliser pour gérer les éléments de form : 

https://vuejs.org/guide/essentials/forms.html#v-model-with-components