import MyLine from "../";

export default {
  title: "MyLine",
  component: MyLine,
};

export const teech = () => ({
  components: { MyLine },
  template: "<my-line type='1' @click='done'>{{name}}</my-line>",
  data() {
    return {
      name: "我这里是二条线",
    };
  },
  methods: {
    done() {
      console.log(1);
    },
  },
});

export const mouth = () => ({
  components: { MyLine },
  template: "<my-line class='success' @click='done'>{{name}}</my-line>",
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
