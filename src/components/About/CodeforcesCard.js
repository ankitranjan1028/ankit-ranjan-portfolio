import React, { useEffect, useState } from "react";
import { SiCodeforces } from "react-icons/si";

const HANDLE = "ranjan_ankit28";
const PROFILE_URL = `https://codeforces.com/profile/${HANDLE}`;

const RANK_BANDS = [
  { min: 0, max: 1200, color: "rgba(156, 163, 175, 0.18)" },
  { min: 1200, max: 1400, color: "rgba(34, 197, 94, 0.18)" },
  { min: 1400, max: 1600, color: "rgba(34, 211, 238, 0.18)" },
  { min: 1600, max: 1900, color: "rgba(59, 130, 246, 0.18)" },
  { min: 1900, max: 2100, color: "rgba(168, 85, 247, 0.18)" },
  { min: 2100, max: 3000, color: "rgba(249, 115, 22, 0.18)" },
];

function getRankColor(rating) {
  if (rating < 1200) return "#9ca3af";
  if (rating < 1400) return "#22c55e";
  if (rating < 1600) return "#22d3ee";
  if (rating < 1900) return "#3b82f6";
  if (rating < 2100) return "#a855f7";
  return "#f97316";
}

function formatMonth(ts) {
  return new Date(ts * 1000).toLocaleDateString("en-US", {
    month: "short",
    year: "2-digit",
  });
}

function ContestRatingChart({ data }) {
  if (!data.length) return null;

  const width = 520;
  const height = 180;
  const pad = { top: 10, right: 14, bottom: 28, left: 38 };
  const innerW = width - pad.left - pad.right;
  const innerH = height - pad.top - pad.bottom;

  const ratings = data.map((d) => d.newRating);
  const minR = Math.max(800, Math.min(...ratings) - 80);
  const maxR = Math.max(...ratings) + 80;

  const toY = (rating) =>
    pad.top + innerH - ((rating - minR) / (maxR - minR)) * innerH;

  const toX = (i) => pad.left + (i / Math.max(data.length - 1, 1)) * innerW;

  const points = data.map((d, i) => `${toX(i)},${toY(d.newRating)}`).join(" ");
  const last = data[data.length - 1];
  const lineColor = getRankColor(last.newRating);

  const yTicks = [];
  for (let r = Math.ceil(minR / 100) * 100; r <= maxR; r += 100) {
    yTicks.push(r);
  }

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="cf-rating-chart" aria-label="Contest rating history">
      <clipPath id="cf-chart-clip">
        <rect x={pad.left} y={pad.top} width={innerW} height={innerH} rx="4" />
      </clipPath>

      <g clipPath="url(#cf-chart-clip)">
        {RANK_BANDS.map((band) => {
          const yTop = toY(Math.min(band.max, maxR));
          const yBottom = toY(Math.max(band.min, minR));
          if (yBottom <= yTop) return null;
          return (
            <rect
              key={band.min}
              x={pad.left}
              y={yTop}
              width={innerW}
              height={yBottom - yTop}
              fill={band.color}
            />
          );
        })}
      </g>

      <rect
        x={pad.left}
        y={pad.top}
        width={innerW}
        height={innerH}
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        rx="4"
      />

      {yTicks.map((r) => (
        <g key={r}>
          <line
            x1={pad.left}
            y1={toY(r)}
            x2={pad.left + innerW}
            y2={toY(r)}
            stroke="rgba(255,255,255,0.05)"
          />
          <text x={6} y={toY(r) + 3} className="cf-chart-label">
            {r}
          </text>
        </g>
      ))}

      <polyline
        fill="none"
        stroke={lineColor}
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        points={points}
      />

      {data.map((d, i) => (
        <circle
          key={d.ratingUpdateTimeSeconds}
          cx={toX(i)}
          cy={toY(d.newRating)}
          r="3.5"
          fill={lineColor}
          stroke="#07070d"
          strokeWidth="1"
        >
          <title>
            {d.contestName}: {d.newRating} ({d.rank})
          </title>
        </circle>
      ))}

      {data.length > 1 && (
        <>
          <text x={pad.left} y={height - 8} className="cf-chart-label">
            {formatMonth(data[0].ratingUpdateTimeSeconds)}
          </text>
          <text x={width - pad.right - 36} y={height - 8} className="cf-chart-label">
            {formatMonth(last.ratingUpdateTimeSeconds)}
          </text>
        </>
      )}
    </svg>
  );
}

function CodeforcesCard() {
  const [ratingHistory, setRatingHistory] = useState([]);
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const [ratingRes, userRes] = await Promise.all([
          fetch(`https://codeforces.com/api/user.rating?handle=${HANDLE}`),
          fetch(`https://codeforces.com/api/user.info?handles=${HANDLE}`),
        ]);

        const ratingData = await ratingRes.json();
        const userData = await userRes.json();

        if (ratingData.status !== "OK" || userData.status !== "OK") {
          setError(true);
          return;
        }

        setRatingHistory(ratingData.result);
        setStats({
          rating: userData.result[0].rating,
          maxRating: userData.result[0].maxRating,
          rank: userData.result[0].rank,
          contests: ratingData.result.length,
        });
      } catch {
        setError(true);
      }
    }

    load();
  }, []);

  if (error) {
    return (
      <a href={PROFILE_URL} target="_blank" rel="noreferrer" className="cf-panel cf-panel-error">
        View {HANDLE} on Codeforces →
      </a>
    );
  }

  if (!stats) {
    return <div className="cf-panel cf-panel-loading">Loading Codeforces data…</div>;
  }

  return (
    <div className="cf-panel">
      <a href={PROFILE_URL} target="_blank" rel="noreferrer" className="cf-panel-header">
        <SiCodeforces className="coding-profile-icon" />
        <span className="cf-panel-handle">{HANDLE}</span>
        <span className="cf-panel-rank" style={{ color: getRankColor(stats.rating) }}>
          {stats.rating} · {stats.rank}
        </span>
      </a>

      <div className="cf-panel-stats">
        <span><strong>{stats.maxRating}</strong> max rating</span>
        <span><strong>{stats.contests}</strong> contests</span>
      </div>

      <ContestRatingChart data={ratingHistory} />
    </div>
  );
}

export default CodeforcesCard;
