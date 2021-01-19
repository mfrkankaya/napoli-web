import axios from "axios";

export default axios.create({
  baseURL: 'https://napolipizza.herokuapp.com/'
})