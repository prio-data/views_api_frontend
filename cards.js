
Vue.component("card",{
   template: `
      <div class="card">
         <div class="nameplate">
            <table>
               <tr>
                  <td>Name</td>
                  <td class="name">{{name}}</td>
               </tr>
               <tr>
                  <td>ID</td>
                  <td class="id">{{id}}</td>
               </tr>
               <tr>
                  <td>URL</td>
                  <td v-html="urls" class="urls">
                  </td>
               </tr>
            </table>
         </div>
         <div class="card-content">
            {{content}}
         </div>
      </div>
   `,
   computed: {
      urls(){
         return `
            <a href="${this.url_base + "/"+ this.loa + "/" + this.id}">Data</a>
         `
      }
   },

   props: ["id","name","content","url_base","loa"]
})

Vue.component("card-list",{
   template: `
      <div class="cardlist">
         <card
            v-for="c in carddata"
            :name="c.name"
            :id="c.id"
            :content="c.description"
            :url_base="url_base"
            :key="c.id"
            :loa="loa"
            >
         </card>
      </div>
   `,
   props: {
      carddata: {
         default: ()=>[]
      },
      url_base : {
         default: "http://0.0.0.0"
      },
      loa: {
         default: "sb"
      },
   },
})
