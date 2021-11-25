
const MOCK_DATA = {
   "features": {
      "cm":[
         {id:"my_var_a",name:"My variable A",description:"Something cool"},
         {id:"my_var_b",name:"My variable B",description:"Something cool"},
         {id:"my_var_c",name:"My variable C",description:"Something cool"},
      ],
      "pgm":[
         {id:"my_var_a",name:"My variable A",description:"Something cool"},
         {id:"my_var_b",name:"My variable B",description:"Something cool"},
         {id:"my_var_c",name:"My variable C",description:"Something cool"},
      ]
   },
   "models": {
      "cm":[
         {id:"my_mod_a",name:"My model A",description:"Something cool"},
         {id:"my_mod_b",name:"My model B",description:"Something cool"},
         {id:"my_mod_c",name:"My model C",description:"Something cool"},
      ],
      "pgm":[
         {id:"my_mod_a",name:"My model A",description:"Something cool"},
         {id:"my_mod_b",name:"My model B",description:"Something cool"},
         {id:"my_mod_c",name:"My model C",description:"Something cool"},
      ]
   },
}

const API_URL       = "https://api.viewsforecasting.org"
const API_LOCATIONS = {
   features: "escwa_data_2021_10_01",
   models:   "escwa_2021_05_01"
}

const URLS = {
   "features": `${API_URL}/${API_LOCATIONS.features}`,
   "models":   `${API_URL}/${API_LOCATIONS.models}`,
}
