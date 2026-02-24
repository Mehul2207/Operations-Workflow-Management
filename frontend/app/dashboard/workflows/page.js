"use client";

import { useEffect, useState } from "react";
import api from "@/app/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function Workflows() {
    const [workflows, setWorkflows] = useState([]);
    const [form, setForm] = useState({ name: "", description: "" });

    const fetchWorkflows = async () => {
        const res = await api.get("/workflows");
        setWorkflows(res.data);
    };

    useEffect(() => {
        fetchWorkflows();
    }, []);

    const createWorkflow = async () => {
        await api.post("/workflows", form);
        setForm({ name: "", description: "" });
        fetchWorkflows();
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Workflows</h1>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Create Workflow</Button>
                    </DialogTrigger>
                    <DialogContent className="bg-zinc-900 border-white/10">
                        <DialogHeader>
                            <DialogTitle>Create Workflow</DialogTitle>
                        </DialogHeader>

                        <div className="space-y-4">
                            <Input
                                placeholder="Workflow Name"
                                value={form.name}
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                }
                            />
                            <Input
                                placeholder="Description"
                                value={form.description}
                                onChange={(e) =>
                                    setForm({ ...form, description: e.target.value })
                                }
                            />

                            <Button onClick={createWorkflow}>
                                Save
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {workflows.map((wf) => (
                    <Card
                        key={wf.id}
                        className="backdrop-blur-xl bg-white/5 border-white/10"
                    >
                        <CardContent className="p-4">
                            <h2 className="font-semibold">{wf.name}</h2>
                            <p className="text-sm text-zinc-400">
                                {wf.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}