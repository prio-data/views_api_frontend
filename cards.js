
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
            </table>
         </div>
         <div class="card-content">
            {{content}}
         </div>
      </div>
   `,
   props: ["id","name","content"]
})

Vue.component("card-list",{
   template: `
      <div class="cardlist">
         <card
            v-for="c in carddata"
            :name="c.name"
            :id="c.id"
            :content="c.description"
            :key="c.id"
            >
         </card>
      </div>
   `,
   props: {
      carddata: {
         default: ()=>[]
      }
   },
})
