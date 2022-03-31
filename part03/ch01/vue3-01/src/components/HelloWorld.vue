<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-img
          style="width: 250px"
          center
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="Center image"
        ></b-img>
      </b-row>
      <b-row>
        <b-col>
          <b-card>
            <b-form-input
              v-model="userName"
              @keyup.enter="searchUser"
              placeholder="Search User"
            ></b-form-input>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h4>Users</h4>
          <div v-if="userSearchResultCheck">
            <ul style="list-style: none">
              <li v-for="(user, index) in userSearchResult" :key="index">
                <b-list-group-item>
                  <b-avatar
                    button
                    @click="userClick(user)"
                    :src="`${user.avatar_url}`"
                  ></b-avatar>
                  {{ user.login }}
                </b-list-group-item>
              </li>
            </ul>
            <div class="overflow-auto">
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
              ></b-pagination>

              <!-- <p class="mt-3">Current Page: {{ currentPage }}</p> -->
            </div>
          </div>
        </b-col>
        <b-col>
          <h4>User Info</h4>
          <div v-if="userInfo">
            <b-card
              :title="`${userInfo.login}`"
              :img-src="`${userInfo.avatar_url}`"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                {{ userInfo.name }}
                <br />
                {{ userInfo.bio }}
                <br />
                Count Repo: {{ userInfo.public_repos }}
                <br />
                <a :href="`${userInfo.html_url}`">Go Github</a>
                <br />
                <a :href="`${userInfo.blog}`">Go Blog</a>
              </b-card-text>

              <b-button @click="addFavorituser(userInfo)" variant="primary"
                >Add Favorite</b-button
              >
            </b-card>
          </div>
        </b-col>
        <b-col>
          <h4>My Favorite</h4>
          <ul style="list-style: none">
            <li v-for="(user, index) in favoriteUsers" :key="index">
              <!-- {{ index }} , {{ fu.login }}, {{ fu.name }} -->
              <b-list-group-item>
                <b-avatar button :src="`${user.avatar_url}`"> </b-avatar>
                <a :href="`${user.html_url}`"> {{ user.login }} </a>
                <b-button @click="removeFavoritUser(user)" variant="danger">
                  Delete
                </b-button>
              </b-list-group-item>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import axios from "axios";
// import { watch } from "fs";

const userName = ref("");
const allUserSearchResult = ref([]);
// const allUserSearchResult = ref({});
const userSearchResult = ref([]);
const userSearchResultCheck = ref(false);
const tempdata = ref("");
const userInfo = ref("");
const favoriteUsers = ref([]);
const perPage = ref(8);
const currentPage = ref(1);

// const axios = inject("VueAxios"); // inject axios

const searchUser = () => {
  axios
    .get("https://api.github.com/search/users?q=" + userName.value)
    .then((response) => {
      console.log(response.data.items);
      console.log(typeof response.data.items);
      allUserSearchResult.value = response.data.items;
      userSearchResult.value = allUserSearchResult.value.slice(0, 8);
      userSearchResultCheck.value = true;
    });
};
const userClick = (user) => {
  axios.get("https://api.github.com/users/" + user.login).then((response) => {
    userInfo.value = response.data;
  });
};
const removeFavoritUser = (user) => {
  console.log("delete:" + user);
  favoriteUsers.value = favoriteUsers.value.filter((t) => t !== user);
};
const addFavorituser = (user) => {
  favoriteUsers.value.push({
    login: user.login,
    name: user.name,
    avatar_url: user.avatar_url,
    html_url: user.html_url,
  });
};
const linkGen = (pageNum) => {
  return pageNum === 1 ? "?" : `?page=${pageNum}`;
};
const rows = computed(() => {
  return allUserSearchResult.value.length;
});
watch(currentPage, (newCurrentPage) => {
  userSearchResult.value = allUserSearchResult.value.slice(
    (newCurrentPage - 1) * perPage.value,
    (newCurrentPage - 1) * perPage.value + perPage.value + 0 * currentPage.value
  );
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
