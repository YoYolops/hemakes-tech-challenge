export default function RootLayout({ children }) {
    return (
        <main className="p-3 bg-slate-100 h-full">
            <div className="flex items-center justify-between mb-14">
                <h1 className="prose text-3xl font-bold">User</h1>
                <button className="btn btn-primary rounded-md text-white">
                    + New User
                </button>
            </div>

            <div className="bg-white p-1 min-h-full">
                {children}
            </div>
        </main>
    );
}
