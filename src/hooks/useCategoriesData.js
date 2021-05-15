import { useState, useEffect } from "react";

const API =
  "https://petgram-ianpedraza-hs26ht9s0-ianpedraza.vercel.app/categories";

export const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
};
