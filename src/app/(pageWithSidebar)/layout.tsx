import { Nav } from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row h-full">
            <nav className="p-2 w-[200px] xl:w-[250px]">
                <Nav />
            </nav>
            <main className="m-2 border border-border flex-grow bg-white rounded">
                <div className="h-full w-full min-h-[calc(100vh-18px)]">
                    {children}
                </div>
            </main>
        </div>
    );
}
