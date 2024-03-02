import {useState, useEffect} from 'react';

export default function useFetchAndUpdateData(apiFunc, category) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAndUpdate = async () => {
      const storageKey = `data_${category}`;
      const lastUpdatedKey = `${storageKey}_lastUpdated`;

      const storedData = localStorage.getItem(storageKey);
      const lastUpdated = localStorage.getItem(lastUpdatedKey);

      const now = new Date().getTime();
      const updateInterval = 24 * 60 * 60 * 1000; // 예: 24시간

      try {
        let response;
        if (!storedData || !lastUpdated || now - parseInt(lastUpdated, 10) > updateInterval) {
          response = await apiFunc(category);
          localStorage.setItem(storageKey, JSON.stringify(response));
          localStorage.setItem(lastUpdatedKey, now.toString());
        } else {
          response = JSON.parse(storedData);
        }
        setData(response);
      } catch (e) {
        console.error('Error fetching data:', e);
        setError(e);
        // 실패 시 로컬 스토리지의 데이터 반환 (있는 경우)
        setData(storedData ? JSON.parse(storedData) : null);
      } finally {
        setLoading(false);
      }
    };

    fetchAndUpdate();
  }, [apiFunc, category]);

  return {data, loading, error};
}
