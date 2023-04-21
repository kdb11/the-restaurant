import Web3 from "web3";
import { RESTAURANT_LIST_ABI, RESTAURANT_LIST_ADRESS } from "../config";

export const web3 = new Web3(Web3.givenProvider || "https://localhost:7545");
export const restaurantListContract = new web3.eth.Contract(RESTAURANT_LIST_ABI, RESTAURANT_LIST_ADRESS);

export const bookingRemove = async (account, index) => { 
    restaurantListContract.methods.removeBooking(index).send({from: account});
};
export const bookingCreate = async (account, Guests, name, date, time, id) => { 
    restaurantListContract.methods.createBooking(Guests, name, date, time, id).send({from: account});
/*     console.log(restaurantListContract.methods.createBooking(6, "John", 12, 21, 0).send({from: account})) */
};
export const bookingFetch = async (id) => {
    let bookings = await restaurantListContract.methods.getBookings(id).call();
    return (bookings);
};
export const bookings = async (index) => { 
    const x = restaurantListContract.methods.bookings(index).call();
    console.log(x);
};