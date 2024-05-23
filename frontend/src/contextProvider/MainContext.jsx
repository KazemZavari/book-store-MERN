import { useState, useEffect, createContext, Children } from "react";
import axios from "axios";

export const mainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <mainContext.Provider
      value={{
        loading,
        setLoading,
        books,
        setBooks,
        showType,
        setShowType,
      }}
    >
{ children }
    </mainContext.Provider>
  );
};

export default MainContextProvider;
