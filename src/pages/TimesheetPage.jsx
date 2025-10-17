import React from "react";
import TimesheetHeader from "../components/TimesheetHeader";
import TimesheetFooter from "../components/TimesheetFooter";
import { useNavigate } from "react-router-dom";

const timesheetData = [
  { week: 1, date: "1 - 5 January, 2024", status: "COMPLETED" },
  { week: 2, date: "8 - 12 January, 2024", status: "COMPLETED" },
  { week: 3, date: "15 - 19 January, 2024", status: "INCOMPLETE" },
  { week: 4, date: "22 - 26 January, 2024", status: "COMPLETED" },
  { week: 5, date: "28 January - 1 February, 2024", status: "MISSING" },
];

const statusStyles = {
  COMPLETED: "bg-green-100 text-green-800",
  INCOMPLETE: "bg-yellow-100 text-yellow-800",
  MISSING: "bg-pink-100 text-pink-800",
};

export default function TimesheetPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* HEADER */}
      <TimesheetHeader />
      {/* MAIN CONTENT */}
      <main className="flex-grow">
        <div className="px-4 md:px-32 mt-5 mx-6 mb-4">
          <div className="bg-white rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Your Timesheets
            </h2>

            {/* Filters */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div>
                <select
                  id="date-range"
                  className="leading-[125%] w-full p-3 rounded-lg border border-gray-300 text-gray-500 text-sm"
                >
                  <option>Date Range</option>
                </select>
              </div>

              <div>
                <select
                  id="status"
                  className="leading-[125%] w-full p-3 rounded-lg border border-gray-300 text-gray-500 text-sm"
                >
                  <option>Status</option>
                </select>
              </div>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] border border-gray-50">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {["Week #", "Date", "Status", "Actions"].map((header) => (
                      <th
                        key={header}
                        scope="col"
                        className={`p-4 ${header === "Actions"
                          ? "text-right"
                          : "text-left"
                          } leading-[150%] text-xs font-semibold text-gray-500 uppercase tracking-wider`}
                      >
                        {header !== "Actions" ? (
                          <button
                            className={`flex items-center ${header === "Week #" ? "justify-between w-full" : "space-x-1"
                              }`}
                          >
                            <span>{header}</span>
                            <span className="material-icons text-base pl-3">
                              arrow_downward
                            </span>
                          </button>

                        ) : (
                          header
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {timesheetData.map((row) => (
                    <tr key={row.week}>
                      <td className="bg-gray-50 p-4 text-sm font-medium text-gray-900">
                        {row.week}
                      </td>
                      <td className="p-4 text-sm text-gray-500">
                        {row.date}
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2 inline-flex text-xs leading-[150%] font-medium rounded-md ${statusStyles[row.status]
                            }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="p-4 text-right text-[16px] font-normal">
                        <a
                          onClick={() => navigate("/timesheet/week")}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {row.status === "INCOMPLETE"
                            ? "Update"
                            : row.status === "MISSING"
                              ? "Create"
                              : "View"}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <select
                  className="leading-5 w-full py-2 px-3 bg-gray-50 rounded-lg border border-gray-300 text-gray-500 text-sm"
                >
                  <option>5 per page</option>
                  <option>10 per page</option>
                  <option>20 per page</option>
                </select>
              </div>
              <nav
                aria-label="Pagination"
                className="relative z-0 inline-flex items-center rounded-md shadow-sm "
              >
                <a
                  href="#"
                  className="px-3 py-2 rounded-l-lg border border-gray-300 bg-white text-sm leading-5 font-medium text-body hover:bg-gray-50"
                >
                  <span className="">Previous</span>
                </a>
                {[1, 2, 3,"...", 10].map((page, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-current={page === 3 ? "page" : undefined}
                    className={`px-4 py-2 border border-gray-300 text-sm font-medium ${page === 3
                      ? "z-10 bg-gray-50 text-primary"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    {page}
                  </a>
                ))}
                <a
                  href="#"
                  className="px-2 py-2 rounded-r-lg border border-gray-300 bg-white text-sm font-medium text-body hover:bg-gray-50"
                >
                  <span className="">Next</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <TimesheetFooter />
    </div>
  );
}
