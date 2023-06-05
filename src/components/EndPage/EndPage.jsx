import Header from '../Header/Header';
import { useHistory } from 'react-router-dom';
import { Container } from '@mui/material';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function EndPage() {
    const history = useHistory();
    const backButton = () => {
        history.push('/home');
    }

return (
    <>
    <Header />
    <Container>

    <p>I would like to thank my friends and family, I would also like to thank 
        all the the Prime staff and especially my insturctors Matt and Andrew.
    </p>
    <h3>Technology Used</h3>
    <ul>
        <li>React</li>
        <li>Node</li>
        <li>JavaScript</li>
        <li>PostgresSQL</li>
        <li>Heroku</li>
        <li>Material UI</li>
    </ul>
    <Button onClick={backButton} variant='contained' startIcon={<ArrowBackIosIcon />}>Back</Button>
    </Container>
    </>
)
}

export default EndPage;
