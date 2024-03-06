import clsx from "clsx";
import React, { useState } from "react";

type Props = {
  seat_number: number;
  status: string;
  setselectedSeats: React.Dispatch<React.SetStateAction<number[]>>;
  selectedSeats: number[];
};

const Seat = ({
  seat_number,
  status,
  setselectedSeats,
  selectedSeats,
}: Props) => {
  const handleClick = () => {
    if (status !== "booked") {
      setselectedSeats(() => [...selectedSeats, seat_number]);
    }
    if (selectedSeats.includes(seat_number)) {
      setselectedSeats((prev) => prev.filter((x) => x !== seat_number));
    }
  };
  return (
    <button
      disabled={status === "booked"}
      type="button"
      onClick={handleClick}
      className={clsx(
        `border-2 border-gray-600 w-16 h-24 flex flex-col items-center justify-end gap-8 rounded-lg disabled:cursor-not-allowed`,
        {
          "bg-rose-300": status === "booked",
          "bg-green-300 border-green-500": selectedSeats.includes(seat_number),
        }
      )}
    >
      <p>{seat_number}</p>
      <div className="border-2 border-gray-600 h-3 w-6 mb-2 rounded-sm"></div>
    </button>
  );
};

export default Seat;
