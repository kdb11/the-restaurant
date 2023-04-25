import AdminLogin from './AdminLogin';
import './Admin.css';
import React, { useState, useEffect } from "react";
import { MappingTest, bookingCreate, bookingFetch, bookingRemove, bookings, web3 } from "../contractFunctions";
export const Admin = () => {

  const [account, setAccount] = useState("");
  const [guests, setGuests] = useState("");
  const [bookingsIndex, setBookingsIndex] = useState({ bookingsIndex: [] });
  const [bookingsList, setBookingsList] = useState({ bookings: [] });
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [id, setId] = useState("");
  const [index, setIndex] = useState("");

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

      const mappedList = bookingsIndex.bookingsIndex.map(  (index, i) => {
        return (
          <div id={i}>
            {index}-
          </div>
        );
      });

      const addBooking = (index) => {
        setBookingsList((prevValues) => ({
          ...prevValues,
          bookings: [...prevValues.bookings, index]
        }));
      };

      const makeList = () =>{ bookingsIndex.bookingsIndex.map( async (index) => {
          return (
            addBooking(await bookings(index))
          );
        })
      }

      const listOfDates = bookingsList.bookings.map(booking => ({date: booking.date, time: booking.time}));
      console.log("List of dates: ", listOfDates);

 /*      const makeAnotherList = Object.entries(bookingsList.bookings).forEach(([key, value]) => {
        console.log("Key: ",{key}, "Value: ", `${value}`); 
      }); */

  const handleClick = async (e) => {
    switch (e.target.value) {
      case "bookingFetch":
        setBookingsIndex({ bookingsIndex: await bookingFetch(0) });
        break;
      case "bookingRemove":
        bookingRemove(account, index);
        break;
      case "bookingCreate":
        bookingCreate(account, guests, name, date, time, id);
        break;
      default: console.log("")
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  /* console.log("bookingsIndex: ", bookingsIndex); */
  console.log("bookingsList: ", bookingsList);

  return (<>
    {/* <button onClick={restaurantCreate()}>Create a restaurant</button> */}
    <section>
    <input type="number" onChange={(e) => { setIndex(e.target.value) }}></input>
    <button value="bookingRemove" onClick={handleClick}>Remove a booking</button>
    <button value="bookingFetch" onClick={handleClick}>Fetch bookings</button>
    <button value="bookingFetch" onClick={makeList}>Make bookings</button>
    </section>

    <form onSubmit={handleSubmit}>
    <input type="number" placeholder="Number of guests" name="guests" value={guests} onChange={(e) => { setGuests(e.target.value) }}></input>
    <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => { setName(e.target.value) }}></input>
    <input type="date" name="date" value={date} onChange={(e) => { setDate(e.target.value) }}></input>
    <br/> Kl.18:00
    <input type="radio" name="time" value="18" onChange={(e) => { setTime(e.target.value) }}></input>
    Kl.21:00
    <input type="radio" name="time" value="21" onChange={(e) => { setTime(e.target.value) }}></input>
    <input type="number" placeholder="id" name="id" value={id} onChange={(e) => { setId(e.target.value) }}></input>
    <button value="bookingCreate" onClick={handleClick}>Create a booking</button>
    </form>
    <div>
      {mappedList}
    </div>
    <div className='adminContainer'>
      <img className='adminImg' src='https://images.unsplash.com/photo-1489528792647-46ec39027556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' alt='takeAway'></img>
      <AdminLogin />
    </div>

    {/* {makeAnotherList} */}
  </>
  );
};

//To show dates 1) click fetch, 2) Make bookings => view console for feedback
export default Admin;
