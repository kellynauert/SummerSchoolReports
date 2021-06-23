import { Grid, Typography, Row } from '@material-ui/core';

const SectionTitle = ({ text }) => {
  return (
    <Grid container item sm={12} style={{ marginTop: '24px ' }}>
      <Grid item sm={4} style={{ overflow: 'hidden' }}>
        <Typography
          variant='caption'
          style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
        >
          ────────────────────────────────────────────────────────────
        </Typography>
      </Grid>
      <Grid item sm={4} style={{ backgroundColor: 'white' }}>
        <Typography variant='h2'>{text}</Typography>
      </Grid>
      <Grid item sm={4} style={{ overflow: 'hidden' }}>
        <Typography
          variant='caption'
          style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
        >
          ────────────────────────────────────────────────────────────
        </Typography>
      </Grid>
    </Grid>
  );
};
export default SectionTitle;
