import MyLine from "./src/index.vue";

MyLine.install = (Vue) => {
  Vue.component(MyLine.name, MyLine);
};

export default MyLine;
