import React from 'react';
import Header from '../Header/Header';
import { Container } from '@mui/material';
import './AboutPage.css'

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <>
    <Container>
    <header>
      <Header />
    </header>
    <div>
      <p>The 21 app allows you to keep a detailed record of your 3 on 3, pickup
        basketball statistics. This app will keep your past game logs and will 
        calulate your gamescore which is a stat created by John Hollinger to give a
        rough measurement for a player's productivity for a single game. This app will
        also keep track of your average stats as your career progresses.  
      </p>
      <div>
        <h3>How to Play</h3>
        <p>First you have to find six friends that you split into two teams 
          of three players. The game goes to 21 scoring by ones except if the 
          shot is made pass the three point line, which count as two points.
          The team that picked players seconds starts with the ball. 
          After every possession the other team must clear the ball by
          passing or dribbling the ball beyond the three point line. 
          The game ends when a team hits 21 points but if the game is at 20-20, the 
          game continues until one team leads by two points.   </p>
      </div>
    </div>
    </Container>
    </>
  );
}

export default AboutPage;
