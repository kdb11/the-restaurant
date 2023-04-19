import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { RESTAURANT_LIST_ADRESS, RESTAURANT_LIST_ABI } from "../config";

export const Reserve = () => {

    const [account, setAccount] = useState("");

    const web3 = new Web3(Web3.givenProvider);

    useEffect(() => {
        const restaurantListContract = new web3.eth.Contract(RESTAURANT_LIST_ABI,RESTAURANT_LIST_ADRESS);
        const getRestaurant = async () => {
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
            
            

            /* const restaurantCount = await restaurantListContract.methods.restaurantCount().call();
            const restaurantArray = []; */

            /* for (let i = 1; i <= todoCount; i++) {
                const todo = await todoListContract.methods.todos(i).call();
                todosArray.push(todo);

            }; */

            console.log(account, restaurantCreate);
        
        };

        const restaurantCreate = async () => { 
            await restaurantListContract.methods.restaurantCreate().send({account})
        };
        restaurantCreate();
        getRestaurant();
        
        if (account) return;
        getRestaurant();

    });
      

    return ( <>
    
    </>
    )
};