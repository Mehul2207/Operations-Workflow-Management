"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function Tasks() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Tasks</h1>

            <div className="grid grid-cols-3 gap-6">
                <Card className="backdrop-blur-xl bg-white/5 border-white/10">
                    <CardContent className="p-4">
                        <h2 className="font-semibold">Task Example</h2>
                        <p className="text-sm text-zinc-400">
                            Priority: High
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}