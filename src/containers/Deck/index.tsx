import Seat from "@/components/Seat";
import React, { Fragment, useEffect, useState } from "react";

type Props = {
  starting_seat: number;
  ending_seat: number;
  deck: string;
  setselectedSeats: React.Dispatch<React.SetStateAction<number[]>>;
  selectedSeats: number[];
  bookedSeats: number[];
};
const seatsData = [
  { seat_number: 1, status: "available" },
  { seat_number: 2, status: "available" },
  { seat_number: 3, status: "available" },
  { seat_number: 4, status: "available" },
  { seat_number: 5, status: "available" },
  { seat_number: 6, status: "available" },
  { seat_number: 7, status: "available" },
  { seat_number: 8, status: "available" },
  { seat_number: 9, status: "available" },
  { seat_number: 10, status: "available" },
  { seat_number: 11, status: "available" },
  { seat_number: 12, status: "available" },
  { seat_number: 13, status: "available" },
  { seat_number: 14, status: "available" },
  { seat_number: 15, status: "available" },
  { seat_number: 16, status: "available" },
  { seat_number: 17, status: "available" },
  { seat_number: 18, status: "available" },
  { seat_number: 19, status: "available" },
  { seat_number: 20, status: "available" },
  { seat_number: 21, status: "available" },
  { seat_number: 22, status: "available" },
  { seat_number: 23, status: "available" },
  { seat_number: 24, status: "available" },
  { seat_number: 25, status: "available" },
  { seat_number: 26, status: "available" },
  { seat_number: 27, status: "available" },
  { seat_number: 28, status: "available" },
  { seat_number: 29, status: "available" },
  { seat_number: 30, status: "available" },
  { seat_number: 31, status: "available" },
  { seat_number: 32, status: "available" },
  { seat_number: 33, status: "available" },
  { seat_number: 34, status: "available" },
  { seat_number: 35, status: "available" },
  { seat_number: 36, status: "available" },
  { seat_number: 37, status: "available" },
  { seat_number: 38, status: "available" },
];

const Deck = ({
  bookedSeats,
  starting_seat,
  ending_seat,
  deck,
  setselectedSeats,
  selectedSeats,
}: Props) => {
  const [seats, setSeats] = useState(seatsData);

  useEffect(() => {
    const updatedSeats = seats.map((item) => {
      if (bookedSeats.includes(item.seat_number)) {
        return { ...item, status: "booked" };
      } else {
        return item;
      }
    });
    setSeats(updatedSeats);
  }, [bookedSeats]);

  return (
    <div className="flex flex-col items-center gap-2 p-2 max-w-72 border-2 border-gray-600 rounded-lg">
      <p className="bg-gray-600 text-white w-full text-center rounded-lg">
        {deck}
      </p>
      <div className="grid grid-cols-4 gap-2">
        {seats.length &&
          seats.slice(starting_seat - 1, ending_seat).map((seat, index) => {
            return (
              <Fragment key={seat.seat_number}>
                <Seat
                  seat_number={seat.seat_number}
                  status={seat.status}
                  setselectedSeats={setselectedSeats}
                  selectedSeats={selectedSeats}
                />
                {index % 3 == 0 && <div></div>}
              </Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default Deck;
