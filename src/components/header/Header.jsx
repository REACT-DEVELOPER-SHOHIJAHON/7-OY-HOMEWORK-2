import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "../../api/axios";
import { AiOutlineSearch } from "react-icons/ai";
import { BsSunFill } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { Container } from "../../utils";

const Header = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("light");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleSearchCity = async (e) => {
    e.preventDefault();

    try {
      const response = await axios(
        `forecast.json?key=644f6ce0ca9e401ebb891832211707&q=${searchValue}&days=7&aqi=yes&alerts=yes`
      );
      const data = response.data;
      dispatch({ type: "SEARCH_DATA", data });
    } catch (error) {
      console.error("Error fetching city data:", error);
    }

    setSearchValue("");
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header className="py-6 shadow-md">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="text-indigo-700 text-4xl font-extrabold">
            Weather App
          </h1>

          <form
            onSubmit={handleSearchCity}
            className="border max-w-[700px] w-full flex border-gray-300 p-4 rounded-full shadow-sm"
          >
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Search city..."
              className="flex-1 border-none outline-none text-xl placeholder-gray-400"
            />
            <button
              type="submit"
              className="text-indigo-700 hover:text-indigo-900"
            >
              <AiOutlineSearch className="text-[32px]" />
            </button>
          </form>

          <div
            onClick={toggleTheme}
            className="cursor-pointer flex items-center justify-center w-[50px] h-[50px] rounded-full bg-gray-200"
          >
            {theme === "light" ? (
              <BsSunFill className="text-indigo-700 text-[30px]" />
            ) : (
              <BiMoon className="text-indigo-700 text-[30px]" />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
