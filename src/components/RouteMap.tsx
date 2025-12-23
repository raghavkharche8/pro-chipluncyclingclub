import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';
import 'leaflet/dist/leaflet.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

interface GPXPoint {
  lat: number;
  lon: number;
  ele: number;
  distance: number;
}

const RouteMap = () => {
  const [gpxData, setGpxData] = useState<GPXPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGPX = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/raghavkharche8/ChiplunCyclingClub/refs/heads/main/2025-12-23_2724381816_Cyclothon%202025%20Updated.gpx'
        );
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'text/xml');

        const trkpts = xmlDoc.getElementsByTagName('trkpt');
        const points: GPXPoint[] = [];
        let totalDistance = 0;

        for (let i = 0; i < trkpts.length; i++) {
          const lat = parseFloat(trkpts[i].getAttribute('lat') || '0');
          const lon = parseFloat(trkpts[i].getAttribute('lon') || '0');
          const eleNode = trkpts[i].getElementsByTagName('ele')[0];
          const ele = eleNode ? parseFloat(eleNode.textContent || '0') : 0;

          if (i > 0) {
            const prevPoint = points[i - 1];
            const distance = calculateDistance(
              prevPoint.lat,
              prevPoint.lon,
              lat,
              lon
            );
            totalDistance += distance;
          }

          points.push({ lat, lon, ele, distance: totalDistance });
        }

        setGpxData(points);
        setLoading(false);
      } catch (error) {
        console.error('Error loading GPX:', error);
        setLoading(false);
      }
    };

    fetchGPX();
  }, []);

  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const center: [number, number] =
    gpxData.length > 0
      ? [gpxData[Math.floor(gpxData.length / 2)].lat, gpxData[Math.floor(gpxData.length / 2)].lon]
      : [17.5333, 73.5167];

  const routeCoordinates: [number, number][] = gpxData.map((point) => [
    point.lat,
    point.lon,
  ]);

  const chartData = {
    labels: gpxData
      .filter((_, index) => index % 10 === 0)
      .map((point) => `${point.distance.toFixed(1)}km`),
    datasets: [
      {
        label: 'Elevation',
        data: gpxData
          .filter((_, index) => index % 10 === 0)
          .map((point) => point.ele),
        fill: true,
        backgroundColor: 'rgba(255, 107, 53, 0.2)',
        borderColor: '#ff6b35',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#ff6b35',
        borderWidth: 1,
        callbacks: {
          label: (context: any) => `${context.parsed.y.toFixed(0)}m`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#a0a0a0',
          maxRotation: 0,
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#a0a0a0',
          callback: (value: any) => `${value}m`,
        },
      },
    },
  };

  if (loading) {
    return (
      <div className="w-full h-[600px] bg-[#1a1a1a] rounded-3xl flex items-center justify-center border border-white/10">
        <div className="text-white text-lg">Loading route data...</div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="w-full h-[350px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <MapContainer
          center={center}
          zoom={12}
          className="w-full h-full"
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {routeCoordinates.length > 0 && (
            <Polyline
              positions={routeCoordinates}
              pathOptions={{
                color: '#ff6b35',
                weight: 4,
                opacity: 0.8,
              }}
            />
          )}
        </MapContainer>
      </div>

      <div className="w-full h-[200px] bg-[#1a1a1a] rounded-3xl p-6 border border-white/10 shadow-2xl">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default RouteMap;
