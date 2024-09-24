import { createApp } from "vue";
import "./style.css";
import "./index.css";
import App from "./App.vue";
import router from "./config/routes";

const app = createApp(App);

app.use(router);
app.mount("#app");
