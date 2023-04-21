import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { bookingCreate, bookingFetch, bookingRemove, bookings, web3 } from "./contractFunctions";

export const Reserve = () => {
    const [account, setAccount] = useState("");
    const [guests, setGuests] = useState("");
    const [bookingsList, setBookingsList] = useState({ bookings: []});
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        const getRestaurant = async () => {
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
        };
        if (account) return;
        getRestaurant();
    });

/*     const restaurantCreate = async () => { 
        restaurantListContract.methods.createRestaurant(0).call();
    }; */

    const mappedList = bookingsList.bookings.map((index) => {
        return(
            bookings(index),
        <div>
            {index}-
        </div>
        );
    });

    const handleClick = async (e) =>{
        switch (e.target.value){
            case "bookingFetch":
                setBookingsList({ bookings: await bookingFetch(0)});
            case "bookingRemove":
                bookingRemove(account);
            case "bookingCreate":
                bookingCreate(account, guests, name, date, time, id);
        }
    }

    console.log("guests: ", guests);
    console.log("bookings: ", bookingsList)
    
    return ( <>
    {/* <button onClick={restaurantCreate()}>Create a restaurant</button> */}
    <button value="bookingRemove"onClick={handleClick}>Remove a booking</button> 
    <button value="bookingCreate" onClick={handleClick}>Create a booking</button>
    <button value="bookingFetch" onClick={handleClick}>Fetch bookings</button>
    <form>
        <input type="number" placeholder="Number of guests" name="guests" value={guests} onChange={(e) => {setGuests(e.target.value)}}></input>
        <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => {setName(e.target.value)}}></input>
        <input type="date" name="date" value={date} onChange={(e) => {setDate(e.target.value)}}></input>
        <input type="radio" name="time" value="18" onChange={(e) => {setTime(e.target.value)}}></input>
        <input type="radio" name="time" value="21" onChange={(e) => {setTime(e.target.value)}}></input>
        <input type="number" placeholder="id" name="id" value={id} onChange={(e) => {setId(e.target.value)}}></input>
        <button type="submit" >Book</button>
    </form>
    {mappedList}
    </>
    )
};