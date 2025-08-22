"use client"
import React, { useEffect } from "react";
import Button from "../Ui/Button";
import Link from "next/link";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useAuthStore} from "../../stores/authStore";
import {loginSchema} from "./loginSchema";
import FormInput from "../Auth/FormInput";
import {useRouter} from "next/navigation";

interface usersInputs {
    userName: string;
    password: string;
}

const LoginForm = () => {
    const router = useRouter();
    const {login, isLoading, error, isAuthenticated} = useAuthStore();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<usersInputs>({
        resolver: yupResolver(loginSchema),
        mode:'onSubmit'
    });

    // Authentication success-ის მოსმენა
    useEffect(() => {
        if (isAuthenticated) {
            router.push("/home");
        }
    }, [isAuthenticated, router]);

    const onSubmit: SubmitHandler<usersInputs> = async (data) => {
        await login({
            userName: data.userName,
            password: data.password
        });

    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {error && (
                <div
                    className="bg-red-500/10 border border-red-500/20 rounded-lg w-[550px] h-[40px] flex items-center  text-center justify-center"
                    style={{
                        marginLeft: "13%",
                        marginTop: "2%",
                    }}
                >
                    <p className="text-red-400 text-sm flex items-center  text-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                        </svg>
                        {error}
                    </p>
                </div>
            )}

            <FormInput
                {...register("userName")}
                label="Username"
                name="userName"
                type="text"
                placeholder="Enter your username"
                error={errors.userName?.message}
                required
                icon={
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                }
            />

            <FormInput
                {...register("password")}
                label="Password"
                name="password"
                type="password"
                error={errors.password?.message}
                autoComplete="current-password"
                placeholder="Enter your password"
                required
                icon={
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                    </svg>
                }
            />

            {/* Forgot Password Link */}
            <div
                className="text-right w-[70%] h-[45px] flex flex-col justify-center gap-3"
                style={{
                    marginLeft: "15%",
                }}
            >
                <a
                    href="#"
                    className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                    Forgot your password?
                </a>
            </div>

            {/* Submit Button - Link-ი ამოცილებული */}
            <div className="flex flex-col items-center justify-center gap-3">
                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-[70%] h-[56px] cursor-pointer"
                    isLoading={isLoading}
                    disabled={isLoading}
                >
                    {isLoading ? "Signing In..." : "Sign In"}
                </Button>

                <div className="text-center mt-6">
                    <p className="text-slate-400">
                        Dont have an account?{" "}
                        <Link
                            href="/register"
                            className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;