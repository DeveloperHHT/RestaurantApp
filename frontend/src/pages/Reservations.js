import React, { useEffect, useState } from "react";
import { getReservations } from "../api/api";

const Reservations = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        getReservations().then(setReservations);
    }, []);

    return (
        <div>
            <h1>Reservations</h1>
            <ul>
                {reservations.map(reservation => (
                    <li key={reservation.id}>
                        {reservation.customerName} - {reservation.reservationDate} - {reservation.numberOfPeople} Kişi
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reservations;
