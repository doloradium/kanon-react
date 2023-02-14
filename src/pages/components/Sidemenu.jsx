import "../../styles/styles.scss"
import logo from "../../img/logo.png"
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const SideMenu = () => {
  useEffect(() => {
    let burgerButton = document.querySelector('.burger__button')
let burger = document.querySelector('.burger')
let body = document.querySelector('body')
let dropdown1 = document.querySelectorAll('.drop-down')[0]
let dropdown2 = document.querySelectorAll('.drop-down')[1]
let dropdown3 = document.querySelectorAll('.drop-down')[2]
let dropdown4 = document.querySelectorAll('.drop-down')[3]
let burgerBlock = document.querySelector('.burger__block')

burgerButton.addEventListener('click', function() {
    burgerButton.classList.toggle('burger__button-active')
	  burger.classList.toggle('burger-active')
    body.classList.toggle('overflow')
})

dropdown1.addEventListener('click', function() {
  dropdown2.classList.add('closed')
  dropdown3.classList.add('closed')
  dropdown4.classList.add('closed')
  burgerBlock.classList.remove('top-3')
  burgerBlock.classList.remove('top-1')
  burgerBlock.classList.toggle('top-2')
  dropdown1.classList.toggle('closed')
})

dropdown2.addEventListener('click', function() {
  dropdown1.classList.add('closed')
  dropdown3.classList.add('closed')
  dropdown4.classList.add('closed')
  burgerBlock.classList.remove('top-2')
  burgerBlock.classList.remove('top-1')
  burgerBlock.classList.toggle('top-3')
  dropdown2.classList.toggle('closed')
})

dropdown3.addEventListener('click', function() {
  dropdown1.classList.add('closed')
  dropdown2.classList.add('closed')
  dropdown4.classList.add('closed')
  burgerBlock.classList.remove('top-3')
  burgerBlock.classList.remove('top-1')
  burgerBlock.classList.toggle('top-2')
  dropdown3.classList.toggle('closed')
})

dropdown4.addEventListener('click', function() {
  dropdown1.classList.add('closed')
  dropdown2.classList.add('closed')
  dropdown3.classList.add('closed')
  burgerBlock.classList.remove('top-3')
  burgerBlock.classList.remove('top-2')
  burgerBlock.classList.toggle('top-1')
  dropdown4.classList.toggle('closed')
})

}, [])

  return (
    <div class="burger">
      <div class="wrapper">
          <div class="burger__container">
              <div class="logo__container" onClick="handleClick">
                  <Link to="/" class="logo__link">
                      <img class="logo" src={logo} alt="Logo" />
                  </Link>
              </div>
              <nav className="burger__block">
              <ul class="drop-down drop-down-1 closed">
                  <li><a href="#" class="nav-button">ПРТО</a></li>
                  <li className="padding padding-top padding-bottom"><Link to="/prto/sez" className="grey" onClick="handleClick">ПОЛУЧЕНИЕ СЭЗ</Link></li>
                </ul>
              <ul class="drop-down drop-down-2 closed">
                  <li><a href="#" class="nav-button">О НАС</a></li>
                  <li className="padding padding-top border-bottom"><Link to="/about/inspection" className="grey" onClick="handleClick">ОБ ОРГАНЕ ИНСПЕКЦИИ</Link></li>
                  <li className="padding padding-bottom"><Link to="/about/lab" className="grey" onClick="handleClick">О ЛАБОРАТОРИИ</Link></li>
                </ul>
                <ul class="drop-down drop-down-3 closed">
                  <li><a href="#" class="nav-button">ЭКОЛОГИЯ</a></li>
                  <li className="padding padding-top border-bottom"><Link to="/eco/waste" class="grey" onClick="handleClick">ВЫБРОСЫ, СБРОСЫ, ПАРНИКОВЫЕ ГАЗЫ</Link></li>
                  <li className="padding border-bottom"><Link to="/eco/health" class="grey" onClick="handleClick">ОХРАНА ОКРУЖАЮЩЕЙ СРЕДЫ</Link></li>
                  <li className="padding border-bottom"><Link to="/eco/szz" class="grey" onClick="handleClick">САНИТАРНО-ЗАЩИТНАЯ ЗОНА</Link></li>
                  <li className="padding padding-bottom"><Link to="/eco/zso" class="grey" onClick="handleClick">СКВАЖИНЫ И ЗСО</Link></li>
                </ul>
                <ul class="drop-down drop-down-2 closed">
                  <li><a href="#" class="nav-button">РАДИОЛОГИЯ</a></li>
                  <li className="padding padding-top border-bottom"><Link to="/radio/idk" className="grey" onClick="handleClick">ОТЧЕТНОСТЬ И ИДК</Link></li>
                  <li className="padding padding-bottom"><Link to="/radio/sez" className="grey" onClick="handleClick">ПОЛУЧЕНИЕ СЭЗ</Link></li>
                </ul>
                <div class="burger__item"><Link to="/priemka" onClick="handleClick" class="burger__link">ИЗМЕРЕНИЯ</Link></div>
                <div class="burger__item"><Link to="/pat" onClick="handleClick" class="burger__link">ПАТ</Link></div>
              </nav>
          </div>
      </div>
    </div>
  )
}

export default SideMenu