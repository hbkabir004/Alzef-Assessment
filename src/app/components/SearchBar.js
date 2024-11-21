
export function SearchBar() {
    return (
        <form className="flex flex-wrap gap-10 pl-3.5 text-sm leading-tight bg-gray-100 rounded-xl text-neutral-500 max-md:max-w-full">
            <label htmlFor="searchInput" className="sr-only">Search Product</label>
            <input
                type="search"
                id="searchInput"
                placeholder="Search Product"
                className="my-auto bg-transparent border-none outline-none"
            />
            <button type="submit" aria-label="Search">
                <img loading="lazy" src="/serachbar.png" alt="" className="object-contain shrink-0 aspect-[1.07] w-[47px]" />
            </button>
        </form>
    );
}