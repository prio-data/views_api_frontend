const vue = new Vue(
   {
      el: "#app",
      template: `
         <div id="container">
            <page>
               <detail 
                  v-if="selection !== undefined"
                  v-on:back="deselect"
                  :kind="selection"
                  >
               </detail>
               <home-menu 
                  v-else 
                  v-on:select="select"
                  >
               </home-menu>
            </page>
         </div>
      `,

      data(){
         return {
            selection: "models" 
         }
      },

      methods: {
         select(what){
            this.selection = what
            console.log(`${what} selected`)
         },
         deselect(){
            this.selection = undefined
         }
      },
      created(){
         console.log(this.selection)
      }
   }
)
