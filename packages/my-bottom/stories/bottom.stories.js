import MyBottom from "../";

export default {
  title: "MyBottom",
  component: MyBottom,
};

export const teech = () => ({
  components: { MyBottom },
  template: "<my-bottom type='1' @click='done'>{{name}}</my-bottom>",
  data() {
    return {
      name: "我这里是一条线",
    };
  },
  methods: {
    done() {
      console.log(1);
    },
  },
});

export const mouth = () => ({
  components: { MyBottom },
  template: "<my-bottom class='success' @click='done'>{{name}}</my-bottom>",
  data() {
    return {
      name: "我这里是一个成功实例",
    };
  },
  methods: {
    done() {
      console.log(1);
    },
  },
});
