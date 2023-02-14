import "../../styles/styles.scss"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Buttons from "../components/Buttons"
import SideMenu from "../components/Sidemenu"

import experience from "../../img/exp.png"
import lab from "../../img/lab.png"
import eye from "../../img/eye.png"
import wallet from "../../img/wallet.png"
import samolet from "../../img/samolet.png"
import a101 from "../../img/a101.png"
import mvk from "../../img/mvk.png"
import pik from "../../img/pik.png"
import sez from "../../img/sez.jpg"
import sez1 from "../../img/sez2.jpg"
import sez2 from "../../img/sez3.jpg"
import sez3 from "../../img/sez4.jpg"
import sez4 from "../../img/sez5.jpg"
import { Link } from "react-router-dom";

const RadioSez = () => {
    return (
        <div className="page">
            <div className="content">
                <Header />
                <main class="main">
                    <Buttons />
                    <SideMenu />
                    <div class="wrapper">
                        <div className="breadcrumbs">
                            <Link to="/" className="breadcrumbs__item">Главная</Link> •
                            <Link to="/radio" className="breadcrumbs__item"> Радиология</Link> •
                            <Link to="/radio/sez" className="breadcrumbs__item breadcrumbs__item-active"> Получение СЭЗ</Link>
                        </div>
                        <h2 class="heading__article heading__article-side">ПОЛУЧЕНИЕ СЭЗ (Санитарно-эпидемиологического заключения)</h2>
                    </div>
                    <div className="wrapper">
                        <div className="article__gallery article__gallery-threesome article__image-start">
                            <img class="article__picture" src={sez} alt="Sez" />
                            <img class="article__picture" src={sez1} alt="Sez 2" />
                            <img class="article__picture" src={sez2} alt="Sez 3" />
                        </div>
                    </div>
                    <section class="article__container">
                        <div class="wrapper">
                            <div class="article__block">
                                <p class="article__paragraph">
                                    Получение СЭЗ проходит в 3 основных этапа:
                                </p>
                                <ol class="article__paragraph">
                                    <li class="article__number">
                                        Разработка проектной документации в области использования источников ионизирующего излучения (генерирующие, открытые, закрытые).
                                        Мы сотрудничаем с самыми опытными проектировщиками, которые имеют опыт проектирования от маленьких стоматологических кабинетов до больших операционных со сложнейшим дигностическим обррудованием.
                                    </li>
                                    <li class="article__number">
                                        Проведение следующих замеров:
                                        <ul class="article__paragraph">
                                            <li className="article__item">Контроль эксплуатационных параметров рентгеновского оборудования</li>
                                            <li className="article__item">Дозиметрический контроль на рабочих местах и в смежных помещениях</li>
                                            <li className="article__item">Разработка таблиц дозовых нагрузок пациентов</li>
                                            <li className="article__item">Проверка защитной эффективности индивидуальных и передвижных средств радиационной защиты (фартуки, ширмы, экраны, итд)</li>
                                            <li className="article__item">Измерение параметров микроклимата, искусственного освещения, уровня шума, напряженности электромагнитного и электростатического полей, температуры поверхности элементов технического оснащения</li>
                                            <li className="article__item">Испытание электросетей и проверка защитного заземления</li>
                                        </ul>
                                        <div className="article__gallery article__image-start">
                                            <img class="article__picture" src={sez3} alt="Sez" />
                                            <img class="article__picture" src={sez4} alt="Sez 2" />
                                        </div>
                                        Сотрудники нашей лаборатории согласуют с Вами дату и время, приедут и проведут весь спектр необходимых измерений
                                    </li>
                                    <li class="article__number">
                                        Проведение санитарно-эпидемиологической экспертизы деятельности с источниками ионизирующего излучения
                                        Наш эксперт проведет экспертизу проектной документации и результатов измерений, а также проконсультирует по перечню документов, которые Роспотребнадзор требует при оформлении санитарно-эпидемиологического заключения (СЭЗ).
                                    </li>
                                    <li class="article__number">
                                        Мы сформируем полностью комплект документов, при наличии доверенности – сдадим его в Роспотребнадзор через «одно окно», получим ответный документ и привезем его вам.
                                    </li>
                                </ol>
                                <p class="article__paragraph bold">
                                    Наши клиенты: АО «Медицина», МЕДСИ, Пикассо, больница Пирогова, ЕМЦ, больница Гельмгольца
                                </p>
                            </div>
                        </div>
                    </section>
                    <div class="wrapper">
                        <h4 class="heading__article heading__article-side">ЗАКАЗАТЬ ЗВОНОК</h4>
                        <div class="trust">
                            <div class="trust__container trust__container-side">
                                <div class="trust__item">
                                    <img class="trust__icon" src={experience} alt="Experience" />
                                    <div class="trust__text">Практический опыт<br />в сфере 14 лет</div>
                                </div>
                                <div class="trust__item">
                                    <img class="trust__icon" src={lab} alt="Lab" />
                                    <div class="trust__text">Аккредитованная<br />лаборатория</div>
                                </div>
                                <div class="trust__item">
                                    <img class="trust__icon" src={wallet} alt="Wallet" />
                                    <div class="trust__text">Прозрачное<br />ценообразование</div>
                                </div>
                                <div class="trust__item">
                                    <img class="trust__icon" src={eye} alt="Eye" />
                                    <div class="trust__text">Ванимание ко<br /> всем запросам</div>
                                </div>
                            </div>
                            <div class="header__form">
                                <p class="contacts__heading">Закажите звонок инженера</p>
                                <input class="contacts__input" type="text" placeholder="Введите имя" />
                                <input class="contacts__input" type="text" placeholder="Введите номер телефона" />
                                <button class="button button__contacts button__header">ЗАКАЗАТЬ РАСЧЁТ</button>
                            </div>
                        </div>
                        <section class="companies">
                            <h4 class="heading__article heading__article-side">МЫ СДЕЛАЛИ ЭТО ДЛЯ</h4>
                            <div class="companies__list">
                                <img class="companies__item" src={pik} alt="PIK" />
                                <img class="companies__item" src={samolet} alt="Samolet" />
                                <img class="companies__item" src={mvk} alt="MVK" />
                                <img class="companies__item" src={a101} alt="A101" />
                            </div>
                        </section>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default RadioSez