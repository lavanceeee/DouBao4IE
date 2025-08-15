<template>
  <div class="top-container">
    <div class="title-container">
      <div class="title">GPT4IE_fork</div>

      <div class="title_mark">
        frok of <a href="https://github.com/cocacola-lab/GPT4IE">GPT4IE</a>
      </div>
    </div>

    <div class="project-info">
      It's a 'copy' version of GPT4IE and I carry out the engineering
      transformation of this project.
    </div>
  </div>

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
import { ref } from "vue";

const selectedLanguage = ref("English");
const selectedModel = ref("RE");

const rtl_input = ref("");
const stl_input = ref("");
const otl_input = ref("");
</script>

<style scoped>
.top-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  gap: 10px;
}

.top-container .title-container {
  display: flex;
  align-items: flex-end;
  gap: 20px;
}

.top-container .title {
  font-size: 3rem;
  font-weight: 600;
}

.top-container .project-info {
  width: 25rem;
  font-size: 1.3rem;
  font-family: "Noticia Text";
  margin-top: 20px;
  text-align: center;
}

.selector {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: 5rem;
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