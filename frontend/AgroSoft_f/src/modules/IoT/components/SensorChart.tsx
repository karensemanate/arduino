import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import useSensorData from "../hooks/useSensorData";

interface Props {
  sensorId: number;
}

const SensorChart: React.FC<Props> = ({ sensorId }) => {
  const data = useSensorData(sensorId);

  return (
    <div className="p-4 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">Sensor {sensorId}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[0, 1023]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="valor" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SensorChart;




