import React, { useState } from 'react';

const TimesheetWeekTasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      date: 'Jan 21',
      items: [
        { id: 101, name: 'Homepage Development', hours: 4, project: 'Project Name' },
        { id: 102, name: 'Homepage Development', hours: 4, project: 'Project Name' }
      ]
    },
    {
      id: 2,
      date: 'Jan 22',
      items: [
        { id: 201, name: 'Homepage Development', hours: 4, project: 'Project Name' },
        { id: 202, name: 'Homepage Development', hours: 4, project: 'Project Name' },
        { id: 203, name: 'Homepage Development', hours: 4, project: 'Project Name' }
      ]
    }
  ]);

  const [showMenu, setShowMenu] = useState(null);

  const totalHours = tasks.reduce((sum, day) => 
    sum + day.items.reduce((daySum, item) => daySum + item.hours, 0), 0
  );

  const targetHours = 40;
  const percentage = (totalHours / targetHours) * 100;

  const addTask = (dateId) => {
    const newTask = {
      id: Date.now(),
      name: 'New Task',
      hours: 0,
      project: 'Project Name'
    };
    
    setTasks(tasks.map(day => 
      day.id === dateId 
        ? { ...day, items: [...day.items, newTask] }
        : day
    ));
  };

  const deleteTask = (dateId, taskId) => {
    setTasks(tasks.map(day => 
      day.id === dateId 
        ? { ...day, items: day.items.filter(item => item.id !== taskId) }
        : day
    ));
    setShowMenu(null);
  };

  return (
    <div className="text-gray-900">
      <div className="">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl leading-none font-bold text-gray-900">
              This week's timesheet
            </h1>
            <p className="text-sm leading-[150%] text-gray-500">
              21 - 26 January, 2024
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium text-gray-900">
                {totalHours}/{targetHours} hrs
              </span>
               <span className="text-xs leading-[150%] font-medium text-left text-gray-500 self-end">
                {Math.round(percentage)}%
              </span>
              <div className="w-32 bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-orange-500 h-1.5 rounded-full transition-all duration-300" 
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
               
            </div>
          </div>
        </header>

        <main className="space-y-8">
          {tasks.map((day) => (
            <div key={day.id} className="lg:grid lg:grid-cols-[150px_1fr] lg:gap-6">
              <h2 className="text-lg font-semibold mb-3 pt-4 lg:mb-0 lg:pt-0">
                {day.date}
              </h2>
              <div className="space-y-3">
                {day.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white px-3 py-[2.5px] rounded-lg flex items-center justify-between border border-gray-200"
                  >
                    <span className="font-medium text-base leading-[150%] text-gray-900">{item.name}</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-normal text-gray-400">
                        {item.hours} hrs
                      </span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                        {item.project}
                      </span>
                      <div className="relative">
                        <button
                          onClick={() => setShowMenu(showMenu === item.id ? null : item.id)}
                          className="text-gray-500 hover:text-gray-600 p-1"
                        >
                          •••
                        </button>
                        {showMenu === item.id && (
                          <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                            <button
                              className="block w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                              onClick={() => setShowMenu(null)}
                            >
                              Edit
                            </button>
                            <button
                              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                              onClick={() => deleteTask(day.id, item.id)}
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => addTask(day.id)}
                  className="w-full border border-dashed border-blue-700 rounded-lg px-3 py-[2.5px] flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <span className="text-base font-medium mr-2">+</span>
                  <span className="text-base font-medium">Add new task</span>
                </button>
              </div>
            </div>
          ))}

        </main>
      </div>
    </div>
  );
};

export default TimesheetWeekTasks;