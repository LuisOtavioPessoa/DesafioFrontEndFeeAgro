'use client';

import { BsFileBarGraphFill } from "react-icons/bs";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CardPortfolio() {

  const data = {
    labels: ["Soja", "Milho"],
    datasets: [
        {
            data: [65,35],
            backgroundColor: ["#16A34A", "#D4AF37"], 
            borderColor: ["#fff", "#fff"],
            borderWidth: 2,
        },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            callbacks: {
                label: function (tooltipItem: any) {
                    const value = data.datasets[0].data[tooltipItem.dataIndex];
                    return `${data.labels[tooltipItem.dataIndex]}: ${value}%`;
                },
            },
        },
    },
  };

  return (
    <div className="w-full flex flex-col  gap-4 min-w-[250px] min-h-[250px] bg-white rounded-[20px] p-6 shadow-md">

        <div className="flex items-center gap-2">
            <BsFileBarGraphFill
                className="text-[25px]  text-primary-1"
            />
            <p className="text-primary-4 text-[18px]">
                Portfolio Agro:
            </p>
        </div>

        <div className="flex justify-center">
            <div className="w-36 h-36">
                <Doughnut data={data} options={options}/>
            </div>
        </div>

        <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#16A34A]"></span>
                <p className="text-sm text-primary-4">
                    Soja: R$ 5.070
                </p>
            </div>
            <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#D4AF37]"></span>
                <p className="text-sm text-primary-4">
                    Milho: R$ 2.730
                </p>
            </div>
        </div>
    </div>
  );
}