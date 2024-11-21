import { topNavItems } from "../data/NavigationItems";

export function TopNav() {
    return (
        <nav className="flex flex-col justify-center items-center px-16 py-1.5 w-full text-xs leading-tight bg-zinc-100 text-neutral-700 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 max-w-full w-[1220px]">
                <div className="flex flex-1 gap-8">
                    <div className="flex gap-1 items-start text-orange-500 whitespace-nowrap">
                        <div>English</div>
                        <img loading="lazy" src="/upper_arrow.svg" alt="" className="object-contain shrink-0 w-2 aspect-square" />
                    </div>
                    <div>Help Center</div>
                    <div className="basis-auto">Helpline: 0964781656</div>
                </div>
                <div className="flex flex-1 gap-9 text-right">
                    {topNavItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className={item.highlight ? "text-orange-500" : ""}
                        >
                            {item.text}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}