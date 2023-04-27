import React, {useState, useEffect} from "react";
import { bookingCreate,restaurantListContract, bookingFetch, bookings, web3 } from "./contractFunctions";
import './Reserve.css';


export const Reserve = () => {
    const [account, setAccount] = useState("");
    const [guests, setGuests] = useState("");
    const [bookingsIndex, setBookingsIndex] = useState({ bookingsIndex: [] });
    const [bookingsList, setBookingsList] = useState({ bookings: []});
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

     const restaurantCreate = async () => { 
        restaurantListContract.methods.createRestaurant(0).send({from: account});
    };

    const mappedList = bookingsIndex.bookingsIndex.map(  (index, i) => {
        return (
          <div id={i}>
            {index}-
          </div>
        );
      });

      const searchBooking = () => {bookingsList.bookings.map((bookingsInfo, index) => {
        let bookings2 = 0;
        if(bookingsInfo.date === date && bookingsInfo.time === time) {bookings2++;}
        console.log(bookings2);
        return bookings2;
      });
      };


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

    const mappedBookings = bookingsList.bookings.map((bookingsInfo, index) => {
        return (
            <p key={index}>
                {bookingsInfo.name} - {bookingsInfo.numberOfGuests} - kl.{bookingsInfo.time} -{bookingsInfo.date} 
            </p>
        );
    })

    const handleClick = async (e) => {
        switch (e.target.value) {
          case "bookingFetch":
            setBookingsIndex({ bookingsIndex: await bookingFetch(0) });
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

              <form onSubmit={handleSubmit}>
                  <label>
                      <input type="date" name="date" value={date} onChange={(e) => {setDate(e.target.value)}}></input>
                  </label>
                  <label className="chooseTime">
                        <p>18:00</p>
                        <input type="radio" className="form-content" name="time" value="18" onChange={(e) => {setTime(e.target.value)}}></input>
                        <p className="padding">21:00</p>
                        <input type="radio" className="form-content" name="time" value="21" onChange={(e) => {setTime(e.target.value)}}></input>
                    </label>
                  <button onClick={searchBooking} value={date} onChange={(e) => { setDate(e.target.value) }}>Sök ledigt</button>
              </form>

            <div className="card">
                <div className="card-content">
                    <div id="card-title">
                    <h2>Reserve</h2>
                    <br />
                    <div className="underline-title"></div>
                </div>
                <form onSubmit={handleSubmit}>

                    <label>Date</label>
                    <br />
                    <label>
                        <input type="date" className="form-content" name="date" value={date} onChange={(e) => {setDate(e.target.value)}}></input>
                    </label>
                    <div className="form-border"></div>
                    <br />

                    <label>Name</label>
                    <br/>
                    <label>
                        <input type="text" className="form-content" name="name" value={name} onChange={(e) => {setName(e.target.value)}}></input>
                    </label>
                    <div className="form-border"></div>
                    <br />

                    <label>Number of guests</label>
                    <br />
                    <label>
                        <input type="number" className="form-content" name="guests" value={guests} onChange={(e) => {setGuests(e.target.value)}}></input>
                    </label>
                    <div className="form-border"></div>
                    <br />
                    
                    <label>Time</label>
                    <br />
                    <br />
                    <label className="chooseTime">
                        <p>18:00</p>
                        <input type="radio" className="form-content" name="time" value="18" onChange={(e) => {setTime(e.target.value)}}></input>
                        <p className="padding">21:00</p>
                        <input type="radio" className="form-content" name="time" value="21" onChange={(e) => {setTime(e.target.value)}}></input>
                    </label>
                    <div className="form-border"></div>
                    <br />
                    
                    <label>Id</label>
                    <br />
                    <label><input type="number" className="form-content" placeholder="id" name="id" value={id} onChange={(e) => {setId(e.target.value)}}></input>
                    </label>
                    <div className="form-border"></div>
                    <br />
                    
                    <div className="buttonContainer">
                        <button id="submit-btn" value="bookingCreate" onClick={handleClick}>Create a booking</button>
                        {/* <button type="submit" >Book</button>  */}
                        <button value="bookingFetch" onClick={handleClick}>Fetch bookings</button>
                        <button value="bookingFetch" onClick={makeList}>Make bookings</button>
                        <button id="submit-btn" onClick={restaurantCreate}>Create a restaurant</button>
                    </div>
                </form>
                </div> 
            </div>
                {mappedBookings}<br/>
                {mappedList}
            </div>
        </div>
        </>
        )

};