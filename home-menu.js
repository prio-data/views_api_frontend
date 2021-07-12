
Vue.component("home-menu",{
   template: `
      <div class="content">
         <h2>Menu</h2>
         <div class="navbar">
            <button v-on:click="select_models">Models</button>
            <button v-on:click="select_features">Features</button>
         </div>
         <span v-html="content"></span>
      </div>
   `,
   methods:{
      select_models(){this.$emit("select","models")},
      select_features(){this.$emit("select","features")},
   },
   created(){
      axios.get("content/main.md")
         .then((rsp)=>{
            this.content = marked(rsp.data)
         })
   },
   data(){
      return {
         content: ""
      }
   }
})
