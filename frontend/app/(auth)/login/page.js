"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/app/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    const router = useRouter();
    const [form, setForm] = useState({ email: "", password: "" });

    const handleLogin = async () => {
        try {
            console.log("API:", api);
            const res = await api.post("/auth/login", form);
            console.log("Response:", res);
            localStorage.setItem("token", res.data.token);
            router.push("/dashboard");
        } catch (err) {
            console.log("Login error:", err);
            alert("Invalid credentials");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-zinc-950">
            <Card className="w-[400px] bg-zinc-900 border-zinc-800">
                <CardContent className="p-6 space-y-4">
                    <h2 className="text-xl font-semibold">Login</h2>

                    <Input
                        className="text-white"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                    />

                    <Input
                        type="password"
                        className="text-white"
                        placeholder="Password"
                        value={form.password}
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                    />

                    <Button onClick={handleLogin}>Login</Button>
                </CardContent>
            </Card>
        </div>
    );
}