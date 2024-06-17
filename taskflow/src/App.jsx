import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const App = () => {
  const [waterLevelData, setWaterLevelData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Water Level',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Adjust data fetching logic based on your backend/communication chosen
        const response = await axios.get('https://your-backend-api-endpoint'); // Replace with your endpoint
        const waterLevels = response.data; // Adjust access based on your data structure

        // Update chart data with fetched values
        setWaterLevelData({
          labels: waterLevels.map((level) => level.timestamp), // Extract timestamps from data
          datasets: [
            {
              label: 'Water Level',
              data: waterLevels.map((level) => level.value), // Extract water level values
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Update data periodically (adjust interval as needed)
    const intervalId = setInterval(fetchData, 5000); // Update every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <>
    <
    </>
    
  );
};

export default App;
