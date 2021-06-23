import React, { useState, useEffect } from 'react';

import SSPage from './SSPage';
const SummerSchoolDisplay = (props) => {
  const [jsonData, setJsonData] = useState();

  useEffect(() => {
    if (localStorage.getItem('summerschool')) {
      setJsonData(JSON.parse(localStorage.getItem('summerschool')));
    }
  }, [props.jsonData]);

  return (
    <div style={{ width: '94%', marginLeft: '3%' }}>
      {jsonData
        ? jsonData.map((data) => (
            <>
              <SSPage
                student={data.student}
                mathspaceId={data.mathspaceId}
                mathspaceTime={data.mathspaceTime}
                nexusTime={data.nexusTime}
                mathspaceDays={data.numberOfDaysWorked}
                percentageDays={data.ofMathspaceDaysWorked}
                percentageAttempted={data.ofMathspaceTasksAttempted}
                percentageCompleted={data.ofMathspaceTasksCompleted}
                tasksCompleted={data.tasksCompleted}
                waypointsCheckins={data.ofWaypointsGrowthCheckinsCompleted}
                nexusQuestions={data.questionsAskedOnNexus}
                tasksAssigned={data.tasksAssigned}
                tasksAttempted={data.tasksAttempted}
                totalTime={data.timeSpentOnMathspaceAndNexusPutTogether}
                waypointsStart={data.waypointsDiagnosticsGradeLvl}
                waypointsEnd={data.waypointsFinalGradeLvl}
                waypointsGrowth={data.waypointsGrowth}
                mathspaceAvgTime={data.averageTimeSpentWorkingPerDayMathspace}
              />
            </>
          ))
        : null}
    </div>
  );
};
export default SummerSchoolDisplay;
