import React from "react";
import SensorChart from "../components/SensorChart";


const IoTPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Monitoreo IoT en Tiempo Real</h1>
      <SensorChart sensorId={1} />
    </div>
  );
};

export default IoTPage;

