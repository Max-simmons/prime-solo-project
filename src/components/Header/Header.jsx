import './Header.css'
import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();

    const goToThankYou = () => {
        history.push('/ThankYou');
    }

    return (
        <div className = 'header'>
        <img className = 'logo' src='/images/logo-3.jpg' alt='21 logo' onClick={goToThankYou}/>
        </div>
)

}

export default Header;