"use client";
import { Input } from "@/components/ui/input";
import { AuthCredentialsValidator, TAuthCredentialsValidator } from "@/lib/validators/account-credentials-validator";
import { trpc } from "@/trpc/client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const {mutate,isLoading} = trpc.auth.createPayloader.useMutation({

  })

  const onSubmit = ({ 
    email, 
    password 
  }: TAuthCredentialsValidator) => {
    mutate({email, password})
  };

  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto text-center flex flex-col items-center max-w-3xl">
          <div className="ml-0 flex lg:ml-0">
   b         <Link href={"/"}>
              <p className="text-5xl font-black text-[#F3EDE4]">SPARKNIX</p>
            </Link>
          </div>
          {/* <Link href={'/sign-in'}>
          Already have an account? Sign-in
          </Link> */}
          <p className="text-7xl pt-7 tracking-tight font-extrabold text-[#F3EDE4] sm:text-7xl">
            CREATE ACCOUNT
          </p>
          <p className="mt-6 font-normal text-lg items-center text-[#F3EDE4]">
            With intuitive tools for uploading, categorizing, and pricing your
            assets, reaching a global audience of potential buyers has never
            been easier.
          </p>
        </div>
        <div className="mx-auto pt-10 flex-w-full flex-col justify-center sm:w-[400px]">
          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="gap-1 grid">
                  <Input
                    {...register("email")}
                    className={`bg-[#F3EDE4] text-base py-7 px-5 rounded-xl text-[#122315] ${errors.email}`}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="gap-1 grid py-2">
                  <Input
                    {...register("password")}
                    type="password"
                    className={`bg-[#F3EDE4] text-base py-7 px-5 rounded-xl text-[#122315] ${errors.password}`}
                    placeholder="Password"
                  />
                </div>
                <Link
                  href={""}
                  className="bg-[#55DD4A] hover:bg-[#7edb77] text-xl py-4 px-0 text-center rounded-xl text-[#122315] font-medium"
                >
                  CONTINUE
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page; 