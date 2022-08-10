import axios from 'axios'
export default async function API(params) {
  let information = null
  const api = `http://localhost:3333/api/${params.rute}`
  if (params.type == 'post') {
    information = await axios.post(api, params.data)
    if (information.status === 200) {
      console.log(information)
      window.sessionStorage.setItem('info', JSON.stringify(information.data))
      return information
    }
  }
}