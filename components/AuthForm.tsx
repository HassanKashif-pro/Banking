"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import CustomInput from "./CustomInput";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      // Simulate form submission
      console.log(values);
      // You can add actual form submission logic here
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1>
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user ? "Link Account to get started" : "Please enter your details"}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* PLAID */}</div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CustomInput
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter your email"
            />

            <CustomInput
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
            />

            <Button type="submit" disabled={isLoading} className="form-btn">
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />{" "}
                  &nbsp;Loading...
                </>
              ) : type === "sign-in" ? (
                "Sign In"
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
        </Form>
      )}
      <footer className="flex justify-center gap-1">
        <p className="text-14 font-normal text-gray-600">
          {type === "sign-in"
            ? "Don't have an account?"
            : "Already have an account?"}
        </p>
        <Link
          href={type === "sign-in" ? "/sign-up" : "/sign-in"}
          className="form-link"
        >
          {type === "sign-in" ? "Sign up" : "Sign in"}
        </Link>
      </footer>
    </section>
  );
};

export default AuthForm;
