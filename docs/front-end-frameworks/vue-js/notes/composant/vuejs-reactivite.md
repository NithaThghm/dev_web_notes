# Réactivité

## Déclarer un état réactif

import { ref } from 'vue'

const count = ref(0)

## Accéder la value d'un ref

const count = ref(0)

console.log(count) // { value: 0 }
console.log(count.value) // 0

count.value++
console.log(count.value) // 1

## DOM Update

Pas totalement syncho.

## ref() vs reactive()

reactive() permet de rendre un objet entier réactif, c'est à dire que Vue detect un changement de chaque propriété de l'objet.
reactive retourne un proxy de l'object original

limitation de reactive

