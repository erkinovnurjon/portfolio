"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Forma = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<number | "">("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    // Bu joyda kiritilgan malumotlarni saqlash logikasi yoziladi
    console.log({
      firstName,
      lastName,
      email,
      phoneNumber,
    });
  };

  return (
    <form className="w-full" onSubmit={onSubmit}>
      <div className="flex flex-col md:flex-row justify-center md:gap-10 gap-2 items-center">
        <div className="w-full md:px-5 md:py-0 ">
          <Label>First Name</Label>
          <Input
            type="text"
            placeholder="Name"
            className="w-full md:my-2 my-1 border-t-0 border-x-0 outline-0"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Label>Last Name</Label>
          <Input
            type="text"
            placeholder="Doe"
            className="w-full md:my-2 my-1 border-t-0 border-x-0 outline-0"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="w-full md:p-4 p-0">
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="nurjon@gmail.com"
            className="w-full my-2 border-t-0 border-x-0 outline-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Phone Number</Label>
          <Input
            type="number"
            placeholder="+998933365906"
            className="w-full my-2 border-t-0 border-x-0 outline-0"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(Number(e.target.value))}
          />
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Forma;
