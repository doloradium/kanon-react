import "../../styles/styles.scss"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Buttons from "../components/Buttons"
import SideMenu from "../components/Sidemenu"
import prto from "../../img/prto.png"
import prto2 from "../../img/prto2.png"
import experience from "../../img/exp.png"
import lab from "../../img/lab.png"
import eye from "../../img/eye.png"
import wallet from "../../img/wallet.png"
import samolet from "../../img/samolet.png"
import a101 from "../../img/a101.png"
import mvk from "../../img/mvk.png"
import pik from "../../img/pik.png"
import { Link } from "react-router-dom"

const Prto = () => {
    return (
        <div className="page">
            <div className="container">
                <Header />
                <main class="main">
                    <Buttons />
                    <SideMenu />
                    <div class="wrapper">
                        <div className="breadcrumbs">
                            <Link to="/" className="breadcrumbs__item">Главная</Link> •
                            <Link to="/prto" className="breadcrumbs__item breadcrumbs__item-active"> ПРТО</Link>
                        </div>
                        <h4 class="heading__article heading__article-side">передающие радиотехнические устройства</h4>
                    </div>
                    <section class="article__container">
                        <div class="wrapper">
                            <div class="article__block">
                                <p class="article__paragraph">
                                    Работа Радиоэлектронного  средства (РЭС), в законодательстве обозначаемые как ПРТО (передающее радиотехническое устройство),  регламентируется САНПином с точки зрения влияния электро-магнитного поля на здоровье населения.
                                </p>
                                <p class="article__paragraph">
                                    Требования касаются всех РЭС мощностью более 10 Вт.
                                </p>
                                <p class="article__paragraph">
                                    К ним относятся как РЭС, размещаемые вне помещений, так и внутри.
                                </p>
                                <p class="article__paragraph">
                                    Например, базовые станции сотовых операторов, монтируются на улице и внутри больших помещений, таких как парковки торговых центров.
                                </p>
                            </div>
                        </div>
                    </section>
                    <div className="wrapper">
                        <div className="article__gallery article__image-start">
                            <img class="article__picture" src={prto} alt="Prto" />
                            <img class="article__picture" src={prto2} alt="Prto 2" />
                        </div>
                    </div>
                    <section class="article__container">
                        <div class="wrapper">
                            <div class="article__block">
                                <p class="article__paragraph">
                                    До начала монтажа РЭС владельцу необходимо получить санитарно-эпидемиологическое заключение (СЭЗ) на проект, а затем провести замеры уровней элекро-магнитного поля (ЭМС) для подтверждения соответствия результатов измерений и САНПин.
                                </p>
                                <p class="article__paragraph">
                                    Мы делаем все виды работ для получения СЭЗ, и потом проводим регулярный (раз в 2 года) производственный контроль
                                </p>
                            </div>
                        </div>
                    </section>
                    <div class="wrapper">
                        <div class="header__categories header__categories-priemka">
                            <Link to="/prto/sez" class="header__item">САНИТАРНО ЭПИДЕМИОЛОГИЧЕСКОЕ ЗАКЛЮЧЕНИЕ ПРТО В МОСКВЕ И МО В КОРОТКИЕ СРОКИ</Link>
                        </div>
                    </div>
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

export default Prto