"use client";
import React, { useState } from "react";
import Seat from "../../components/Seat";
import Deck from "../Deck";
import Link from "next/link";
import MyModal from "@/components/Modal";

type Props = {};

const BookTickets = (props: Props) => {
  const [selectedSeats, setselectedSeats] = useState<number[]>([]);
  return (
    <section className="flex max-sm:flex-col gap-8 justify-center max-sm:items-center">
      <Deck
        deck="Lower Deck"
        starting_seat={1}
        ending_seat={18}
        setselectedSeats={setselectedSeats}
        selectedSeats={selectedSeats}
      />
      <Deck
        deck="Upper Deck"
        starting_seat={21}
        ending_seat={38}
        setselectedSeats={setselectedSeats}
        selectedSeats={selectedSeats}
      />
      <MyModal />
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
