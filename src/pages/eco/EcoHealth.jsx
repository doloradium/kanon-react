import "../../styles/styles.scss";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SideMenu from "../components/Sidemenu";
import Buttons from "../components/Buttons";

import health from "../../img/health.jpg"
import health2 from "../../img/health2.jpg"
import health3 from "../../img/health3.jpg"
import image6 from "../../img/image6.jpg"
import exp from "../../img/exp.png"
import labpng from "../../img/lab.png"
import wallet from "../../img/wallet.png"
import eye from "../../img/eye.png"
import samolet from "../../img/samolet.png"
import a101 from "../../img/a101.png"
import mvk from "../../img/mvk.png"
import pik from "../../img/pik.png"

const EcoHealth = () => {
    return (
        <div className="page">
            <div className="container">
                <Header />
                <div class="main">
                    <Buttons />
                    <SideMenu />
                </div>
                <div class="wrapper">
                    <div className="breadcrumbs">
                        <Link to="/" className="breadcrumbs__item">Главная</Link> •
                        <Link to="/eco" className="breadcrumbs__item"> Экология</Link> •
                        <Link to="/eco/health" className="breadcrumbs__item breadcrumbs__item-active"> Охрана окружающей среды</Link>
                    </div>
                    <h2 class="heading__article heading__article-side">ПРОВЕДЕНИЕ ПРОИЗВОДСТВЕННОГО КОНТРОЛЯ ЗА СОБЛЮДЕНИЕМ САНИТАРНЫХ ПРАВИЛ И ВЫПОЛНЕНИЕМ САНИТАРНО-ПРОТИВОЭПИДЕМИЧЕСКИХ МЕРОПРИЯТИЙ</h2>
                    <img class="article__image article__image-start article__image-top-0" src={health} alt="Health" />
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                Программа (план) организации и проведения производственного контроля за соблюдением санитарных правил и выполнением санитарно-противоэпидемических (профилактических) мероприятий на настоящий момент не согласовывается с органами Роспотребнадзора, но требуется к предъявлению во время проведение плановых проверок предприятия Роспотребнадзором.
                            </p>
                            <div class="article__block article__block-padding bold">
                                Компания «КАНОН» под ключ организует и выполнит комплекс мероприятий по разработке Программы (плана) организации и проведения производственного контроля за соблюдением санитарных правил и выполнением санитарно-противоэпидемических (профилактических) мероприятий, соответствующей требованиям Роспотребнадзора.
                            </div>
                        </div>
                    </div>
                </section>
                <div class="wrapper">
                    <img class="article__image article__image-start article__image-height" src={health2} alt="Health 2" />
                    <h2 class="heading__article heading__article-side">РАЗРАБОТКА МЕРОПРИЯТИЙ ПО ОХРАНЕ ОКРУЖАЮЩЕЙ СРЕДЫ» (РАЗДЕЛ ПРОЕКТНОЙ ДОКУМЕНТАЦИИ)</h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                Для разработки мероприятий по охране окружающей среды (МООС) СЗЗ необходимо:
                            </p>
                            <ol class="article__paragraph">
                                <li class="article__number">
                                    провести оценку воздействия объекта на компоненты окружающей среды на соответствие нормативным требованиям в области охраны окружающей среды и санитарно-гигиеническим нормативам
                                </li>
                                <li class="article__number">
                                    разработать мероприятий по предотвращению и (или) снижению негативного воздействия хозяйственной деятельности на окружающую среду и рациональному использованию природных ресурсов на период строительства и эксплуатации объекта
                                </li>
                                <li class="article__number">
                                    разработать программу производственного экологического контроля (мониторинга) за изменением компонентов экосистемы при строительстве и эксплуатации объекта, при авариях
                                </li>
                                <li class="article__number">
                                    рассчитать затраты на реализацию природоохранных мероприятий и компенсационные выплаты
                                </li>
                                <li class="article__number">
                                    согласовать раздел МООС в рамках проведения градостроительной экспертизы проектной документации и/или Государственной экологической экспертизы (ГЭЭ)
                                </li>
                            </ol>
                            <div class="article__block article__block-padding bold">
                                Компания «КАНОН» под ключ организует и выполнит комплекс мероприятий по разработке мероприятий по охране окружающей среды. От сбора данных для разработки раздела МООС до получения положительного заключения органов экспертизы.
                            </div>
                        </div>
                    </div>
                </section>
                <div class="wrapper">
                    <h2 class="heading__article heading__article-side">ДЕКЛАРАЦИЯ О ВОЗДЕЙСТВИИ НА ОКРУЖАЮЩУЮ СРЕДУ</h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                Предприятия II категории негативного воздействия на окружающую среду обязаны оформлять декларацию о воздействии на окружающую среду (ДВОС)
                            </p>
                            <p class="article__paragraph">
                                Декларация оформляется и подается в надзорные органы 1 раз в 7 лет, если не меняются технологические процессы на производстве, качественные и количественные характеристики выбросов, сбросов загрязняющих веществ и источников выбросов загрязняющих веществ
                            </p>
                            <p class="article__paragraph">
                                Декларация включает:
                            </p>
                            <ol class="article__paragraph">
                                <li class="article__number">
                                    сведения об объекте негативного воздействия, описание производственного процесса
                                </li>
                                <li class="article__number">
                                    объем или массу выбросов, сбросов загрязняющих веществ, образуемых и размещаемых отходов
                                </li>
                                <li class="article__number">
                                    расчеты нормативов допустимых выбросов и сбросов загрязняющих веществ
                                </li>
                                <li class="article__number">
                                    информацию из проекта нормативов образования отходов и лимитов на их размещение (ПНООЛР)
                                </li>
                                <li class="article__number">
                                    программу производственного экологического контроля (ПЭК)
                                </li>
                                <li class="article__number">
                                    информацию о природоохранных мероприятиях, выполняемых на предприятии
                                </li>
                                <li class="article__number">
                                    сведения об авариях и инцидентах за последние 7 лет
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>
                <div class="wrapper">
                    <img class="article__image margin-bottom" src={health3} alt="Lab" />
                </div>
                <div class="wrapper">
                    <h2 class="heading__article heading__article-side">КОМПЛЕКСНОЕ ЭКОЛОГИЧЕСКОЕ РАЗРЕШЕНИЕ (КЭР)</h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                С 1 января 2019 г. предприятиям I категории негативного воздействия на окружающую среду необходимо получить комплексное экологическое разрешение (КЭР).
                            </p>
                            <p class="article__paragraph">
                                КЭР заменяет собой проекты НДВ, НДС, ПНООЛР, которые являются основой для его оформления.
                            </p>
                            <p class="article__paragraph">
                                КЭР включает:
                            </p>
                            <ol class="article__paragraph">
                                <li class="article__number">
                                    инвентаризацию источников выбросов загрязняющих веществ в атмосферу, инвентаризацию образующихся отходов, источников сбросов сточных вод
                                </li>
                                <li class="article__number">
                                    расчеты нормативов допустимых выбросов и сбросов радиоактивных, высокотоксичных веществ, веществ, обладающих канцерогенными, мутагенными свойствами (веществ I, II класса опасности)
                                </li>
                                <li class="article__number">
                                    расчеты нормативов допустимых выбросов веществ, в отношении которых применяются меры государственного регулирования в области охраны окружающей среды
                                </li>
                                <li class="article__number">
                                    расчеты нормативов образования отходов и лимитов на их размещение
                                </li>
                                <li class="article__number">
                                    расчеты технологических нормативов
                                </li>
                                <li class="article__number">
                                    Программу производственного экологического контроля (ПЭК)
                                </li>
                                <li class="article__number">
                                    Программу повышения экологической эффективности (при необходимости)
                                </li>
                                <li class="article__number">
                                    сведения о наличии положительного заключения государственной экологической экспертизы (при необходимости)
                                </li>
                            </ol>
                            <div class="article__block article__block-padding bold">
                                Компания «КАНОН» под ключ организует и выполнит комплекс мероприятий по оформлению и подаче в надзорные органы декларации о воздействии на окружающую среду.
                            </div>
                        </div>
                    </div>
                </section>
                <div class="wrapper">
                    <h2 class="heading__article heading__article-side">СОГЛАСОВАНИЕ РАСЧЕТОВ КЛАССОВ ОПАСНОСТИ ОТХОДОВ ПРОИЗВОДСТВА И ПОТРЕБЛЕНИЯ ПО СТЕПЕНИ ВОЗДЕЙСТВИЯ НА СРЕДУ ОБИТАНИЯ И ЗДОРОВЬЕ ЧЕЛОВЕКА</h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                Отходы по степени воздействия на среду обитания и здоровье человека распределяются на четыре класса опасности согласно СП 2.1.7.1386-03:
                            </p>
                            <ul class="article__list">
                                <li class="article__item">1 класс - чрезвычайно опасные;</li>
                                <li class="article__item">2 класс - высоко опасные;</li>
                                <li class="article__item">3 класс - умеренно опасные;</li>
                                <li class="article__item">4 класс - мало опасные.</li>
                            </ul>
                            <p class="article__paragraph">
                                Требования о проведении расчетов классов опасности по степени воздействия на среду обитания и здоровье человека являются обязательными для всех предприятий, на которых образуются отходы.
                            </p>
                            <p class="article__paragraph">
                                Для расчетов классов опасности отходов производства и потребления по степени воздействия на среду обитания и здоровье человека необходимо:
                            </p>
                            <ol class="article__paragraph">
                                <li class="article__number">
                                    провести количественно-химические анализы отходов
                                </li>
                                <li class="article__number">
                                    рассчитать классы опасности отходов по степени воздействия на среду обитания и здоровье человека
                                </li>
                                <li class="article__number">
                                    провести санитарно-эпидемиологическую экспертизу расчетов классов опасности отходов
                                </li>
                                <li class="article__number">
                                    согласовать классы опасности отходов в территориальных органах Роспотребнадзора
                                </li>
                            </ol>
                            <div class="article__block article__block-padding bold">
                                Компания «КАНОН» под ключ организует и выполнит комплекс мероприятий по согласованию расчетов классов опасности отходов производства и потребления по степени воздействия на среду обитания и здоровье человека. От сбора данных для проведения расчетов до получения положительного заключения Роспотребнадзора.
                            </div>
                        </div>
                    </div>
                </section>
                <div class="wrapper">
                    <h2 class="heading__article heading__article-side">ОЦЕНКА РИСКА ЗДОРОВЬЮ НАСЕЛЕНИЯ </h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                Оценка риска здоровью населения требуется при установлении санитарно-защитной зоны для предприятий I, II категории опасности.
                            </p>
                            <p class="article__paragraph">
                                Для проведения оценки риска здоровью населения необходимо:
                            </p>
                            <ol class="article__paragraph">
                                <li class="article__number">
                                    разработать проект санитарно-защитной зоны
                                </li>
                                <li class="article__number">
                                    провести санитарно-эпидемиологическую экспертизу проекта санитарно-защитной зоны
                                </li>
                                <li class="article__number">
                                    провести расчеты канцерогенного и неканцерогенного риска для здоровья населения от работы предприятия
                                </li>
                                <li class="article__number">
                                    провести санитарно-эпидемиологическую экспертизу материалов оценки риска здоровью населения
                                </li>
                            </ol>
                            <div class="article__block article__block-padding bold">
                                Компания «КАНОН» под ключ организует и выполнит комплекс мероприятий по Оценке риска здоровью населения. От сбора данных для оценки риска здоровью населения до получения положительного заключения санитарно-эпидемиологической экспертизы
                            </div>
                        </div>
                    </div>
                </section>
                <div class="wrapper">
                    <h4 class="heading__article heading__article-side">ЗАКАЗАТЬ ЗВОНОК</h4>
                    <section class="trust">
                        <div class="trust__container trust__container-side">
                            <div class="trust__item">
                                <img src={exp} alt="Experience" class="trust__icon" />
                                <div class="trust__text">Практический опыт<br></br>в сфере 14 лет</div>
                            </div>
                            <div class="trust__item">
                                <img src={labpng} alt="Lab" class="trust__icon" />
                                <div class="trust__text">Аккредитованная<br></br>лаборатория</div>
                            </div>
                            <div class="trust__item">
                                <img src={wallet} alt="Wallet" class="trust__icon" />
                                <div class="trust__text">Прозрачное<br></br>ценообразование</div>
                            </div>
                            <div class="trust__item">
                                <img src={eye} alt="Eye" class="trust__icon" />
                                <div class="trust__text">Ванимание к каждому<br></br> запросу</div>
                            </div>
                        </div>
                        <div class="header__form">
                            <p class="contacts__heading">Закажите звонок инженера</p>
                            <input class="contacts__input" type="text" placeholder="Введите имя" />
                            <input class="contacts__input" type="text" placeholder="Введите номер телефона" />
                            <button class="button button__contacts button__header">ЗАКАЗАТЬ РАСЧЁТ</button>
                        </div>
                    </section>
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
            </div>
            <Footer />
        </div>
    )
}

export default EcoHealth;