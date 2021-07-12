
Vue.component("detail", {
   template: `
      <div class="content">
         <h2>{{kind}}</h2>
         <div class="navbar">
            <button v-on:click="back">Back</button>
         </div>
         <span v-html="content"></span>
         <p>The API url for {{kind}} is 
            <a :href="api_url">{{api_url}}</a>
         </p>
         <h2>Subnational</h2>
         <card-list :carddata="cm"></card-list>
         <h2>National</h2>
         <card-list :carddata="pgm"></card-list>
      </div>
   `,
   created(){
      get_codebook(this.kind)
         .then((content)=>{
            this.cm = content.cm
            this.pgm = content.pgm
         })
      axios.get(`content/${this.kind}.md`)
         .then((rsp)=>{
            this.content = marked(rsp.data)
         })
   },

   computed: {
      api_url(){
         return `${API_URL}/${API_LOCATIONS[this.kind]}`
      }
   },

   methods: {
      back(){this.$emit('back')},
      goto_api(){
         window.location = this.api_url
      },
   },

   props: ["kind"],
   data(){
      return {
         cm: [],
         pgm: [],
         content: "",
      }
   },
})