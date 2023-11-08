<script setup>
import { ref, computed } from 'vue'

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
  }
])

const quizCompleted = ref(false)

const currQuestion = ref(0)
const score = computed(() => {
  let value = 0
  questions.value.map(q => {
    if (q.selected == q.answer) {
      value++
    }
  })
  return value
})

const getCurrQuestion = computed(() => {
  let question = questions.value[currQuestion.value]
  question.index = currQuestion.value
  return question
})

const setAnswer = e => {
  questions.value[currQuestion.value].selected = evt.target.value
  evt.target.value = null
}

const nextQuestion = () => {
  if (currQuestion.value < questions.value.length - 1) {
    currQuestion.value++
  } else {
    quizCompleted.value = true
  }
}
</script>
  
<template>
  <main class="app">
    <h1>The Quiz</h1>

    <section class="quiz" v-if="!quizCompleted">
      <div class="quiz-info">
        <span class="question">{{ getCurrQuestion.question }}</span>
        <span class="score">score {{ score }}/{{ questions.length }}</span>
      </div>

      <div class="options">
        <label v-for="(option, index) in getCurrQuestion.options" :key="index" :class="`option ${getCurrQuestion.selected == index
          ? index == getCurrQuestion.answer
            ? 'correct'
            : 'wrong'
          : ''

          } ${getCurrQuestion.selected != null &&
            index != getCurrQuestion.selected
            ? 'disabled'
            : ''
          }`">
          <input type="radio" :name="getCurrQuestion.index" :value="index" v-model="getCurrQuestion.selected"
            :disabled="getCurrQuestion.selected" @change="setAnswer">
          <span>{{ option }}</span>
        </label>
      </div>

      <button @click="nextQuestion" :disabled="!getCurrQuestion.selected">
        {{ getCurrQuestion.index == questions.length - 1
          ? 'finish'
          : getCurrQuestion.selected == null
            ? 'select an option'
            : 'next Question' }}
      </button>
    </section>
    
    <section v-else>
      <h2>you have finished the quiz</h2>
      <p>your score is {{ score }}  {{ questions.length }}</p>
    </section>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  background-color: #271c36;
  color: #fff;
}
</style>
