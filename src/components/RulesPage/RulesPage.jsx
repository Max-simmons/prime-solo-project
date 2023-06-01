import React from 'react';
import Header from '../Header/Header';
import { Container } from '@mui/material';
import './RulesPage.css'
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

function RulesPage() {

  const history = useHistory();

  const handleHome = () => {
    history.push('/user');
}

return(
    <>
    <Container>
    <header>
        <Header />
    </header>
    <div>
    <h3>Rules</h3>
    <p>First you have to find six friends that you split into two teams 
      of three players. The game goes to 21 scoring by ones except if the 
      shot is made pass the three point line, which count as two points.
      The team that picked players seconds starts with the ball. 
      After every possession the other team must clear the ball by
      passing or dribbling the ball beyond the three point line. 
      The game ends when a team hits 21 points but if the game is at 20-20, the 
      game continues until one team leads by two points.</p>
  </div>
  <div>
    <Button onClick={handleHome} variant='contained'>Back</Button>
  </div>

  </Container>
  </>
)
}

export default RulesPage;