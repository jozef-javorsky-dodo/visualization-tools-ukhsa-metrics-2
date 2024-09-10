"use client";

import { useState, useEffect } from "react";
import { getCasesByDay, getPCRCountByDay } from "../services/api";
import ChartCard from "../components/ChartCard";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [casesData, setCasesData] = useState([]);
  const [pcrData, setPcrData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cases = await getCasesByDay();
      const pcr = await getPCRCountByDay();

      setCasesData(cases.results);
      setPcrData(pcr.results);
    };

    fetchData();
  }, []);

  return (
    <html lang="en">
      <head>
        <title>📊 Visualization Tools: UKHSA Metrics 2 📈📉</title>
        <meta
          name="description"
          content="Visualization Tools: UKHSA metrics."
        />
        <meta name="keywords" content="SPA, web-app, TypeScript, Next.js" />
        <meta
          name="author"
          content="jozef.javorsky.dodo@gmail.com, github.com/jozef-javorsky-dodo, g.dev/jozef-javorsky-dodo"
        />
        <link
          href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAABgSURBVDhPYwCC/xRihv9g8AlVAsQHATgbC4aqRWiAsdH5cADTDAVQeUwN2PgwMSziCEkkwaFqAEwSh0Jc4ggOsgHI4jA8agCRBuBQhCKPJo4qgJTGMTAMoImjcEjEDP8Bd2iMgD95onIAAAAASUVORK5CYII="
          sizes="16x16"
          type="image/x-icon"
          rel="icon"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <script
          type="text/javascript"
          src="https://www.gstatic.com/charts/loader.js"
        ></script>
      </head>
      <body>
        <div className="min-h-screen bg-gray-100">
          <header className="bg-white py-4 shadow-md">
            <div className="container mx-auto text-center">
              <h1 className="text-2xl font-bold text-blue-500">
                📊 Visualization Tools: UKHSA Metrics 2 📈📉
              </h1>
            </div>
          </header>

          <main className="container mx-auto p-4">
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">
                  📊 Visualization Tools: UKHSA Metrics 2 📈📉
                </h2>
                <div className="space-x-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Export to PDF
                  </button>
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    Notes
                  </button>
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    Filter
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ChartCard
                title="COVID-19 Cases By Day"
                data={casesData}
                id="cases-chart"
              />
              <ChartCard
                title="COVID-19 Testing PCR Count by Day"
                data={pcrData}
                id="pcr-chart"
              />
            </div>
          </main>
          <footer className="bg-white py-4 shadow-md mt-4">
            <div className="container mx-auto text-center text-gray-600">
              <a
                href="mailto:jozef.javorsky.dodo@gmail.com"
                className="mr-2 hover:text-blue-500"
              >
                jozef.javorsky.dodo@gmail.com
              </a>
              |{" "}
              <a
                href="https://github.com/jozef-javorsky-dodo"
                className="mx-2 hover:text-blue-500"
              >
                GitHub
              </a>{" "}
              |{" "}
              <a
                href="https://g.dev/jozef-javorsky-dodo"
                className="ml-2 hover:text-blue-500"
              >
                Google Dev
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
};
export default Layout;
