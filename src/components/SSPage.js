import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import SSDataCard from './SSDataCard';
import SectionTitle from './SectionTitle';
const SSPage = (props) => {
  console.log(props);
  return (
    <div style={{ display: 'block' }} className='page-break'>
      <Grid
        container
        item
        sm={12}
        direction='row'
        // spacing={2}
        style={{
          border: '10px solid #00aeef',
          borderRadius: '12px',
          padding: '8px 18px',
          marginTop: '16px',
        }}
        justify='center'
        alignItems='flex-end'
      >
        <Grid
          container
          item
          alignItems='center'
          style={{ margin: '16px 0' }}
          justify='space-between'
        >
          <Grid item sm={7}>
            <Typography variant='h1' style={{ textAlign: 'left' }}>
              XR Summer School
            </Typography>
          </Grid>
          <Grid
            container
            item
            sm={5}
            style={{
              marginBottom: '8px',
              flexDirection: 'column',
              textAlign: 'right',
            }}
          >
            <Typography variant='subtitle1'>{props.student}</Typography>
            <Typography variant='h5'>Cathedral 2021</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          style={{ textAlign: 'left', marginBottom: '8px' }}
          spacing={2}
        >
          <Grid item sm={6}>
            <Typography variant='subtitle2'>Waypoints</Typography>

            <Typography variant='h5'>
              An online quiz platform that uses Common Core mathematics
              standards to measure gaps in a diagnostic phase, followed by
              measuring math understanding in the growth phase.
            </Typography>

            <Typography variant='subtitle1' style={{ marginTop: '8px' }}>
              Growth Check-ins
            </Typography>
            <Typography variant='h5'>
              At this point, students have discovered their gaps in math
              understanding and have reviewed the material through tasks on
              Mathspace. Here is where they had a chance to fill in those gaps
              and see growth in their estimated grade level understanding. The
              more check-ins they completed, the more chance they had to show
              their growth.
            </Typography>

            <Typography variant='subtitle1' style={{ marginTop: '8px' }}>
              End of Diagnostic Phase
            </Typography>
            <Typography variant='h5'>
              The Diagnostic Phase consists of 10 check-ins that gives us a base
              grade level estimate for each student. This is the basis from
              which we measure growth.
            </Typography>
          </Grid>

          <Grid item sm={6}>
            <Typography variant='subtitle2'>Mathspace</Typography>
            <Typography variant='h5'>
              An online mathematics curriculum where students completed tasks in
              order to prepare for the growth phase of Waypoints. Students were
              assigned tasks based on their Waypoints gaps, and those tasks
              would adapt to the student’s performance by asking more or less of
              the questions they needed to see.
            </Typography>
            <Typography variant='subtitle1' style={{ marginTop: '8px' }}>
              Tasks
            </Typography>
            <Typography variant='h5'>
              Depending on performance in the Diagnostic Phase of Waypoints,
              students were assigned a number of tasks designed to prepare them
              for the gaps they may have had before.
            </Typography>
            <Typography variant='subtitle1' style={{ marginTop: '8px' }}>
              Time Spent Working
            </Typography>
            <Typography variant='h5'>
              Based on the task load, we expected at least 30 minutes of working
              time each day from June 7 to June 23.
            </Typography>
          </Grid>

          <Grid item sm={6}>
            <Typography variant='subtitle2'>Nexus</Typography>
            <Typography variant='h5'>
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
          gridSpace={3}
          data={props.waypointsCheckins}
          item='Growth Check-ins'
          key='checkins'
        />
        <SSDataCard
          gridSpace={3}
          data={props.waypointsStart}
          item='Diagnostic Grade Level'
          key='waypoints-start'
        />
        <SSDataCard
          gridSpace={3}
          data={props.waypointsEnd}
          item='Final Grade Level'
          key='waypoints-end'
        />
        <SSDataCard
          gridSpace={3}
          data={props.waypointsGrowth}
          item='Grade Lvl Growth'
          key='waypoints-growth'
        />
        <SectionTitle text='Mathspace' />

        <SSDataCard
          gridSpace={2}
          data={props.mathspaceTime}
          item='Total Time'
          key='mathspace-total-time'
        />
        <SSDataCard
          gridSpace={2}
          data={props.percentageAttempted}
          item='Tasks Attempted'
          key='tasks-attempted'
        />
        <SSDataCard
          gridSpace={2}
          data={props.percentageCompleted}
          item='Tasks Completed'
          key='tasks-completed'
        />
        <SSDataCard
          gridSpace={2}
          data={props.percentageDays}
          item='Days Active'
          key='days'
        />
        <SSDataCard
          gridSpace={2}
          data={props.mathspaceAvgTime}
          item='Avg Time Per Day'
          key='avg-time-days'
        />

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
          <SectionTitle text='General' />
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
