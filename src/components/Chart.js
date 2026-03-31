import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);


export default function Chart() {
  const data = {
    labels: ["Math", "Science", "English"],
    datasets: [
      {
        label: "Marks",
        data: [80, 90, 75],
        backgroundColor: "blue"
      }
    ]
  };

  return <Bar data={data} />;
}