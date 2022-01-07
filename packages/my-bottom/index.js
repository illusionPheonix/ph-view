import MyBottom from "./src/index.vue";

MyBottom.install = (Vue) => {
  Vue.component(MyBottom.name, MyBottom);
};

export default MyBottom;
