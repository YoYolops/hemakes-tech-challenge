export default function RootLayout({ children }) {
    return (
        <main className="p-3 bg-slate-200 h-full w-full max-w-[1280px]">
            <div className="flex items-center justify-between mb-14">
                <a className="prose text-3xl font-bold" href="/users/list">User</a>
                <a className="btn btn-primary rounded-md text-white" href="/users/create">
                    + New User
                </a>
            </div>

            <div className="bg-white p-3 rounded-xl shadow-2xl max-h-[500px] overflow-auto">
                {children}
            </div>
        </main>
    );
}
