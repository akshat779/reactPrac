import React from "react";
import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(url)
        .then((res)=>(res.json()))
        .then((res)=>{
            if(res && res[currency]){
                // console.log(res[currency]);
                setData(res[currency]);
            }
            else{
                setData({});
            }
        })
        .catch((error)=>{
            // console.log("Error :",error);
            setData({});
        })
    },[currency]);
    console.log(data);
    return data;
}


export default useCurrencyInfo;