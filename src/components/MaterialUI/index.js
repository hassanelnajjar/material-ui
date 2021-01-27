import {
  Button,
  Card,
  Container,
  Grid,
  CardContent,
  Typography,
  CardActions,
  ButtonGroup,
  CardMedia,
  CardHeader,
  Popover,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useContext, useState } from 'react';

import context from '../Context';

const users = [
  'lina',
  'zain',
  'iman',
  'khamis',
  'hassan',
  'ahmed',
  'alaa',
  'muhammed',
  'maia',
  'haifa',
  'abood',
  'nabil',
];

const useStyle = makeStyles({
  root: {
    background: 'linear-gradient(45deg,#cee484,#26dc9f)',
    margin: 10,
    textAlign: 'center',
  },
});

export default function App() {
  const [logged, setLogged] = useContext(context);
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showPop, setShowPop] = useState({});

  const handleClick = (index, event) => {
    setShowPop((prev) => ({ ...prev, [index]: true }));
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setShowPop({});
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Container>
      <Grid container direction='row' justify='center' alignItems='center'>
        <ButtonGroup>
          <Button
            onClick={() => setLogged(true)}
            variant='outlined'
            color='primary'
            disabled={logged ? true : false}
          >
            Log in
          </Button>
          <Button
            onClick={() => setLogged(false)}
            variant='outlined'
            color='secondary'
            disabled={logged ? false : true}
          >
            Log out
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid container direction='row' justify='center' alignItems='center'>
        {users.map((user, index) => (
          <Card key={index} className={classes.root}>
            <CardHeader />
            <CardMedia
              style={{ height: 0, paddingTop: '56.25%' }}
              image='https://source.unsplash.com/random'
            />
            <CardContent>
              <Typography
                style={{ fontWeight: 600, fontSize: 30 }}
                component='p'
              >
                {user}
              </Typography>
            </CardContent>
            <CardActions>
              <ButtonGroup variant='outlined' color='primary'>
                <Button
                  aria-describedby={open ? `simple-popover-${user}` : undefined}
                  variant='contained'
                  color='primary'
                  onClick={(e) => handleClick(index, e)}
                  disabled={logged ? false : true}
                >
                  Logged
                </Button>
                <Button disabled={logged ? false : true}>Not Logged</Button>
                <Button
                  onClick={(e) => handleClick(index, e)}
                  disabled={logged ? true : false}
                >
                  Guest
                </Button>
              </ButtonGroup>
              <Popover
                id={open ? `simple-popover-${user}` : undefined}
                open={showPop[index]}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Typography component='p'>
                  {logged ? `Welcome ${user} ^_^` : 'You have to log in !!'}
                </Typography>
              </Popover>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}
