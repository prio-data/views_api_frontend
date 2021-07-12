const url = (kind)=>{
   return `${URLS[kind]}`
}

const get_codebook = (kind)=>{
   return axios.get(`${url(kind)}`)
      .then((rsp)=>{
         return rsp.data
      })
}
