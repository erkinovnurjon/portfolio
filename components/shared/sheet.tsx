"use client"

// Import statements remain unchanged
import { useEffect, useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Star from "./star";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const SheetDemo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Your logic to save the form data goes here
    console.log({
      name,
      email,
      message,
    });

    setIsFormSubmitted(true);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isFormSubmitted) {
      timeout = setTimeout(() => {
        setIsFormSubmitted(false);
      }, 3500);
    }

    return () => clearTimeout(timeout);
  }, [isFormSubmitted]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Saytni baxolash</Button>
      </SheetTrigger>

      {isFormSubmitted ? (
        <div>YuBorildi</div>
      ) : (
        <SheetContent>
          <form onSubmit={onSubmit}>
            <SheetHeader>
              <SheetTitle>Talab va Takliflar uchun!</SheetTitle>
              <SheetDescription>
                You can rate the site here. When you're done, click save.
              </SheetDescription>
            </SheetHeader>

            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  placeholder="Your Name"
                  className="col-span-3"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  e-mail
                </Label>
                <Input
                  id="username"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="col-span-3"
                  required
                />
              </div>

              <div className="flex w-full items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Your message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>

            <Star />

            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </SheetContent>
      )}
    </Sheet>
  );
};

export default SheetDemo;
