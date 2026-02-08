'use client';

import { BsFileBarGraphFill } from "react-icons/bs";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

import { conta } from "@/app/core/data/conta";
import {portfolio} from "@/app/core/data/portfolio";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CardPortfolio() {

  const totalInvested = portfolio.reduce((acc, asset) => acc + asset.totalValue, 0);

  const data = {
    labels: portfolio.map(asset => asset.assetName),
    datasets: [
        {
            data: portfolio.map(asset => asset.totalValue),
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
                    const asset = portfolio[tooltipItem.dataIndex]
                    const percentage = ((asset.totalValue / totalInvested) * 100).toFixed(2);
                    return `${asset.assetName}: ${percentage}%`; 
                },
            },
        },
    },
  };

  return (
    <div className="w-full flex flex-col  gap-4 min-w-[250] min-h-[250] bg-white rounded-[20px] p-6 shadow-md md:max-h-[310] md:max-w-[270] ">

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
           {portfolio.map((asset, index) => (
                <div key={asset.tokenSymbol} className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: index === 0 ? "#16A34A" : "#D4AF37" }}
                    ></span>
                    <p className="text-sm text-primary-4">
                        {asset.assetName}: R$ {asset.totalValue.toLocaleString("pt-BR")}
                    </p>
                </div>
            ))}  
        </div>
    </div>
  );
}