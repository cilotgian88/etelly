"use client";

export default function FloodPredictionPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">
        Flood Prediction
      </h1>

      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="relative h-[350px] w-full border-4 border-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-lg">
            Flood Prediction Map
          </span>

          <div className="absolute left-3 top-3 flex flex-col gap-2">
            <button className="w-8 h-8 rounded bg-white border shadow text-lg">+</button>
            <button className="w-8 h-8 rounded bg-white border shadow text-lg">−</button>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Rainfall
          </h2>
          <span className="text-sm text-gray-500">
            Time: 2026-01-25 21:50
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr className="bg-red-700 text-white">
                <th className="p-3">Station Name</th>
                <th className="p-3">Current (mm)</th>
                <th className="p-3">30 min</th>
                <th className="p-3">1 hr</th>
                <th className="p-3">3 hr</th>
                <th className="p-3">Risk Level</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b">
                <td className="p-3">Tanza North</td>
                <td>12.0</td>
                <td>18.5</td>
                <td>28.0</td>
                <td>45.5</td>
                <td className="font-bold text-red-600">HIGH</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Tanza South</td>
                <td>10.5</td>
                <td>15.0</td>
                <td>25.0</td>
                <td>38.0</td>
                <td className="font-bold text-red-600">HIGH</td>
              </tr>
              <tr>
                <td className="p-3">Panghulo</td>
                <td>8.0</td>
                <td>12.0</td>
                <td>18.5</td>
                <td>32.0</td>
                <td className="font-bold text-orange-500">MEDIUM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
