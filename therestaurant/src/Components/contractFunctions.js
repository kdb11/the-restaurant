import Web3 from "web3";
import { RESTAURANT_LIST_ABI, RESTAURANT_LIST_ADRESS } from "../config";

export const web3 = new Web3(Web3.givenProvider || "https://localhost:7545");
export const restaurantListContract = new web3.eth.Contract(RESTAURANT_LIST_ABI, RESTAURANT_LIST_ADRESS);

export const bookingRemove = async (account, index) => { 
    restaurantListContract.methods.removeBooking(index).send({from: account});
};
export const bookingCreate = async (account, Guests, name, date, time, index) => { 
    restaurantListContract.methods.createBooking(Guests, name, date, time, index).send({from: account});
/*     console.log(restaurantListContract.methods.createBooking(6, "John", 12, 21, 0).send({from: account})) */
};
export const bookingFetch = async (id) => {

    let bookings = await restaurantListContract.methods.getBookings(id).call();
    console.log(bookings);
    return (bookings);

};
export const bookings = async (index) => { 
    const x = await restaurantListContract.methods.bookings(index).call();
/*     const objectInfo = Object.values(x).slice(6);
    console.log("Object: ", objectInfo);
    console.log("X: ", x); */
    return x;
};
export const bookingEdit = async (account, Guests, name, date, time, index) => { 
    await restaurantListContract.methods.editBooking(index, Guests, name, date, time ).send({from: account});

};

/* 
export function MappingTest(bookingsIndex) {
    const [bookingsList, setBookingsList] = useState({ bookings: [] });

    const mappedList = bookingsIndex.bookings.map( async (index) => {
        return (
        setBookingsList({ bookings: await bookingFetch(index)}),
        console.log("BookingList !", bookingsList)
        );
    });

    return(
    <>
    {bookingsList}
    </>
    );
} */