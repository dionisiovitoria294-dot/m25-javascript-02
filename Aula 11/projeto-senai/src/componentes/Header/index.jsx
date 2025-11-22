import LogoSenai from './assets/logo-senai.png';
import MenuHamburguer from './assets/menu.svg';
import Login from './assets/login.svg';
import Pesquisa from './assets/search.svg';
import './styles.css'

export default function Header (){
    return (
        <div className='cabecalho'>
            <img src={MenuHamburguer}  alt ="Imagem do Menu" />
            <img src={LogoSenai} alt="Logotipo Senai" />
            <img src={Login}  alt="Imagem do Login" />
            <img src={Pesquisa}  alt="Imagem Pesquisa" />
        </div>
    );
}