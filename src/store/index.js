import { createStore } from 'vuex'
//import { useRoute } from 'vue-router'
import axios from 'axios'
import router from '@/router'
export default createStore({
  state: {

    user: null,
    isLoggedIn: false,
    categories:[],
    carList:[]
  },
  getters: {
  },
  mutations: {
    setUser(state, user) {
      state.user = user
      state.isLoggedIn = true
      // Push user to dashboard 
      router.push('/dashboard')
    },
    clearUser(state) {
      state.user = null
      state.isLoggedIn = false
      router.push('/')
    },
    updateCategoryList(state,dic){
      state.categories=dic

    },
    updateCarList(state,dic){
      state.carList= dic
    },
    deleteProduct(state,id){
      axios.delete(`http://localhost:3000/Products/${id}`)
    .then(()=>{
        console.log("deleted")
        state.carList = state.carList.filter( i => i.id !== id)
    })
    .catch((error)=>{
        console.log(error)
    })
    },
    deleteCategory(state,id){
      axios.delete(`http://localhost:3000/Categories/${id}`)
    .then(()=>{
        console.log("deleted")
        state.categories = state.categories.filter( i => i.id !== id)
    })
    .catch((error)=>{
        console.log(error)
    })
    },
    
  },
  actions: {

    
  // get car list from db.json  
  getCarsCategory({commit}){
      axios.get("http://localhost:3000/Categories")
      .then((response )=>{
          // commit in store variable i.e state.categories
          commit('updateCategoryList',response.data)
          
      })
      .catch((error) => {
      console.log(error);
      });
  },

  getCarsList({commit}){
    axios.get("http://localhost:3000/Products")
    .then((response )=>{
      // commit in store variable i.e state.carList
        commit('updateCarList',response.data)
        
    })
    .catch((error) => {
    console.log(error);
    });
  },

  deleteItemFromProducts( {commit}, id){
    commit("deleteProduct",id)
  },

  deleteItemFromCategories( {commit}, id){
    commit("deleteCategory",id)
  },

  signInCheck( {commit} ,credentials){
    console.log(credentials.userName)
    console.log(credentials.password)
    axios.get("http://localhost:3000/Users")
    .then((response)=>{
      for(let i = 0 ; i< response.data.length;i++){
        if(response.data[i].userName== credentials.userName && response.data[i].password == credentials.password){
          console.log("found")
          commit("setUser",response.data[i].name)
          return;
        }
      }
    })
   

  }
        
    
},
  modules: {
  }
})
