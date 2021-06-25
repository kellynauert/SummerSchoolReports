import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import SSDataCard from './SSDataCard';
import SectionTitle from './SectionTitle';
import CRELogo from '../images/creLogo.png';

const SSPage = (props) => {
  console.log(props);
  return (
    <div style={{ display: 'block' }} className='page-break'>
      <Grid
        container
        item
        sm={12}
        direction='row'
        style={{
          border: '10px solid #00aeef',
          borderRadius: '12px',
          padding: '16px 16px 36px 16px',
          marginTop: '16px',
        }}
        justify='center'
        alignItems='flex-end'
      >
        <Grid
          container
          item
          alignItems='center'
          justify='space-between'
          style={{ marginBottom: '18px' }}
        >
          <Grid container item sm={6} justify='flex-start'>
            <img src={CRELogo} alt='Logo' style={{ height: '30px' }} />
          </Grid>

          <Grid
            container
            item
            sm={6}
            style={{
              flexDirection: 'column',
            }}
          >
            <Typography variant='infoBold'>{props.student}</Typography>
            <Typography variant='info'>Cathedral High School 2021</Typography>
          </Grid>
          <Grid item sm>
            <Typography variant='pageHeader'>
              XR Summer School Report
            </Typography>
          </Grid>
        </Grid>
        <Grid container style={{ marginBottom: '8px' }} spacing={2}>
          <Grid item sm={6}>
            <Typography variant='sub1'>Waypoints</Typography>

            <Typography variant='body'>
              An online quiz platform that uses Common Core mathematics
              standards to measure gaps in a diagnostic phase, followed by
              measuring math understanding in the growth phase.
            </Typography>

            <Typography variant='sub2'>Growth Check-ins</Typography>
            <Typography variant='body'>
              At this point, students have discovered their gaps in math
              understanding and have reviewed the material through tasks on
              Mathspace. Here is where they had a chance to fill in those gaps
              and see growth in their estimated grade level understanding. The
              more check-ins they completed, the more chance they had to show
              their growth.
            </Typography>

            <Typography variant='sub2'>End of Diagnostic Phase</Typography>
            <Typography variant='body'>
              The Diagnostic Phase consists of 10 check-ins that gives us a base
              grade level estimate for each student. This is the basis from
              which we measure growth.
            </Typography>
          </Grid>

          <Grid item sm={6}>
            <Typography variant='sub1'>Mathspace</Typography>
            <Typography variant='body'>
              An online mathematics curriculum where students completed tasks in
              order to prepare for the growth phase of Waypoints. Students were
              assigned tasks based on their Waypoints gaps, and those tasks
              would adapt to the student’s performance by asking more or less of
              the questions they needed to see.
            </Typography>
            <Typography variant='sub2'>Tasks</Typography>
            <Typography variant='body'>
              Depending on performance in the Diagnostic Phase of Waypoints,
              students were assigned a number of tasks designed to prepare them
              for the gaps they may have had before.
            </Typography>
            <Typography variant='sub2'>Time Spent Working</Typography>
            <Typography variant='body'>
              Based on the task load, we expected at least 30 minutes of working
              time each day from June 7 to June 23.
            </Typography>
          </Grid>

          <Grid item sm={6}>
            <Typography variant='sub1'>Nexus</Typography>
            <Typography variant='body'>
              A collaborative tutoring platform where students had access to
              live help from our team of virtual tutors. Students had the
              opportunity to notify a tutor when they had a question, and they
              navigated their questions with the use of a collaborative
              whiteboard, chat box, and other tools.
            </Typography>
          </Grid>
        </Grid>
        <SectionTitle text='Waypoints' />

        <SSDataCard
          data={props.waypointsCheckins}
          item='Growth Check-ins'
          key='checkins'
        />
        <SSDataCard
          data={props.waypointsStart}
          item='Diagnostic Grade Level'
          key='waypoints-start'
        />
        <SSDataCard
          data={props.waypointsEnd}
          item='Final Grade Level'
          key='waypoints-end'
        />
        <SSDataCard
          data={props.waypointsGrowth}
          item='Grade Lvl Growth'
          key='waypoints-growth'
        />
        <SectionTitle text='Mathspace' />
        <Grid container item sm={12}>
          <SSDataCard
            data={props.mathspaceTime}
            item='Total Time'
            key='mathspace-total-time'
          />
          <SSDataCard
            data={props.percentageAttempted}
            item='Tasks Attempted'
            key='tasks-attempted'
          />
          <SSDataCard
            data={props.percentageCompleted}
            item='Tasks Completed'
            key='tasks-completed'
          />
          <SSDataCard
            data={props.percentageDays}
            item='Days Active'
            key='days'
          />
          <SSDataCard
            data={props.mathspaceAvgTime}
            item='Avg Time Per Day'
            key='avg-time-days'
          />
        </Grid>
        <Grid container item sm={6} style={{ paddingRight: '24px' }}>
          <SectionTitle text='Nexus' />
          <SSDataCard
            gridSpace={6}
            data={props.nexusTime}
            item='Total Time'
            key='nexus-total-time'
          />
          <SSDataCard
            gridSpace={6}
            data={props.nexusQuestions}
            item='Questions Asked'
            key='nexus-questions-asked'
          />
        </Grid>
        <Grid
          container
          item
          sm={6}
          justify='center'
          style={{ paddingLeft: '24px' }}
        >
          <SectionTitle text='    General    ' />
          <SSDataCard
            gridSpace={12}
            data={props.totalTime}
            item='Total Time on Mathspace and Nexus'
            key='total-time'
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default SSPage;
