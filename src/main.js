import { createApp } from "vue";
import App from "./App.vue";
import Routes from "./router/index.js";
import { ElCollapse, ElCollapseItem } from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

// app.use(ElementPlus)
app.component(ElCollapse.name, ElCollapse);
app.component(ElCollapseItem.name, ElCollapseItem);
app.use(Routes).mount("#app");
