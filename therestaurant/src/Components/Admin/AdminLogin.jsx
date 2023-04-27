import React, { useState, useEffect } from 'react';
import './Admin.css';
import { /* MappingTest, */ bookingCreate, bookingFetch, bookingRemove, bookings, web3, bookingEdit } from "../contractFunctions";

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [account, setAccount] = useState("");
  const [guests, setGuests] = useState("");
  const [editedGuests, setEditedGuests] = useState("");
  const [bookingsIndex, setBookingsIndex] = useState({ bookingsIndex: [] });
  const [bookingsList, setBookingsList] = useState({ bookings: [] });
  const [name, setName] = useState("");
  const [editedName, setEditedName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [editedDate, setEditedDate] = useState("");
  const [editedTime, setEditedTime] = useState("");
  const [id, setId] = useState("0");
  const [editedId, setEditedId] = useState("");
  const [index, setIndex] = useState("");
  /* const[edited, SetEdited] = useState(new editedItem("", "", "")); */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(setId)
  }

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

      const addBooking = (index) => {
        setBookingsList((prevValues) => ({
          ...prevValues,
          bookings: [...prevValues.bookings, index]
        }));
      };

      const makeList = (e) =>{ bookingsIndex.bookingsIndex.map( async (index) => {
        addBooking(await bookings(index));
          return (
            console.log(index)
          );
        })
        handleClick(e);
      }

      /* const listOfDates = bookingsList.bookings.map(booking => ({date: booking.date, time: booking.time, name: booking.name})); */

    const mappedBookings = bookingsList.bookings.map((bookingsInfo, index) => {
      return (
          <p key={index}>
            Name: {bookingsInfo.name} Number of guests:{bookingsInfo.numberOfGuests} Time:{bookingsInfo.time} Date:{bookingsInfo.date} Id:{bookingsInfo.id}
          </p>
      );
  })

  /* console.log("bookingsIndex: ", bookingsIndex); */
  console.log("bookingsList: ", bookingsList);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedIsLoggedIn === 'true');
  }, []);

  const  handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  function bookingEditTest() {
    bookingEdit(account, editedGuests, editedName, editedDate, editedTime, editedId);
    }

  if (isLoggedIn) {
    return (
      <div className='logoutForm'>
        <div className='loginContainer'>
          <h1 className='welcomeText'>Welcome, Admin!</h1>
          <button className='logoutBtn' onClick={handleLogout}>Logout</button>

          <div className='crudContainer'>
            {/* <button onClick={restaurantCreate()}>Create a restaurant</button> */}
              {/* <button value="bookingFetch" onClick={handleClick}>Fetch bookings</button> */}
              
            <form onSubmit={handleSubmit}>
              <div className='createBookingAdminContainer'>
                <h2>Create</h2>
                  <input type="number" placeholder="Number of guests" name="guests" value={guests} onChange={(e) => { setGuests(e.target.value) }}></input>
                  <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => { setName(e.target.value) }}></input>
                  <input type="date" name="date" value={date} onChange={(e) => { setDate(e.target.value) }}></input>
                  Kl.18:00
                  <input type="radio" name="time" value="18" onChange={(e) => { setTime(e.target.value) }}></input>
                  Kl.21:00
                  <input type="radio" name="time" value="21" onChange={(e) => { setTime(e.target.value) }}></input>
                  {/* <input type="number" placeholder="id" name="id" value={id} onChange={(e) => { setId(e.target.value) }}></input> */}
                  <button value="bookingCreate" onClick={handleClick}>Create a booking</button>
              </div>
            </form>

            <div className='readBookingAdminContainer'>
              <h2>Read</h2>
              <button value="bookingFetch" onClick={makeList}>Read bookings / Press twice</button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className='editBookingAdminContainer'>
                <h2>Update</h2>
                <input type="number" placeholder="Number of guests" name="editedGuests" value={editedGuests} onChange={(e) => { setEditedGuests(e.target.value) }}></input>
                <input type="text" placeholder="Name" name="editedName" value={editedName} onChange={(e) => { setEditedName(e.target.value) }}></input>
                <input type="date" name="date" value={editedDate} onChange={(e) => { setEditedDate(e.target.value) }}></input>
                Kl.18:00
                <input type="radio" name="time" value="18" onChange={(e) => { setEditedTime(e.target.value) }}></input>
                Kl.21:00
                <input type="radio" name="time" value="21" onChange={(e) => { setEditedTime(e.target.value) }}></input>
                <input type="number" placeholder="Id of booking" name="editedId" value={editedId} onChange={(e) => { setEditedId(e.target.value) }}></input>
                <button className="saveBtn" type="submit" value="bookingFetch" onClick={bookingEditTest}>Update a booking</button>
              </div>
            </form>

            <div className='deleteBookingAdminContainer'>
              <h2>Delete</h2>
              <input type="number" placeholder='Id of booking' onChange={(e) => { setIndex(e.target.value) }}></input>
              <button value="bookingRemove" onClick={handleClick}>Delete a booking</button>
            </div>

          </div>

          <div>
            {mappedBookings}
            <br/>
            {console.log(mappedList)}
          </div>

        </div>
      </div>
    );
  }

  return (
    <div id="card">
      <div id="card-content">
        <div id="card-title">
          <h2>Admin</h2>
          <br />
          <div className="underline-title"></div>
        </div>
        <form className="form">
          <label>&nbsp;Username</label>
          <div >
            <label>
              <input id="username" className="form-content" type="text" required autoComplete='on' value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <div className="form-border"></div>
            <br />
            <label>&nbsp;Password</label>
            <br />
            <label>
              <input id="user-password" className="form-content" type="password" required autoComplete='on' value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <div className="form-border"></div>
            <br />
            <button type='button' id="submit-btn" onClick={handleLogin}>Login</button>
          </div>
        </form>
      </div> 
    </div>
  );
};

export default AdminLogin;