import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./Result.css";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const Result = () => {
  const [results, setResults] = useState([]);
  const [winner, setWinner] = useState("N/A");
  const [totalVotes, setTotalVotes] = useState(0);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/results");

        // Backend gives { totalVotes, parties:[], winner:"string" }
        setResults(Array.isArray(data.parties) ? data.parties : []);
        setTotalVotes(data.totalVotes || 0);
        setWinner(data.winner || "N/A");

        console.log("API Response:", data);
      } catch (err) {
        console.error("Error fetching results:", err);
      }
    };

    fetchResults();
  }, []);

  const pieData = {
    labels: results.map((r) => r.party),
    datasets: [
      {
        data: results.map((r) => r.votes),
        backgroundColor: results.map((_, idx) =>
          idx === 0
            ? "#28a745"
            : idx === 1
            ? "#007bff"
            : idx === 2
            ? "#ffc107"
            : getRandomColor()
        ),
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      datalabels: {
        color: "#fff",
        formatter: (_, context) => {
          const percentage = results[context.dataIndex]?.percentage;
          return percentage ? `${percentage}%` : "";
        },
        font: { weight: "bold", size: 14 },
      },
      legend: { position: "bottom" },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const party = results[tooltipItem.dataIndex];
            return `${party.party}: ${party.votes} votes (${party.percentage}%)`;
          },
        },
      },
    },
  };

  function getRandomColor() {
    const r = Math.floor(Math.random() * 156 + 100);
    const g = Math.floor(Math.random() * 156 + 100);
    const b = Math.floor(Math.random() * 156 + 100);
    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <div className="result-container">
      <h1>Election Results</h1>

      <div className="summary">
        <div className="winner-summary">
          <h2>{winner}</h2>
          <p>Winner Party</p>
        </div>
        <div>
          <h2>{totalVotes}</h2>
          <p>Total Votes</p>
        </div>
      </div>

      <h2 style={{ textAlign: "center", margin: "30px 0 10px" }}>
        Party Results
      </h2>

      <table className="result-table">
        <thead>
          <tr>
            <th>Party</th>
            <th>Votes</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {results.map((party, idx) => (
            <tr
              key={idx}
              className={party.party === winner ? "winner-row" : ""}
            >
              <td>{party.party}</td>
              <td>{party.votes}</td>
              <td>{party.percentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pie-chart">
        <Pie data={pieData} options={pieOptions} />
      </div>
    </div>
  );
};

export default Result;
