import React from 'react';
import './Main.scss';
import town from '../../assets/town.png';
import map from '../../assets/map.png';
import car from '../../assets/car.png';
import frame from '../../assets/Frame.png';
import $ from 'jquery';
import {Link} from 'react-scroll'

class Main extends React.Component {

    render() {
        return (
            <div>
                <div className={'main-content'}>
                    <div className={'main-content__info'}>
                        <div className={'main-content__text'}>
                            <p>Найдем перевозчика для доставки любого груза</p>
                        </div>
                        <div className={'main-content__description'}>
                            <p>Сравните цены и выберите лучшую</p>
                        </div>
                        <button type={'button'} className={'main-content__button'}>
                            <Link to={'main'} spy={true} smooth={true}>
                                Разместить запрос
                            </Link>
                        </button>
                    </div>
                </div>
                <div id={'main'} className={'main-info'}>
                    <div className={'main-info__text'}>
                        <div>&laquo;Везет Мгновенно&raquo;</div>
                        <div>Расчет и заказ онлайн</div>
                    </div>
                    <div className={'main-info__content'}>
                        <div className={'main-info__first-block'}>
                            <img className={'main-info__town'} src={town}/>
                            <div className={'main-info__text-block'}>
                                <div>Рассчитай стоимость любой перевозки и закажи машину по честной цене</div>
                                <div><b>Укажите куда, что и когда перевозить и закажите перевозку по фиксированной
                                    стоимости</b></div>
                                <div className={'main-info__ul-block'}>
                                    <h3><b>Почему стоит выбрать нас:</b></h3>
                                    <ul>
                                        <li>Точная цена для любой перевозки,
                                            никаких почасовых расценок или за км
                                        </li>
                                        <li>Финальная цена лучше, чем у конкурентов</li>
                                        <li>Считаем цену за груз, а не машину</li>
                                        <li>Перевозки по области и межгород</li>
                                        <li>Большой список доп. услуг</li>
                                        <li>Надежные и проверенные
                                            перевозчики
                                        </li>
                                    </ul>
                                </div>
                                <img className={'main-info__car-image'} src={car}/>
                                <img className={'main-info__frame'} src={frame}/>
                            </div>
                        </div>
                        <div className={'main-info__second-block'}>
                            <div>
                                <b>Откуда</b>
                                <div className={'main-info__where-from'}>
                                    <div>
                                        Город / населенный пункт / улица / дом
                                        <input placeholder={'Начните вводить, чтобы выбрать'}/>
                                    </div>
                                    <div>
                                        На карте
                                        <button><img className={'main-info__map-logo'} src={map}/></button>
                                    </div>
                                </div>
                                <a href={'#'}>+Добавить адрес погрузки</a>
                            </div>
                            <div>
                                <b>Куда</b>
                                <div className={'main-info__where-from'}>
                                    <div>
                                        Город / населенный пункт / улица / дом
                                        <input placeholder={'Начните вводить, чтобы выбрать'}/>
                                    </div>
                                    <div>
                                        На карте
                                        <button><img className={'main-info__map-logo'} src={map}/></button>
                                    </div>
                                </div>
                                <a href={'#'}>+Добавить адрес погрузки</a>
                            </div>
                            <button className={'main-content__button'}>Узнать стоимость перевозки</button>
                            <div className={'main-content__link'}>
                                <a href={'#'}>Подробный калькулятор для расчета</a>
                            </div>
                        </div>
                    </div>
                    <div className={'main-info__text-end'}>
                        <div>Как работает &laquo;Везет Всем&raquo;</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;