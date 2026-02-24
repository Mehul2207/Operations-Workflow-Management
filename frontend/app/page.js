"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-6">
      <h1 className="text-4xl font-bold tracking-tight">
        Operations Workflow Management System
      </h1>

      <Button size="lg" onClick={() => router.push("/login")}>
        Login
      </Button>
    </div>
  );
}