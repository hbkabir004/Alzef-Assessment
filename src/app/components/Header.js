import { SearchBar } from "./SearchBar";
import { TopNav } from "./TopNav";

export function Header() {
    return (
        <header>
            <TopNav />
            <div className="flex flex-col justify-center items-center px-16 py-3.5 w-full bg-white max-md:px-5 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between max-w-full w-[1220px]">
                    <img loading="lazy" src="/logo.png" alt="Logo" className="object-contain shrink-0 my-auto max-w-full aspect-[3.39] w-[129px]" />
                    <SearchBar />
                    <div className="flex gap-3 items-start my-auto">
                            <div className="flex gap-2.5 items-start w-8">
                                <img
                                    loading="lazy"
                                    src="/user.png"
                                    alt=""
                                    className="object-contain w-8 h-8 aspect-square bg-neutral-100 rounded-md"
                                />
                            </div>
                            <div className="flex gap-2.5 items-start w-8">
                                <img
                                    loading="lazy"
                                    src="/wish.png"
                                    alt=""
                                    className="object-contain w-8 h-8 aspect-square bg-neutral-100 rounded-md"
                                />
                            </div>
                            <div className="flex gap-2.5 items-start w-8">
                                <img
                                    loading="lazy"
                                    src="/cart.png"
                                    alt=""
                                    className="object-contain w-8 h-8 aspect-square bg-neutral-100 rounded-md"
                                />
                            </div>
                    </div>
                    <div className="flex gap-2.5 items-start bg-orange-400 rounded-xl pe-2">
                        <div className="flex relative flex-col justify-center self-start p-0.5 -mt-1 aspect-[0.962] w-[51px]">
                            <img loading="lazy" src="/cloud.svg" alt="" className="object-cover absolute inset-0 size-full" />
                            <img loading="lazy" src="/cloud_bw.svg" alt="" className="object-contain w-full aspect-[0.96]" />
                        </div>
                        <div className="my-auto text-base tracking-widest text-center text-white basis-auto font-semibold">
                            Cloud Service
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}