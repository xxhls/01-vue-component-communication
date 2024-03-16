import { createApp } from "vue";
import App from "./App.vue";

import VuexStore from "./04-VueX/vuex";
import { createPinia } from "pinia";

const app = createApp(App);

app.use(VuexStore);
app.use(createPinia());

app.mount("#app");
