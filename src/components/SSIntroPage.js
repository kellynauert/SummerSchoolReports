import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import SSDataCard from './SSDataCard';
import SectionTitle from './SectionTitle';
const SSIntroPage = (props) => {
  console.log(props);
  return (
    <Grid
      container
      item
      sm={12}
      direction='row'
      spacing={2}
      style={{
        border: '10px solid #00aeef',
        borderRadius: '12px',
        margin: '12px 0',
        display: 'block',
      }}
      justify='center'
      alignItems='flex-end'
      className='page-break'
    >
      <Grid item sm={3} style={{ textAlign: 'left' }}>
        <Typography variant='h5'>Crossroads Education</Typography>
      </Grid>
      <Grid item sm={9} style={{ textAlign: 'right' }}>
        <Typography variant='h5'>Cathedral, Summer 2021</Typography>
      </Grid>

      <Grid item sm={12}>
        <Typography variant='h1'>XR Summer School</Typography>
        <Typography variant='subtitle2'>Program Information</Typography>
      </Grid>
      <Grid
        container
        style={{ textAlign: 'left', padding: '24px' }}
        spacing={2}
      >
        <Grid item sm={6} style={{ marginBottom: '16px' }}>
          <Typography variant='h2'>Waypoints</Typography>

          <Typography variant='h5'>
            An online quiz platform that uses Common Core mathematics standards
            to measure gaps in a diagnostic phase, followed by measuring math
            understanding in the growth phase.
          </Typography>

          <Typography variant='subtitle1' style={{ marginTop: '8px' }}>
            Growth Check-ins
          </Typography>
          <Typography variant='h5'>
            At this point, students have discovered their gaps in math
            understanding and have reviewed the material through tasks on
            Mathspace. Here is where they had a chance to fill in those gaps and
            see growth in their estimated grade level understanding. The more
            check-ins they completed, the more chance they had to show their
            growth.
          </Typography>

          <Typography variant='subtitle1' style={{ marginTop: '8px' }}>
            End of Diagnostic Phase
          </Typography>
          <Typography variant='h5'>
            The Diagnostic Phase consists of 10 check-ins that gives us a base
            grade level estimate for each student. This is the basis from which
            we measure growth.
          </Typography>
        </Grid>

        <Grid item sm={6} style={{ marginBottom: '16px' }}>
          <Typography variant='h2'>Mathspace</Typography>
          <Typography variant='h5'>
            An online mathematics curriculum where students completed tasks in
            order to prepare for the growth phase of Waypoints. Students were
            assigned tasks based on their Waypoints gaps, and those tasks would
            adapt to the student’s performance by asking more or less of the
            questions they needed to see.
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

        <Grid item sm={6} style={{ marginBottom: '16px' }}>
          <Typography variant='h2'>Nexus</Typography>
          <Typography variant='h5'>
            A collaborative tutoring platform where students had access to live
            help from our team of virtual tutors. Students had the opportunity
            to notify a tutor when they had a question, and they navigated their
            questions with the use of a collaborative whiteboard, chat box, and
            other tools.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default SSIntroPage;
