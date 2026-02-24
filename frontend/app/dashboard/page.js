export default function Dashboard() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                Dashboard Overview
            </h1>

            <div className="grid grid-cols-3 gap-6">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold">
                        Active Workflows
                    </h3>
                    <p className="text-3xl mt-4">12</p>
                </div>

                <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold">
                        Pending Tasks
                    </h3>
                    <p className="text-3xl mt-4">34</p>
                </div>

                <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold">
                        SLA Breaches
                    </h3>
                    <p className="text-3xl mt-4 text-red-400">2</p>
                </div>
            </div>
        </div>
    );
}