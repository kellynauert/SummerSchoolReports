import { Grid, Typography } from '@material-ui/core';

const BlueHeader = (props) => {
  return (
    <Grid item md={12}>
      <Typography variant='h1'>{props.text}</Typography>
    </Grid>
  );
};
export default BlueHeader;
