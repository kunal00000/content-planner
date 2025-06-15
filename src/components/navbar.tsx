import { InboxIcon } from "@/icons/inbox";
import { MyIssuesIcon } from "@/icons/my-issues";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
    const pathname = usePathname();

    return (
        <div>
            <div className="text-sm font-semibold p-2 pr-0 flex justify-between items-center mb-2">
                <Link href="/" className="flex items-center gap-1.5">
                    <span className="w-28 text-foreground font-semibold">Contentist</span>
                </Link>
            </div>
            <section className="flex flex-col gap-0.5">
                <Link href="/#">
                    <div
                        className={cn(
                            "flex items-center justify-between gap-2 w-full text-sm text-foreground font-semibold p-2 rounded text-left hover:bg-secondary",
                            { "bg-secondary": pathname === "/inbox" }
                        )}
                    >
                        <span className="flex items-center gap-2">
                            <InboxIcon className="w-4 h-4" />
                            Inbox
                        </span>
                    </div>
                </Link>
                <Link href="/">
                    <div
                        className={cn(
                            "flex items-center justify-between gap-2 w-full text-sm text-foreground font-semibold p-2 rounded text-left hover:bg-secondary",
                            { "bg-secondary": pathname === "/" }
                        )}
                    >
                        <span className="flex items-center gap-2">
                            <MyIssuesIcon className="w-4 h-4" />
                            Issues
                        </span>
                    </div>
                </Link>
            </section>
        </div>
    );
}