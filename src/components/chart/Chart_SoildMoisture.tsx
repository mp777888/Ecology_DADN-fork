import Chart from "./Chart";
import { API_ENDPOINTS } from "../../constants/Api";
import useFetch from "../../hooks/useFetch";

const SolidMoisture = () => {
  const { data, loading, error } = useFetch<{ id: string; timestamp: string; numericValue: number }[]>(
    API_ENDPOINTS.SENSOR_SOIL_MOISTURE,
    { limit: 20 },
    30000
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <Chart data={data || []} color="#ff7300" title="Soil Moisture Data" />
    </div>
  );
};

export default SolidMoisture;
