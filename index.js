
//const Question = {
//  template: '<div>Question {{ $route.params.question }}</div>'
//}
/*
const router = new VueRouter({
  base: '/RelationshipAdvisor/',
  //mode: 'history',
  routes: [
    // dynamic segments start with a colon
    { path: '/:question' }
  ]
})
/**/

/*
- most conditions on time elapsed
- facts: there are dirty dishes, the bed is not made
- replace space with underscore while typing
- https://stackoverflow.com/questions/43700573/internationalization-in-vue-js
- https://github.com/leonardomso/33-js-concepts
/**/

// this is the Vue.js app
const rightNow = new Vue({
    el: '#app',
    //router,
    watch:{
      '$route.params.question': function(newVal){
      }
    },
    //-------------------------------------------------------------------------
    // data
    //-------------------------------------------------------------------------
    data: {
      debug: false,
      path: window.location.pathname,
      tasks: {
        sleeping: false,
        doingRehabilitationExercises: false,
        eating: false,
        working: false,
        cleaning: false,
        workingOut: false,
        programming: false,
        doingCalisthenicsExercises: false,
        hiking: false,
        climbing: false,
        dancing: false
      },
      task: "resting",
      theInstructions:
`
if(rightNow.iHaveFinished("sleeping")) {
  if(rightNow.iHaveFinished("doingRehabilitationExercises")) {
    if(rightNow.iHaveFinished("eating")) {
      if(rightNow.iHaveFinished("working")) {
        rightNow.iShouldBe("cleaning");
      } else {
        rightNow.iShouldBe("working");
      }
    } else {
      rightNow.iShouldBe("eating");
    }
  } else {
    rightNow.iShouldBe("doingRehabilitationExercises");
  }
} else {
  rightNow.iShouldBe("sleeping");
}
`
    },
    //-------------------------------------------------------------------------
    // pouchdb
    //-------------------------------------------------------------------------
    pouchdb: {
      whatshouldibedoingrightnow: {
        localDB: "whatshouldibedoingrightnow",
        remoteURL: "http://127.0.0.1:5984/whatshouldibedoingrightnow"
      }
    },
    //-------------------------------------------------------------------------
    // computed
    //-------------------------------------------------------------------------
    computed: {
    },
    //-------------------------------------------------------------------------
    // methods
    //-------------------------------------------------------------------------
    methods: {
      theFunction(){
        return new Function(this.theInstructions)();
      },
      iHaveFinished(task){
        return this.tasks[task];
      },
      iShouldBe(task){
        this.task = task;
      }
    },
    beforeCreate(){
      //var found = false; // #1 , vuepouch -> #2
    },
    created(){
      //var found = false; // #3
    },
    beforeMount(){
      //var found = false; // #4 , computed -> #5
    },
    mounted(){ // template parsed
      //var found = false; // #6 , vuepouch -> #7 initDB - then
    },
    beforeUpdate(){
      //var found = false; // #8
    },
    updated(){ // v-for resolved
      //var found = false; // #9
    }
  });