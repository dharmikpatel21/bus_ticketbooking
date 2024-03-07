import Input from "@/components/Input";
import { emailRegex, nameRegex, phoneRegex } from "@/lib/regex";
import { format } from "date-fns";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type InformationTypes = {
  email: string;
  password: string;
  name: string;
  phone: number;
  date: Date;
};

type Props = {
  selectedSeats: any;
};

const ReservationForm = ({ selectedSeats }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InformationTypes>();

  const bookedSeats = selectedSeats.selectedSeats.map((x) => {
    return `${x},`;
  });
  const onSubmit: SubmitHandler<InformationTypes> = async (data) => {
    const { name, email, phone, date } = data;
    const selectedSeatsArray = selectedSeats.selectedSeats;

    const formattedData = {
      name: name,
      email: email,
      phone: phone,
      date: date,
      selectedSeats: selectedSeatsArray,
    };

    const res = await fetch("http://localhost:3004/bookings", {
      method: "POST",
      body: JSON.stringify(formattedData),
    });
    console.log("====================================");
    console.log(res);
    console.log("====================================");
  };
  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col w-full gap-4">
        <Input
          label="Name"
          type="text"
          errors={errors}
          {...register("name", {
            required: "name is required",
            maxLength: {
              value: 50,
              message: "name is too long",
            },
            minLength: {
              value: 2,
              message: "name is too short",
            },
            pattern: {
              value: nameRegex,
              message: "name should only contain alphabets ",
            },
          })}
          required
        />
        <Input
          label="Email"
          type="email"
          errors={errors}
          {...register("email", {
            required: "email is required",
            pattern: {
              value: emailRegex,
              message: "Enter valid email",
            },
          })}
          required
        />
        <Input
          label="Phone Number"
          type="tel"
          errors={errors}
          {...register("phone", {
            required: "phone is required",
            pattern: {
              value: phoneRegex,
              message: "please enter vaild phone number ",
            },
          })}
          required
        />
        <Input
          label="Date of Ride"
          type="date"
          min={format(new Date(), "yyyy-MM-dd")}
          errors={errors}
          {...register("date", {
            required: "date is required",
          })}
          required
        />
        {bookedSeats.length === 0 ? (
          <p className="text-rose-500 py-3">please select seats</p>
        ) : (
          <p className="py-3">
            Selected Seats: <span>{bookedSeats}</span>
          </p>
        )}
      </div>
      <button
        type="submit"
        className="bg-gray-600 text-white rounded-lg  w-full py-1 px-4"
      >
        save
      </button>
    </form>
  );
};

export default ReservationForm;
