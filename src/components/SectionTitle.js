import { Grid, Typography } from '@material-ui/core';

const SectionTitle = ({ text }) => {
  return (
    <Grid
      container
      item
      sm={12}
      style={{ margin: '42px 0 12px 0' }}
      alignItems='center'
    >
      <Grid container item sm style={{ overflow: 'hidden' }}>
        <Typography variant='caption'>
          ───────────────────────────────────────────────────────────────────────────────────────────
        </Typography>
      </Grid>
      <Grid item sm={2} style={{ backgroundColor: 'white', margin: '0 12px' }}>
        <Typography variant='sectionHeader'>{text}</Typography>
      </Grid>
      <Grid item sm style={{ overflow: 'hidden' }}>
        <Typography variant='caption'>
          ───────────────────────────────────────────────────────────────────────────────────────────
        </Typography>
      </Grid>
    </Grid>
  );
};
export default SectionTitle;
