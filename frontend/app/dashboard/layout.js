"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function DashboardLayout({ children }) {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) router.push("/login");
    }, [router]);

    const logout = () => {
        localStorage.removeItem("token");
        router.push("/login");
    };

    return (
        <div className="flex h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black">
            {/* Sidebar */}
            <div className="w-64 backdrop-blur-xl bg-white/5 border-r border-white/10 p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-semibold mb-8">OWMS</h2>

                    <div className="space-y-2">
                        <Button
                            variant="ghost"
                            className="w-full justify-start"
                            onClick={() => router.push("/dashboard")}
                        >
                            Dashboard
                        </Button>

                        <Button
                            variant="ghost"
                            className="w-full justify-start"
                            onClick={() => router.push("/dashboard/workflows")}
                        >
                            Workflows
                        </Button>

                        <Button
                            variant="ghost"
                            className="w-full justify-start"
                            onClick={() => router.push("/dashboard/tasks")}
                        >
                            Tasks
                        </Button>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarFallback>MV</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={logout}>
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Main Area */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <div className="h-16 backdrop-blur-xl bg-white/5 border-b border-white/10 flex items-center justify-between px-8">
                    <h1 className="font-semibold">Operations Dashboard</h1>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 overflow-y-auto">{children}</div>
            </div>
        </div>
    );
}