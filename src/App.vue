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
      'A framework for building user interfaces',
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
      'A framework for building user interfaces',
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
      'A framework for building user interfaces',
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
      'A framework for building user interfaces',
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
      <p>your score is {{ score }} / {{ questions.length }}</p>
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

.app{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
}

h1{
  font-size: 2rem;
  margin-bottom: 2rem;
}

.quiz{
  background-color: #382a4b;
  padding: 1rem;
  width: 100%;
  max-width: 640px;
  border-radius: 0.5rem;
}

.quiz-info{
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.quiz-info .question{
  color: #8f8f8f;
  font-size: 1.5rem;
}

.quiz-info .score{
  color: #fff;
  font-size: 1.25rem;
}

.options {
  margin-bottom: 1rem;
}

.option {
  padding: 1rem;
  display: block;
  background-color: #271c36;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.option:hover{
  background-color: #2d213f;
}

.option.correct{
  background-color: #2cce7d;
}

.option.wrong {
  background-color: #ff5a5f;
}

.option:last-of-type{
  margin-bottom: 0;
}

.option.disabled {
  opacity: 0.5;
}

.option input {
  display: none;
}

button {
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;

  padding: 0.5rem 1rem;
  background-color: #2cce7d;
  color: #2d213f;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.25rem;
  border-radius: 0.5rem;
}

button:disabled{
  opacity: 0.5;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

p {
   color: #8f8f8f;
   font-size: 1.25rem;
   text-align: center;
}
</style>
