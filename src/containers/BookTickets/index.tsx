"use client";
import React, { useEffect, useState } from "react";
import Seat from "../../components/Seat";
import Deck from "../Deck";
import Link from "next/link";
import MyModal from "@/components/Modal";

type Props = {};

const BookTickets = (props: Props) => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [selectedSeats, setselectedSeats] = useState<number[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3004/bookings", {
          cache: "no-store",
        });
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const bookedSeats = bookings.map((item) => item.selectedSeats).flat();

  return (
    <section className="flex max-md:flex-col gap-8 justify-center max-md:items-center">
      <Deck
        deck="Lower Deck"
        starting_seat={1}
        ending_seat={18}
        bookedSeats={bookedSeats}
        setselectedSeats={setselectedSeats}
        selectedSeats={selectedSeats}
      />
      <Deck
        deck="Upper Deck"
        starting_seat={21}
        ending_seat={38}
        bookedSeats={bookedSeats}
        setselectedSeats={setselectedSeats}
        selectedSeats={selectedSeats}
      />
      <MyModal selectedSeats={selectedSeats} />
      {/* <div>
        <Link
          href={"/"}
          type="button"
          className="bg-gray-600 text-white rounded-lg  w-full py-1 px-4"
        >
          Book Your Seats
        </Link>
      </div> */}
    </section>
  );
};

export default BookTickets;
