---
title: Props & Emits
---

# Props & Emits

## Props

> [!INFO]
> Prérequis : avoir lu et compris chapitre sur le système de composant et les composants.

Every component instance has its own isolated scope. This means you cannot (and should not) directly reference parent data in a child component’s template. Data can be passed down to child components using props.

A “prop” is a field on a component’s data that is expected to be passed down from its parent component. A child component needs to explicitly declare the props it expects to receive using the props option:

### Déclarer des props

On utilise la fonction defineProps() pour définir les props que l'on utilisera dans notre composant.
Nous n'avons pas besoin d'importer la fonction defineProps() si nous l'appelons directement dans `<script setup>`


```vue{2}
<script setup>
/* ▶️ Pas nécessaire d'importer la fonction */
import { defineProps } from 'vue' 

const props = defineProps(['imgSrc', 'title', 'number'])
</script>
```

### Utiliser les props

Une fois les props déclarées, on peut les appeler ainsi dans notre template :

```vue{16,18,19}
<script setup>
const props = defineProps(['imgSrc', 'title', 'number'])
</script>

<template>
    <div class="card">
        <img  :src="imgSrc" alt="" /> 
        <div class="card-text">
            <h2>{{ title }}</h2>
            <span>{{ number }} questions</span>
        </div>
    </div>

    <!-- Appeler les propriétés via l'objet déclaré fonctionne aussi -->
    <div class="card">
        <img  :src="props.imgSrc" alt="" />
        <div class="card-text">
            <h2>{{ props.title }}</h2>
            <span>{{ props.number }} questions</span>
        </div>
    </div>
</template>
```

### Passer des props depuis le composant parent

Les props sont passé comme des attributs au composant.  
Note : imgSrc devient img-src

Pour eviter des lignes trop longues de déclarations d'attributs, on préférera passer directement les objets en props.

```vue{4,13,14,15,16,17,18,19}
<script setup>
    import { ref } from 'vue'
    import data from '../data/quizes.json'
    import Card from '../components/quiz/Card.vue' //Import du composant

    const quizes = ref(data)
    const search = ref("test2")
</script>

<template>
    <main>
        <div class="quizes-container">
            <!-- Appelle du composant enfant et on lui passe les props  -->
            <Card
                v-for="quiz in quizes"
                :img-src="quiz.img"
                :title="quiz.name"
                :number="quiz.questions.length"
            />
        </div>
    </main>
</template>
```
### Unwrap props

Petite astuce pour accéder directement les values de props

```vue
<script setup>
    import { ref } from 'vue'
    import data from '../data/quizes.json'
    import Card from '../components/quiz/Card.vue' //Import du composant

    const quizes = ref(data)
    const search = ref("test2")
</script>

<template>
    <Card v-for="quiz in quizes" :quiz="quiz" />
</template>
```

```vue{3}
<!-- Card.vue -->
<script setup>
const { quiz } = defineProps(['quiz'])
</script>

<template>
    <div class="card">
        <img  :src="quiz.imgSrc" alt="" />
        <div class="card-text">
            <h2>{{ quiz.title }}</h2>
            <span>{{ quiz.questions.length }} questions</span>
        </div>
    </div>
</template>
```

## Emits
