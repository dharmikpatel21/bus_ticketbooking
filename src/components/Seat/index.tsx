import React from "react";

type Props = {
  seat_number: number;
};

const Seat = ({ seat_number }: Props) => {
  return (
    <button
      type="button"
      className="border-2 border-gray-600 w-16 h-24 flex flex-col items-center justify-end gap-8"
    >
      <p>{seat_number}</p>
      <div className="border-2 border-gray-600 h-3 w-6 mb-2"></div>
    </button>
  );
};

export default Seat;
