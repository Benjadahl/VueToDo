Vue.component("jsonexplorer", {
  props:['object'],

  data: function () {
    return {
      selected: Object.keys(this.object)[0]
    };
  },

  template:"<select v-model='selected'><option v-for='(value, key) in object'>{{ key }}</option></select>",

  created: function () {
    this.$emit("new-item-selected", this.selected);
  },

  watch: {
    selected: function () {
      this.$emit("new-item-selected", this.selected);
    }
  }
});

Vue.component("todotask" ,{
  props:["task"],
  data: function () {
    return {
      shown: true
    }
  },
  template:"<div v-if='shown'><input v-on:change='test' type='checkbox'/>{{ task }}<br /></div>",
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
    category: "urgent",
    tasks: {
      urgent:[
        "Create a nice Vue app",
        "Sleep"
      ],
      nonImportant:[
        "Do the dishes"
      ]
    }
  },
  methods: {
    addNewTask: function () {
      this.tasks[this.category].push(this.input);
      this.input = "";
    },
    updateCategory: function (test) {
      this.category = test;
    }
  }
});
