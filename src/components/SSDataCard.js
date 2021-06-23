import { Grid, Typography } from '@material-ui/core';

const SSDataCard = ({ data, item, gridSpace }) => {
  const timeFormat = (value) => {
    let removedHrs = value.replace(/(hrs|mins|%|\+)/g, '').trim();
    return removedHrs;
  };
  return (
    <Grid item sm justifyContent='baseline' alignItems='center'>
      {data?.includes('hrs') ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
          }}
        >
          <Typography variant='data'>{timeFormat(data)}</Typography>{' '}
          <Typography variant='timeFormat'>hrs</Typography>
        </div>
      ) : data?.includes('mins') ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
          }}
        >
          <Typography variant='data'>{timeFormat(data)}</Typography>{' '}
          <Typography variant='timeFormat'>mins</Typography>
        </div>
      ) : data?.includes('%') ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant='data'>{timeFormat(data)}</Typography>{' '}
          <Typography variant='symbolFormat'>%</Typography>
        </div>
      ) : data?.includes('+') ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant='symbolFormat'>+</Typography>
          <Typography variant='data'>{timeFormat(data)}</Typography>{' '}
        </div>
      ) : (
        <Typography variant='data' style={{ whiteSpace: 'nowrap' }}>
          {data}
        </Typography>
      )}
      <Typography variant='dataDescription' style={{ whiteSpace: 'nowrap' }}>
        {item}
      </Typography>
    </Grid>
  );
};
export default SSDataCard;
