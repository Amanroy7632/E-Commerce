import {createContext,useReducer,useContext} from 'react'
// import faker from 'faker'

import { cartReducer } from './Reducer';
const Cart=createContext()

export const Context=({children})=>{
    // const products=[...Array(20)].map(()=>({
    //     id:Math.floor(Math.random()*1000 +1),
    //     name:"A",
    //     price:"",
    //     image:"",
    //     homeDelevry:true
    // }));
    const products = [
        {
          pname: "Redmi Note 13 Pro 5G (8GB RAM, 128GB, Coral Purple)",
          id: 1,
          price: "25999",
          ref: "12351",
          homeDelevry: true,
          imageSrc:
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcShvoWX_D9-DhgL-EdHxlG6Vqy8Ri7sVzZ3zkKkmRzIEt_sQ-BoKLiWyHgbJ9bK1qM4iMci1RKjHoMjFu5JaardbViq7OL-r81sFQ0sEv_CtyVThqtofd12",
        },
        {
          pname: "Samsung Galaxy S24 Ultra - 512 GB - Titanium Gray",
          id: 2,
          price: "129999",
          ref: "12352",
          homeDelevry: false,
          imageSrc:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRsJh85eOZrwIVd-MFioR669ekIWZ99Oz1PQpEedGx_vxAzGFJNaWpuB7lRVxOiiJAVtfFCdzyt3kU1E6aR1xtWcWZVcOzsGqsAgsKz0oh-lnjQBsIfxpSS",
        },
        {
          pname: "Apple Iphone 12 128 GB Black",
          id: 3,
          price: "54900",
          ref: "12353",
          homeDelevry: true,
          imageSrc:
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSuTLofES66LaKx7QXtSvMO7dB1NnCSIjU013y3UawpA6nOP8nmcioWqdqHCn4cRhxSJOrRi4v5DF3XpEcBvgGdrvubu8rdJaXyUrXHPBRVuR0FTUt2mv9nnA",
        },
        {
          pname: "Pens",
          id: 4,
          price: "2906.52",
          ref: "12354",
          homeDelevry: true,
          imageSrc:
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqBaDz9BuI-TPR-Pq2T7j2oXoa1y0LHthEARYKHEWaFsxxL50F5oG0uaEifQRKBhTO7JYjVaMRtRvOq8xu3WDrhg1GxDLaimLntub8i_MJ1wRglIBNHadPcg",
        },
      ]
    const [state,dispatch]=useReducer(cartReducer,{
        products:products,
        cart:[],
    })
    // console.log(products);
    return <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>
};
export default Context;
export const CartState=()=>{
    return useContext(Cart)
}