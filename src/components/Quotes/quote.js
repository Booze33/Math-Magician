import React, { useEffect, useState } from 'react';

function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = async (category = 'happiness') => {
    const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: 'GET',
      headers: { 'X-Api-Key': 'iOXIllE64HspK+YDSGI6Dw==TxSXPFLZ9bKkMDFo' },
      contentType: 'application/json',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch quote');
    }

    const data = await response.json();
    return data;
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchQuote()
      .then((data) => {
        setQuote(data[Math.floor(Math.random())].quote);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }

  return (
    <div>
      <p>{quote}</p>
    </div>
  );
}

export default Quote;
