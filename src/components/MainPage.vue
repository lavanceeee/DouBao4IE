<template>
  <div class="top-container">
    <div class="title-container">
      <div class="title">GPT4IE_fork</div>

      <div class="title_mark">
        frok of <a href="https://github.com/cocacola-lab/GPT4IE">GPT4IE</a>
      </div>
    </div>

    <div class="project-info">
      It's a rebuilt version of GPT4IE and I carry out the engineering
      transformation of this project.
    </div>

    <div style="margin-top: 5px;">
      <a href="https://github.com/lavanceeee/GPT4IE-SelfImpl">this project's repository is here.</a>
    </div>

    <table>
      <tr>
        <td>RE</td>
        <td>entity-relation joint extraction</td>
      </tr>

      <tr>
        <td>NER</td>
        <td>named entity recoginzation</td>
      </tr>

      <tr>
        <td>EE</td>
        <td>event extraction</td>
      </tr>
    </table>
  </div>

  <MainContainer/>

</template>

<script setup>
import { ref } from "vue";
import MainContainer from "./MainContainer.vue";
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
  width: 35rem;
  font-size: 1.3rem;
  font-family: "Noticia Text";
  margin-top: 20px;
  text-align: center;
}

  table {
    width: 35rem;
    border-collapse: collapse;
    margin-top: 20px;
    font-family: Arial, sans-serif;
    border-top: 2px solid #6969699a;
    border-bottom: 2px solid #6969699a;
  }
  td {
    padding: 20px 50px; 
    text-align: center;
    border-top: 1px solid #6666668c;
    border-bottom: 1px solid #6666668c;
  }
</style>