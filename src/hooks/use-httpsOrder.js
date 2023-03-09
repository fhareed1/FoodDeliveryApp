import { useCallback, useEffect, useState } from 'react';

const useHttps = () => {
  // The useState so i can push
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  // The meal fetcher Function
  const fetchMealsHandler = useCallback(async () => {
    setError(null);
    try {
      const url =
        'https://react-http-f84a6-default-rtdb.firebaseio.com/meals.json';
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      // To bring out the values of the data being fetched
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error.message);
    }
  },[]);


  useEffect(() => {
    fetchMealsHandler()
  },[fetchMealsHandler])

  // form handler
  // const formSubmitHandler = (event) => {
  //   event.preventDefault()

  // };





  return {
    meals,
    error,
    loading,
    fetchMealsHandler,
  };
};

export default useHttps;
