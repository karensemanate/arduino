import { useEffect, useState } from "react";

interface SensorData {
  time: string;
  valor: number;
}

const useSensorData = (sensorId: number) => {
  const [data, setData] = useState<SensorData[]>([]);

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8000/ws/sensor/${sensorId}/`);

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("📡 Datos recibidos:", message);

      if (message.valor !== undefined) {
        setData((prevData) => [
          ...prevData.slice(-10),
          { time: new Date().toLocaleTimeString(), valor: message.valor }
        ]);
      }
    };

    return () => socket.close();
  }, [sensorId]);

  return data;
};

export default useSensorData;

