```javascript
//In a React Native component

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Missing error handling here!  The app might crash silently.
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {/* ... JSX to render data ... */}
    </View>
  );
};
```