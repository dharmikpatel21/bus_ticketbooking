import React from "react";
import Seat from "../../components/Seat";
import Deck from "../Deck";

type Props = {};

const BookTickets = (props: Props) => {
  return (
    <section className="grid sm:grid-cols-2 grid-cols-1 gap-8 place-items-center">
      <Deck deck="Lower Deck" starting_seat={1} />
      <Deck deck="Upper Deck" starting_seat={21} />
    </section>
  );
};

export default BookTickets;
