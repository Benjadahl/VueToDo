Vue.component("todotask" ,{
  props:["task"],
  data: function () {
    return {
      shown: true
    }
  },
  template:"<li v-if='shown'><input v-on:change='test' type='checkbox'/>{{ task }}</li>",
  methods: {
    test: function () {
      this.shown = false;
    }
  }
});

var app = new Vue({
  el: "#vueApp",
  data: {
    input: "Enter description for a task",
    tasks: [
      "Do the dishes",
      "Create a nice Vue app",
      "Sleep"
    ]
  },
  methods: {
    addNewTask: function () {
      this.tasks.push(this.input);
      this.input = "";
    }
  }
});
