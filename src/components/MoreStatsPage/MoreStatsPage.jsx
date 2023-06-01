import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Container } from '@mui/material';
import { ButtonGroup } from '@mui/material'
import './MoreStatsPage.css';



function MoreStatsPage() {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const gameId = params.id;
    const game = useSelector(store => store. fullGameStatsReducer);

    useEffect(() => {
        dispatch({
            type: 'FETCH_FULL_GAME_STATS',
            payload: gameId
        })
    }, [])

    const fieldGoalPercentage = game.fg/game.fga

    const fixedfgp = Math.round(fieldGoalPercentage * 100)

    // console.log(fixedfgp)

    console.log('gameid', game.id);

    const backButton = () => {
        history.push('/gamestats');
    }

    const deleteGame = () => {
        console.log('clicked', game.id);
        dispatch({
            type: 'SAGA/DELETE_GAME',
            payload: game.id
        })
        history.push('/gamestats');
    }

    const editGame = () => {
        history.push(`/morestats/editstats/${game.id}`);
    }

    console.log(game);

    return(
        <>
        
        <header>
            <Header />
        </header>
        <Container >
        <div>
        <h3>Full Game Stats</h3>
        </div>

        <div>
        <p>Points: {game.points}</p>
        <p>Assist: {game.assists}</p>
        <p>Rebounds: {game.rebounds}</p>
        <p>Steals: {game.steals}</p>
        <p>Blocks: {game.blocks}</p>
        <p>Turnover: {game.turnovers}</p>
        <p>Field Goals: {game.fg}/{game.fga}</p>
        <p>Field Goal Pecentage: {fixedfgp}%</p>
        </div>
        <div className='buttonContainer'>
        <Button onClick={backButton} variant='contained' startIcon={<ArrowBackIosIcon />}>Back</Button>
        <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        <Button onClick={editGame} variant='contained' startIcon={<EditIcon />}>Edit Stats</Button>
        <Button onClick ={deleteGame} variant="contained" startIcon={<DeleteIcon />}>
            Delete
        </Button>
      </ButtonGroup>
        </div>
        
        </Container>
        </>

)
}

export default MoreStatsPage