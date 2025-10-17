import React from "react";
import TimesheetWeekTasks from "../components/TimesheetWeekTasks";
import TimesheetHeader from "../components/TimesheetHeader";
import TimesheetFooter from "../components/TimesheetFooter";

export default function TimesheetWeekPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* HEADER */}
     
      <TimesheetHeader />
      {/* MAIN CONTENT */}
      <main className="flex-grow">
        <div className="px-4 md:px-32 mt-5 mx-6 mb-4">
          <div className="bg-white rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] p-6">
           <TimesheetWeekTasks />
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <TimesheetFooter />
    </div>
  );
}
