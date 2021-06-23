import { Grid, Typography } from '@material-ui/core';

const SSDataCard = ({ data, item, gridSpace }) => {
  const timeFormat = (value) => {
    let removedHrs = value.replace(/(hrs|mins|%)/g, '').trim();
    return removedHrs;
  };
  return (
    <Grid
      item
      sm
      style={{
        marginTop: '24px',
        marginBottom: '24px',
      }}
      justifyContent='baseline'
      alignItems='center'
    >
      {data?.includes('hrs') ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
          }}
        >
          <Typography variant='h3'>{timeFormat(data)}</Typography>{' '}
          <Typography variant='body2'>hrs</Typography>
        </div>
      ) : data?.includes('mins') ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
          }}
        >
          <Typography variant='h3'>{timeFormat(data)}</Typography>{' '}
          <Typography variant='body2'>mins</Typography>
        </div>
      ) : data?.includes('%') ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
          }}
        >
          <Typography variant='h3'>{timeFormat(data)}</Typography>{' '}
          <Typography variant='body3'>%</Typography>
        </div>
      ) : (
        <Typography variant='h3' style={{ whiteSpace: 'nowrap' }}>
          {data}
        </Typography>
      )}
      <Typography variant='h4' style={{ whiteSpace: 'nowrap' }}>
        {item}
      </Typography>
    </Grid>
  );
};
export default SSDataCard;
