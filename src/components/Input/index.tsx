"use client";
import { ErrorMessage } from "@hookform/error-message";
import React, { forwardRef, useImperativeHandle } from "react";

type Props = {
  name: string;
  label: string;
  type: string;
  errors?: Record<string, unknown>;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, type, errors, name, ...props }: Props, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current!);
    return (
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
          {props?.required && <span className="text-rose-500">*</span>}
        </label>
        <div className="mt-2">
          <input
            {...props}
            name={name}
            type={type}
            ref={inputRef}
            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          />
        </div>
        {errors && (
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => {
              return (
                <span className="py-1 text-rose-500 text-xsmall-regular capitalize">
                  {message}
                </span>
              );
            }}
          />
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
