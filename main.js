//The json explorere object from the earlier project
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

//The element that creates a task in the to do list
Vue.component("todotask" ,{
  props:["task"],
  data: function () {
    return {
      shown: true
    }
  },
  template:"<div v-if='shown'><input v-on:change='checked' type='checkbox'/>{{ task }}<br /></div>",
  methods: {
    checked: function () {
      //Added variable to fix block scoping of this keyword
      let self = this;
      setTimeout( function () {
        self.shown = false;
      }, 100);
    }
  }
});

//The main Vue instance
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
      ],
      school:[
        "Do homework",
        "Do assignments",
        "Pack your bag"
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
