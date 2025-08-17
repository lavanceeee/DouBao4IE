<template>
  <div class="selector">
    <div class="radio-language">
      <input type="radio" id="en" value="eng" v-model="selectedPattern.selectedLanguage" />
      <label for="en">English</label>

      <input type="radio" id="ch" value="chi" v-model="selectedPattern.selectedLanguage" />
      <label for="ch">Chinese</label>
    </div>

    <div class="radio-model">
      <input type="radio" id="RE" value="RE" v-model="selectedPattern.selectedModel" />
      <label for="RE">RE</label>

      <input type="radio" id="NER" value="NER" v-model="selectedPattern.selectedModel" />
      <label for="RE">NER</label>

      <input type="radio" id="EE" value="EE" v-model="selectedPattern.selectedModel" />
      <label for="RE">EE</label>
    </div>
  </div>

  <div class="content-container">
    <input type="text" placeholder="sentence" v-model="usersInputForm.sentence" />

    <input
      type="text"
      placeholder="relation type list (rtl)*"
      v-model="usersInputForm.rtl"
    />
    <input
      type="text"
      placeholder="subject type list (stl)*"
      v-model="usersInputForm.stl"
    />
    <input
      type="text"
      placeholder="object type list (otl)*"
      v-model="usersInputForm.otl"
    />
    <input type="text" placeholder="OpenAI key" v-model="usersInputForm.usersKey" />
  </div>

  <div class="btn-container">
    <button @click="submmitInput">Generate</button>
    <button>Clear</button>
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue';
import { getUsersForm } from '../composables/useData';

const selectedPattern = reactive({
    selectedLanguage: "eng",
    selectedModel: "RE"
})

const usersInputForm = reactive({
    sentence: "",
    rtl: "",
    stl: "",
    otl: "",
    usersKey: ""
})

const submmitInput = () => {
    if (!usersInputForm.sentence) {
        alert("Please input the sentence firstly!");
        return;
    }

    //submmit users input
    getUsersForm(selectedPattern, usersInputForm);






}




</script>

<style scoped>
.selector {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: 1rem;
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  margin-top: 2rem;
}

.content-container input {
  width: 35rem;
  height: 3rem;
  border-radius: 3px;
  border: 1px solid black;
  padding: 0 10px;
}

.btn-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.btn-container button {
  width: 10rem;
  height: 3rem;
  background-color: rgb(0, 0, 0);
  border: 1px solid black;
  border-radius: 5px;
  transition: all 0.3s ease;
  color: white;
}

.btn-container button:hover {
  background-color: rgb(55, 55, 55);
  cursor: pointer;
}
</style>