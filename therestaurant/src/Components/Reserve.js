import React, { useState, useEffect } from "react";
import './Reserve.css';
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
    <div className='reserveContainer'>
        <img className='reserveImg' src='https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80' alt='restaurantOutside'></img>

        <div className='bookContainer'>
            <div className='reservationText'> 
                <p>RESERVATIONS:    212 554 1515</p>
                <br/>
                <p>Beginning on the first day of each month, excluding Sundays, reservations can be made for the entire following month. Our online reservation system is live 24/7. Reservations are not accepted in the Lounge.</p>
                <br/>
                <p>We are currently accepting reservations through April 30th. May reservations will begin on Saturday, April 1st online via RESY starting at 7:00am ET for party of 1 to 4 guests, by phone at 10:00am ET for party of 5 to 10 guests. Credit card information is required to hold all reservations.</p>    
                <br/>
                <p><u>Reservation Line Hours</u></p> 
                <p>Monday – Friday: 10:00AM – 6:00PM</p> 
                <p>Saturday: 11:00AM – 5:00PM</p>
                <p>Sunday: Closed</p>
                <br/>
            </div>
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
        </div>
    
    </div>
    </>
    )
};