<script setup>
import {ref, computed} from 'vue'

const questions = ref([
  {
    question: 'What is vue js?',
    answer: 0,
    options: [
      'A framework for building user interfaces',
      'A framework for building user interfaces',
      'A framework for building user interfaces',
      'A framework for building user interfaces'
    ],
    selected: null
  },
  {
    question: 'What is react js?',
    answer: 1,
    options: [
      'A framework for building user interfaces',
      'A framework for building user interfaces',
      'A framework for building user interfaces',
      'A framework for building user interfaces'
    ],
    selected: 3
  },
  {
    question: 'What is something js?',
    answer: 0,
    options: [
      'A framework for building user interfaces',
      'A framework for building user interfaces',
      'A framework for building user interfaces',
      'A framework for building user interfaces'
    ],
    selected: null
  },
  {
    question: 'What is something js?',
    answer: 2,
    options: [
      'A framework for building user interfaces',
      'A framework for building user interfaces',
      'A framework for building user interfaces',
      'A framework for building user interfaces'
    ],
    selected: null
  },

])
</script>

<template>

</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
body{
  background-color: #271c36;
  color: #fff;
}
</style>
