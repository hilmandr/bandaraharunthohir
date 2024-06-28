"use client";
import { useRouter } from "next/navigation";
import Container from "../../../components/common/container";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Login, login } from "../../../lib/validation/login.validation";
import { useCallback } from "react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { Button } from "../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../../components/ui/form";
import React from "react";

export default function LoginPage() {
  const router = useRouter();
  const form = useForm<Login>({
    resolver: zodResolver(login),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<Login> = useCallback(
    async (data) => {
      const res = await signIn("credentials", {
        username: data.username,
        password: data.password,
        callbackUrl: "/dashboard",
        redirect: false,
      });

      if (res?.error) {
        toast.error("error");
      } else {
        router.push("/dashboard");
      }
    },
    [router]
  );
  return (
    <>
      <div className=" flex w-full h-screen relative">
        <div className=" flex flex-col w-full h-screen items-center justify-center bg-[url('/images/banner-1.JPG')] bg-cover bg-center shadow-lg ">
          <div className=" w-full h-screen bg-black/60 absolute z-0"></div>
          <Container className=" z-10">
            <div className=" grid lg:grid-cols-2 w-full items-center justify-center text-white gap-x-20">
              <div className=" flex flex-col items-start justify-center gap-8">
                <h1 className=" text-6xl font-semibold">Selamat Datang!</h1>
                <div className=" w-24 h-1 bg-white"></div>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  neque non debitis, eos numquam omnis, deserunt odio maxime
                  molestiae eius praesentium, libero minus dolores facere. Aut
                  voluptatibus iure quisquam ea.
                </p>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <div className=" flex flex-col w-full h-[540px] bg-white/20 rounded-2xl items-center justify-center gap-y-6">
                  <h1 className=" text-4xl font-bold">Login</h1>
                  <Form {...form}>
                    <form
                      action=""
                      onSubmit={form.handleSubmit(onSubmit)}
                      className=" w-full max-w-xs space-y-6"
                    >
                      <div className="grid w-full items-center gap-3">
                        <FormField
                          control={form.control}
                          name="username"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="username">Username</FormLabel>
                              <FormControl>
                                <Input
                                  type="username"
                                  id="username"
                                  placeholder="Username"
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid w-full items-center gap-3">
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="password">Password</FormLabel>
                              <FormControl>
                                <Input
                                  type="password"
                                  id="password"
                                  placeholder="Password"
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className=" grid w-full max-w-xs items-center">
                        <Button className=" w-full bg-white text-black font-semibold text-base hover:bg-black/60 hover:text-white">
                          Login
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
