import "../../styles/styles.scss"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Buttons from "../components/Buttons"
import SideMenu from "../components/Sidemenu"
import experience from "../../img/exp.png"
import lab from "../../img/lab.png"
import eye from "../../img/eye.png"
import wallet from "../../img/wallet.png"

import samolet from "../../img/beeline.png"
import a101 from "../../img/tele2.png"
import mvk from "../../img/megafon.png"
import pik from "../../img/mts.png"

import prtosez from "../../img/prtosez.jpg"
import { Link } from "react-router-dom"

const PrtoSez = () => {
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
                            <Link to="/prto" className="breadcrumbs__item"> ПРТО</Link> •
                            <Link to="/prto/sez" className="breadcrumbs__item breadcrumbs__item-active"> Получение СЭЗ и производственный контроль</Link>
                        </div>
                        <h2 class="heading__article heading__article-side">САНИТАРНО ЭПИДЕМИОЛОГИЧЕСКОЕ ЗАКЛЮЧЕНИЕ ПРТО В МОСКВЕ И МО В КОРОТКИЕ СРОКИ</h2>
                    </div>
                    <section class="article__container">
                        <div class="wrapper">
                            <div class="article__block">
                                <p class="article__paragraph">
                                    ПРТО - передающий радиотехнического объект, или РЭС (радио-электронное средство) , обеспечивающий беспроводную и мобильную связь, осуществляющей широкополосную передачу данных, ТВ и радиосигналов.
                                </p>
                                <p class="article__paragraph">
                                    Если передатчик работает с мощностью более 10 Вт,  для его монтажа и эксплуатацию требуется получение санитарно-эпидемиологического заключения (СЭЗ), и проведения измерений.
                                </p>
                            </div>
                        </div>
                    </section>
                    <div class="wrapper">
                        <h2 class="heading__article heading__article-side">ДЛЯ получения СЭЗ НЕОБХОДИМО</h2>
                    </div>
                    <section class="article__container">
                        <div class="wrapper">
                            <div class="article__block">
                                <ol class="article__paragraph">
                                    <li class="article__number">
                                        Разработать проект (обычно его называют ПСЭЗ «приложение к санитарно-эпидемиологическому заключению). Он включает в себя расчет уровней излучения в ключевых точках в месте размещения антенны с учетом уровней воздействия соседних антенн
                                    </li>
                                    <li class="article__number">
                                        Пройти экспертизу проекта и получить экспертное заключение, выданное организацией, имеющей соответствующую аккредитацию от Россаккредитации. Экспертное заключение в этой области обозначается сокращением «Э1»
                                    </li>
                                    <li class="article__number">
                                        Подготовить и направить в территориальный Роспотребнадзор комплект документов для получения санитарно-эпидемиологического заключения (СЭЗ). СЭЗ подтверждает, что работа РЭС, построенной в соответствии с проектом, не вредит здоровью населения и планируемые параметры излучения не превышают те, что указаны в СанПин. СЭЗ для ПРТО часто обозначают как «Р1»
                                    </li>
                                    <li class="article__number">
                                        После получения СЭЗ оборудование можно монтировать и включить для проведения измерений, которые подтвердят, что работающая РЭС не превышает заданных в СанПин уровней электромагнитного поля . Измерения может провести лаборатория, имеющая соответствующий аттестат аккредитации Росаккредитации.
                                        Сотрудник нашей лаборатории согласует с вами (если нужен доступ на территорию или крышу) дату выезда, и проведет измерения.
                                        <img class="article__image margin-top" src={prtosez} alt="Man" />
                                    </li>
                                    <li class="article__number">
                                        Результаты измерений фиксируются в протоколе, и по нему проводится окончательная экспертиза («Э2»), подтверждающая, что ваш объект не наносит вреда населению. Измерения в рамках производственного контроля повторяются каждые два года при условии, что РЭС никак не модернизировался (не менялось место размещения, азимуты, мощности и углы наклона и т.д.) Если модернизировался – начинаем заново с первого пункта
                                    </li>
                                </ol>
                            </div>
                            <p class="article__block">
                                Все это: ПСЭЗ, Э1, Р1, протокол измерения и Э2 - комплект документов, необходимый владельцу РЭС для закрытия требований по СанПиНам
                            </p>
                            <div class="article__block article__block-padding bold">
                                Компания «Канон» под ключ организует и выполнит комплекс мероприятий по получению разрешительной документации для ввода ПРТО в промышленную эксплуатацию. От сбора данных для создания проектной документации до получения положительного заключения второй экспертизы
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
                            <h4 class="heading__article heading__article-side">НАШИ КЛИЕНТЫ</h4>
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

export default PrtoSez