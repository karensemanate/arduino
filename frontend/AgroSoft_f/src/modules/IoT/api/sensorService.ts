import axios from "axios";
import { Sensor } from "../types/sensorTypes";

const API_URL = "http://127.0.0.1:8000/api/sensores/";

export const fetchSensores = async (): Promise<Sensor[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};