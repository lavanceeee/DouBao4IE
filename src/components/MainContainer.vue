<template>
  <div class="selector">
    <div class="radio-language">
      <input type="radio" id="en" value="English" v-model="selectedLanguage" />
      <label for="en">English</label>

      <input type="radio" id="ch" value="Chinese" v-model="selectedLanguage" />
      <label for="ch">中文</label>
    </div>

    <div class="radio-model">
      <input type="radio" id="RE" value="RE" v-model="selectedModel" />
      <label for="RE">RE</label>

      <input type="radio" id="NER" value="NER" v-model="selectedModel" />
      <label for="RE">NER</label>

      <input type="radio" id="EE" value="EE" v-model="selectedModel" />
      <label for="RE">EE</label>
    </div>
  </div>

  <div class="content-container">
    <input type="text" placeholder="sentence" v-model="sentence" />
    <input
      type="text"
      placeholder="relation type list (rtl)*"
      v-model="rtl_input"
    />
    <input
      type="text"
      placeholder="subject type list (stl)*"
      v-model="stl_input"
    />
    <input
      type="text"
      placeholder="object type list (otl)*"
      v-model="otl_input"
    />
    <input type="text" placeholder="OpenAI key" v-model="userskey" />
  </div>

  <div class="btn-container">
    <button>Generate</button>
    <button>Clear</button>
  </div>
</template>

<script setup>
import {ref} from 'vue';
const selectedLanguage = ref("English");
const selectedModel = ref("RE");

const rtl_input = ref("");
const stl_input = ref("");
const otl_input = ref("");
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