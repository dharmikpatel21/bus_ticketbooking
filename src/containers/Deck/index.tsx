import Seat from "@/components/Seat";
import React from "react";

type Props = {
  starting_seat: number;
  deck: string;
};

const Deck = ({ starting_seat, deck }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2 p-2 max-w-72 border-2 border-gray-600">
      <p className="bg-gray-600 text-white w-full text-center">{deck}</p>
      <div className="grid grid-cols-4 gap-2">
        {[...Array(24).keys()].map((x) => {
          let seat_number = x + starting_seat;
          const row = x / 4;
          x % 4 === 0
            ? (seat_number -= Math.floor(row))
            : (seat_number -= Math.ceil(row));

          if (x % 4 === 1) {
            return <div className="w-16" key={x}></div>;
          }
          return <Seat seat_number={seat_number} key={x + 1} />;
        })}
      </div>
    </div>
  );
};

export default Deck;
