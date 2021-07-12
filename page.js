
Vue.component('page', {
   template: `
      <div class="page">
         <div class="header">
            <h1>ViEWS API</h1>
            <img src="images/pixelbild.png" alt="">
         </div>
         <slot></slot>
         <div class="footer">
            <p>
               Peder G. Landsverk 2021
            </p>
         </div>
      </div>
   `
})
