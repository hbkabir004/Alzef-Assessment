import { useEffect, useState } from "react";

export function CategoryMenu() {
    const [allcategories, setAllCategories] = useState([])
    useEffect(() => {
        fetch("https://api.shope.com.bd/api/v1/public/hero-categories")
            .then(response => response.json())
            .then(data => setAllCategories(data))
    }, [])

    return (
        <nav className="flex relative flex-col justify-center items-start px-2.5 py-3 bg-white min-h-[381px] w-[230px]">
            {allcategories.map((item) => (
                <a
                    key={item.id}
                    href={item.link}
                    className={`gap-2 mt-3 ${item.highlight ? "text-orange-500" : ""}`}
                >
                    {item.title}
                </a>
            ))}
            <img
                loading="lazy"
                src="/right_arrow.svg"
                alt=""
                className="object-contain absolute z-0 aspect-square h-[15px] right-[5px] top-[65px] w-[15px]"
            />
        </nav>
    );
}