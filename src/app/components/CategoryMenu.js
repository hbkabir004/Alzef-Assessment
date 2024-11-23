import { useEffect, useState } from "react";

const CategoryMenu = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  
  const [allCategories, setAllCategories] = useState([]);
  useEffect(() => {
    fetch("https://api.shope.com.bd/api/v1/public/hero-categories")
        .then(response => response.json())
        .then(data => setAllCategories(data))
}, [])

return (
  <div className="w-72 bg-white border border-gray-300">
    {/* Main Categories */}
    <ul className="divide-y divide-gray-200 cursor-pointer">
      {allCategories.map((category) => (
        <li
          key={category.id}
          className={`relative px-4 py-2 hover:bg-gray-100 ${
            activeCategory === category.id ? "text-orange-500" : "text-black"
          }`}
          onMouseEnter={() => setActiveCategory(category.id)}
          onMouseLeave={() => setActiveCategory(null)}
        >
          {category.title}

          {/* Subcategories */}
          {activeCategory === category.id && category.childrens && (
            <div className="absolute top-0 left-full mt-0 bg-white border border-gray-300 w-60 shadow-md z-10">
              <ul className="divide-y divide-gray-200">
                {category.childrens.map((sub) => (
                  <li
                    key={sub.id}
                    className={`relative px-4 py-2 hover:bg-gray-100 ${
                      activeSubcategory === sub.id ? "text-orange-500" : "text-black"
                    }`}
                    onMouseEnter={() => setActiveSubcategory(sub.id)}
                    onMouseLeave={() => setActiveSubcategory(null)}
                  >
                    {sub.title}

                    {/* Subcategory Items */}
                    {activeSubcategory === sub.id && sub.childrens && (
                      <div className="absolute top-0 left-full mt-0 bg-white border border-gray-300 w-48 shadow-md z-20">
                        <ul className="divide-y divide-gray-200">
                          {sub.childrens.map((item) => (
                            <li
                              key={item.id}
                              className="px-4 py-2 hover:text-orange-500 text-black"
                            >
                              {item.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  </div>
);
};

export default CategoryMenu;
