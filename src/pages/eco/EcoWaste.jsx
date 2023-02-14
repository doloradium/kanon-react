import "../../styles/styles.scss"
import { Link } from "react-router-dom"
import { useRef } from "react"

import Footer from "../components/Footer"
import Header from "../components/Header"
import SideMenu from "../components/Sidemenu";
import Buttons from "../components/Buttons";

import waste from "../../img/waste.jpg"
import waste2 from "../../img/waste2.jpg"
import waste3 from "../../img/waste3.jpg"
import exp from "../../img/exp.png"
import labpng from "../../img/lab.png"
import wallet from "../../img/wallet.png"
import eye from "../../img/eye.png"
import samolet from "../../img/samolet.png"
import a101 from "../../img/a101.png"
import mvk from "../../img/mvk.png"
import pik from "../../img/pik.png"




const EcoWaste = () => {
    const myRef1 = useRef(null)
    const myRef2 = useRef(null)
    const myRef3 = useRef(null)
    const myRef4 = useRef(null)
    const myRef5 = useRef(null)
    const myRef6 = useRef(null)
    const executeScroll1 = () => myRef1.current.scrollIntoView()
    const executeScroll2 = () => myRef2.current.scrollIntoView()
    const executeScroll3 = () => myRef3.current.scrollIntoView()
    const executeScroll4 = () => myRef4.current.scrollIntoView()
    const executeScroll5 = () => myRef5.current.scrollIntoView()
    const executeScroll6 = () => myRef6.current.scrollIntoView()
    return (
        <div className="page">
            <div className="container">
                <Header />
                <Buttons />
                <div class="wrapper">
                    <SideMenu />
                    <div className="breadcrumbs">
                        <Link to="/" className="breadcrumbs__item">Главная</Link> •
                        <Link to="/eco" className="breadcrumbs__item"> Экология</Link> •
                        <Link to="/eco/waste" className="breadcrumbs__item breadcrumbs__item-active"> Выбросы, сбросы, парниковые газы</Link>
                    </div>
                    <h2 class="heading__article heading__article-side">РАЗРАБОТКА НОРМАТИВОВ ДОПУСТИМЫХ ВЫБРОСОВ (НДВ)</h2>
                    <div className="contents">
                        <button className="contents__item" onClick={executeScroll1}> НДС </button>
                        <button className="contents__item" onClick={executeScroll2}> ПНООЛР </button>
                        <button className="contents__item" onClick={executeScroll3}> РАСЧЁТЫ, ОТЧЁТНОСТЬ </button>
                        <button className="contents__item" onClick={executeScroll4}> ЛИЦЕНЗИРОВАНИЕ </button>
                        <button className="contents__item" onClick={executeScroll5}> ПЕРЕОФОРМЛЕНИЕ </button>
                        <button className="contents__item" onClick={executeScroll6}> УСТАНОВКИ </button>
                    </div>
                    <img class="article__image article__image-start article__image-top-0" src={waste} alt="Waste" />
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                Нормативы предельно допустимых выбросов в атмосферу являются составной частью экологической документации:
                            </p>
                            <ol class="article__paragraph">
                                <li class="article__number">
                                    Декларации о воздействии на окружающую среду (ДВОС).
                                </li>
                                <li class="article__number">
                                    Комплексного экологического разрешения (КЭР).
                                </li>
                                <li class="article__number">
                                    Программы производственного экологического контроля (ПЭК).
                                </li>
                                <li class="article__number">
                                    Плана сокращения выбросов на период НМУ.
                                </li>
                            </ol>
                        </div>
                        <div class="article__block">
                            <p class="article__paragraph">
                                Для разработки нормативов допустимых выбросов необходимо:
                            </p>
                            <ol class="article__paragraph">
                                <li class="article__number">
                                    провести инвентаризацию источников выбросов загрязняющих веществ в атмосферу
                                </li>
                                <li class="article__number">
                                    разработать проект НДВ. Он включает расчеты нормативов допустимых выбросов загрязняющих веществ в атмосферу и инструментальные замеры на источниках выбросов
                                </li>
                                <li class="article__number">
                                    провести санитарно-эпидемиологическую экспертизу проекта НДВ
                                </li>
                                <li class="article__number">
                                    согласовать проект НДВ в Управлении Роспотребнадзора по г. Москве с получением санитарно-эпидемиологического заключения
                                </li>
                            </ol>
                            <div class="article__block article__block-padding bold">
                                Компания «КАНОН» под ключ организует и выполнит комплекс мероприятий по разработке нормативов допустимых выбросов (НДВ). От сбора данных для разработки проектной документации, проведения инструментальных замеров на источниках выбросов до получения положительного заключения Роспотребнадзора.
                            </div>
                        </div>
                    </div>
                </section>
                <div class="wrapper">
                    <h2 ref={myRef1} class="heading__article heading__article-side">РАЗРАБОТКА НОРМАТИВОВ ДОПУСТИМЫХ СБРОСОВ (НДС)</h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                Для разработки нормативов допустимых сбросов (НДС) необходимо:
                            </p>
                            <ol class="article__paragraph">
                                <li class="article__number">
                                    разработать проект НДС. Он включает расчеты объемов сточных вод, поступающих в водный объект, и нормативов допустимого сброса загрязняющих веществ и микроорганизмов
                                </li>
                                <li class="article__number">
                                    провести лабораторные исследования сбрасываемых сточных вод
                                </li>
                                <li class="article__number">
                                    согласовать проект НДС в Федеральной службе по гидрометеорологии и мониторингу окружающей среды
                                </li>
                                <li class="article__number">
                                    согласовать проект НДС в территориальных органах Роспотребнадзора
                                </li>
                                <li class="article__number">
                                    согласовать проект НДС в Территориальном Управлении Рыболовства
                                </li>
                                <li class="article__number">
                                    согласовать проект НДС в Росприроднадзоре
                                </li>
                                <li class="article__number">
                                    согласовать проект НДС в территориальном Бассейновом Водном Управлении
                                </li>
                                <li class="article__number">
                                    получить Разрешение на сброс загрязняющих веществ и микроорганизмов в водный объект в Росприроднадзоре (для объектов I категории НВОС, не получившим КЭР)
                                </li>
                                <li class="article__number">
                                    получить Решение о предоставлении водного объекта в пользование для сброса сточных и (или) дренажных вод
                                </li>
                            </ol>
                            <div class="article__block article__block-padding bold">
                                Компания «КАНОН» под ключ организует и выполнит комплекс мероприятий по разработке нормативов допустимых сбросов. От сбора данных до разработки проектной документации и получения положительных заключений гос.органов.
                            </div>
                        </div>
                    </div>
                </section>
                <div class="wrapper">
                    <h2 ref={myRef2} class="heading__article heading__article-side">РАЗРАБОТКА НОРМАТИВОВ ОБРАЗОВАНИЯ ОТХОДОВ И ЛИМИТОВ НА ИХ РАЗМЕЩЕНИЕ (ПНООЛР)</h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                С 1 января 2021 года объекты I и II категории объектов негативного воздействия (НВОС) обязаны разрабатывать ПНООЛР в соответствии с приказом Минприроды России от 07.12.2020 № 1021 «Об утверждении методических указаний по разработке проектов нормативов образования отходов и лимитов на их размещение» Объекты III категории НВОС предоставляют сведения об образовании, утилизации, обезвреживании и размещении отходов в Отчете по производственному экологическому контролю Объекты IV категории НВОС не предоставляют расчеты нормативов образования отходов
                            </p>
                            <p class="article__paragraph">
                                Для разработки нормативов образования отходов и лимитов на их размещение необходимо:
                            </p>
                            <ol class="article__paragraph">
                                <li class="article__number">
                                    Провести инвентаризацию отходов
                                </li>
                                <li class="article__number">
                                    Провести количественно-химический анализ отходов и подтверждение классов опасности отходов
                                </li>
                                <li class="article__number">
                                    Рассчитать классы опасности образующихся отходов
                                </li>
                                <li class="article__number">
                                    Разработать проект ПНООЛР. Включает расчёты нормативов образования отходов и лимитов на их размещение
                                </li>
                                <li class="article__number">
                                    Разработать и согласовать Паспорта отходов
                                </li>
                                <li class="article__number">
                                    Согласовать проект ПНООЛР в органах Росприроднадзора (для предприятий I категории НВОС, если нет возможности получить КЭР до момента окончания срока действия Документа об образовании отходов и лимитов на их размещение)
                                </li>
                                <li class="article__number">
                                    Получить документ о нормативах образования отходов и лимитов на их размещение в Департаменте Росприроднадзора (для предприятий I категории НВОС, если нет возможности получить КЭР до момента окончания срока действия Документа об образовании отходов и лимитов на их размещение)
                                </li>
                            </ol>
                            <div class="article__block article__block-padding bold">
                                Компания «КАНОН» под ключ организует и выполнит комплекс мероприятий по разработке нормативов образования отходов и лимитов на их размещение. От сбора данных для разработки проектной документации до получения положительного заключения в гос.органах.
                            </div>
                        </div>
                    </div>
                </section>
                <div class="wrapper">
                    <img class="article__image" src={waste2} alt="Waste 2" />
                    <h2 ref={myRef3} class="heading__article heading__article-side">РАСЧЕТЫ ВЫБРОСОВ ПАРНИКОВЫХ ГАЗОВ И ОФОРМЛЕНИЕ ОТЧЕТНОСТИ</h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                В России взят курс на углеродную нейтральность к 2060 г. Углеродная нейтральность означает уменьшение углеродного следа - выбросов парниковых газов, в большей степени углекислого газа (к другим парниковым газам также относятся метан). Для достижения этих целей появилось углеродное регулирование -  государственный учет выбросов парниковых газов, который регулируется ФЗ «Об ограничении выбросов парниковых газов».
                            </p>
                            <p class="article__paragraph">
                                Отчетность по парниковым газам должны оформлять и передавать в надзорные органы следующие типы предприятий:
                            </p>
                            <ul class="article__list">
                                <li class="article__item">за 2022 год (до 1 июля 2023 г.): организации, выбрасывающие более 150 тыс. тонн CO2-эквивалента в год (включая организации авиа- и ж/д транспорта)</li>
                                <li class="article__item">за 2024 год (до 1 июля 2025 г.): все организации с объемом выбросов парниковых газов более 50 тыс. тонн CO2-эквивалента в год (включая организации авиа- и ж/д транспорта и организации, осуществляющие морские и речные перевозки)</li>
                            </ul>
                            <p class="article__paragraph">
                                Для расчетов выбросов парниковых газов и оформления отчетности необходимо:
                            </p>
                            <ol class="article__paragraph">
                                <li class="article__number">
                                    провести инвентаризацию источников выбросов парниковых газов
                                </li>
                                <li class="article__number">
                                    рассчитать выбросы парниковых газов по утвержденной методике
                                </li>
                            </ol>
                            <div class="article__block article__block-padding bold">
                                Компания «КАНОН» под ключ организует и выполнит комплекс мероприятий по оформлению отчетности по парниковым газам. От сбора данных до передачи в надзорные органы.
                            </div>
                        </div>
                    </div>
                </section>
                <div class="wrapper">
                    <h2 ref={myRef4} class="heading__article heading__article-side">ЛИЦЕНЗИРОВАНИЕ ДЕЯТЕЛЬНОСТИ ПО ОБРАЩЕНИЮ С ОТХОДАМИ</h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                Предприятия, осуществляющие сбор, транспортирование, обработку, утилизацию, обезвреживание, размещение отходов I-IV классов опасности обязаны оформлять лицензию на деятельность по обращению с отходами.
                            </p>
                            <p class="article__paragraph">
                                Для оформления лицензии на деятельность по сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению отходов I-IV классов опасности необходимо:
                            </p>
                            <ol class="article__paragraph">
                                <li class="article__number">
                                    организовать профессиональное обучение или получение дополнительного профессионального образования, необходимых для работы с отходами I-IV классов опасности
                                </li>
                                <li class="article__number">
                                    сформировать пакет документов, соответствующий требованиям органов Роспотребнадзора и Росприроднадзора для обоснования деятельности по обращению с отходами
                                </li>
                                <li class="article__number">
                                    провести санитарно-эпидемиологическую экспертизу деятельности по обращению с отходами
                                </li>
                                <li class="article__number">
                                    получить санитарно-эпидемиологическое заключение на деятельность по обращению с отходами в территориальных органах Роспотребнадзора
                                </li>
                                <li class="article__number">
                                    получить лицензию на деятельность по обращению с отходами в Росприроднадзоре
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>
                <div class="wrapper">
                    <h2 ref={myRef5} class="heading__article heading__article-side">ПЕРЕОФОРМЛЕНИЕ ЛИЦЕНЗИИ НА ДЕЯТЕЛЬНОСТЬ ПО ОБРАЩЕНИЮ С ОТХОДАМИ</h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                Переоформление лицензии на деятельность по обращению с отходами осуществляется в следующих случаях:
                            </p>
                            <ol class="article__paragraph">
                                <li class="article__number">
                                    реорганизация юридического лица (преобразование, слияние, изменение наименования, адреса места нахождения)
                                </li>
                                <li class="article__number">
                                    прекращение лицензируемого вида деятельности по одному или нескольким адресам
                                </li>
                                <li class="article__number">
                                    прекращения одного или нескольких видов работ, входящих в лицензируемые виды деятельности
                                </li>
                            </ol>
                            <p class="article__paragraph">
                                Для переоформления лицензии на деятельность по сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению отходов I-IV классов опасности необходимо:
                            </p>
                            <ol class="article__paragraph">
                                <li class="article__number">
                                    сформировать пакет документов, соответствующий требованиям органов Роспотребнадзора и Росприроднадзора для обоснования деятельности по обращению с отходами
                                </li>
                                <li class="article__number">
                                    провести санитарно-эпидемиологическую экспертизу деятельности по обращению с отходами
                                </li>
                                <li class="article__number">
                                    получить санитарно-эпидемиологическое заключение на деятельность по обращению с отходами в территориальных органах Роспотребнадзора
                                </li>
                                <li class="article__number">
                                    переоформить лицензию на деятельность по обращению с отходами в Росприроднадзоре
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>
                <div class="wrapper">
                    <h2 ref={myRef6} class="heading__article heading__article-side">ПАСПОРТА ГАЗООЧИСТНЫХ УСТАНОВОК</h2>
                    <img class="article__image article__image-start article__image-height" src={waste3} alt="Waste 3" />
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                Разработка Паспортов газоочистных установок включает:
                            </p>
                            <ol class="article__paragraph">
                                <li class="article__number">
                                    Проведение инструментальных исследований загрязняющих веществ на установках с целью проверки их эффективности, оценки технического состояния
                                </li>
                                <li class="article__number">
                                    Оформление актов проверки эффективности, оценки технического состояния установок.
                                </li>
                                <li class="article__number">
                                    Разработка паспортов установок
                                </li>
                            </ol>
                            <p class="article__paragraph">
                                Регистрация паспортов в Росприроднадзоре на настоящий момент не требуется.
                            </p>
                            <div class="article__block article__block-padding bold">
                                Компания «КАНОН» под ключ организует и выполнит комплекс мероприятий по разработке Паспортов газоочистных установок с проведением инструментальных исследований на источниках выбросов и разработкой документации, соответствующей требованиям природоохранного законодательства.
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

export default EcoWaste