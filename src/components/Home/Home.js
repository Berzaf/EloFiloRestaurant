import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Reservation from '../Reservation/Reservation';

const useStyles = makeStyles((theme) => ({
  hero: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/glass_wine.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  colorText: {
    color: '#5AFF3D',
  },
  container: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
        <div className={classes.hero}>
            <div className={classes.container}>
                <h1 className={classes.title}>
                    Welcome to <br />
                    <span className={classes.colorText}>EloFilo Restaurant</span>
                </h1>
                <Reservation />
        
        </div>
             <CssBaseline />
        </div>
        
  );
}