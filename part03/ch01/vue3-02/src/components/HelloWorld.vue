<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <button @click="clickButt">nameList is</button>
  <ul>
    <li v-for="(name, index) in nameList" :key="index">
      {{ index }}:{{ name }}
    </li>
  </ul>
  <ul>
    <li v-for="(name, index) in nameList2" :key="index">
      {{ index }}:{{ name }}
    </li>
  </ul>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
const count = ref(0);
const nameList = ref([]);
const nameList2 = ref([]);

const clickButt = async () => {
  await axios
    .get("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then((res, err) => {
      console.log(res);
      let dataList = res.data;
      nameList2.value = dataList.map((comment) => comment.name);
      dataList.forEach((element) => {
        // console.log(element.name);
        // nameList.value.filter((element) => element.name);
        nameList.value.push(element.name);
      });
      // nameList.value = res.data.name;
    })
    .catch((err) => console.log(err));
};
</script>
