import { Grid, Typography } from '@material-ui/core';

const PinkHeader = (props) => {
  return (
    <>
      <Grid item md={4}>
        <hr></hr>
      </Grid>
      <Grid item md={4}>
        <Typography variant='h2'>{props.text}</Typography>
      </Grid>
      <Grid item md={4}>
        <hr></hr>
      </Grid>
    </>
  );
};
export default PinkHeader;
