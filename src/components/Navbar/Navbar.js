import React from 'react';
import logo from '../../assets/logo.PNG';
import loginLogo from '../../assets/login.png';
import './Navbar.scss';

class Navbar extends React.Component {

    render() {
        return (
            <header id={'navbar'} className={'navbar'}>
                <div className={'navbar__inner'}>
                    <div className={'navbar__content'}>
                        <img src={logo} className={"navbar__logo"} alt="logo"/>
                        <button className={'navbar__btn'} type={'button'}><b>Узнайте лучшую цену </b> на перевозку груза
                        </button>
                        <div className={'navbar__info'}>
                            <a href="#">Для частных перевозчиков</a>
                            <a href="#">Транспортным компаниям</a>
                            <a href="#">Поиск грузов</a>
                        </div>
                        <div className={'navbar-auth'}>
                            <div className={'navbar-auth__registration'}>
                                <a href="#">Регистрация</a>
                            </div>
                            <div className={'navbar-auth__authorization'}>
                                <a href="#">Войти</a>
                                <img src={loginLogo} className={"navbar-auth__logo"} alt="login_logo"/>
                            </div>
                        </div>
                    </div>
                    <div className={'navbar-links'}>
                        <div className={'navbar-links__content'}>
                            <a href="#" className={'navbar-links__help'}>Служба поддержки</a>
                            <div className={'navbar-links__free'}>
                                <div>Звонок по России бесплатно</div>
                                <div><b>8 (800) 555-19-23</b></div>
                            </div>
                            <div className={'navbar-links__moscow'}>
                                <div>Москва</div>
                                <div><b>7 (495) 215-19-78</b></div>
                            </div>
                        </div>
                        <div className={'navbar-burger'}>
                            <span />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Navbar;