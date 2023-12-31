"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";

const SignInButton = () => {
    const { data: session } = useSession();

    if (session && session.user)
        return (
            <div className="flex gap-4 ml-auto">
                <p className="text-sky-600">{session.user.name}</p>
                <span
                    onClick={() => signOut()}
                    className="flex gap-4 ml-auto text-red-600"
                >
                    Sign Out
                </span>
            </div>
        );

    return (
        <div className="flex gap-4 ml-auto items-center">
            <Link
                href={"/auth/signin"}
                className="flex gap-4 ml-auto text-green-600"
            >
                Sign In
            </Link>
            <Link
                href={"/auth/signup"}
                className="flex gap-4 ml-auto bg-green-600 text-green-200 p-2 rounded"
            >
                Sign Up
            </Link>
        </div>
    );
};

export default SignInButton;