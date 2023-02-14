import "../../styles/styles.scss"
import triangle from "../../img/triangle.png"
import telegram from "../../img/telegram.png"
import whatsapp from "../../img/whatsapp.png"
import {useEffect} from 'react';

const Buttons = () => {
    useEffect(() => {
        let buttonUp = document.getElementById('buttonUp')
        let buttonContacts = document.getElementById('buttonContacts')
        
        function buttonAppear(button) {
            if (document.documentElement.scrollTop > 20) {
                button.classList.remove('hidden')
                setTimeout(function() {
                    button.classList.remove('opacity-0')
                }, 10)
            } else {
                button.classList.add('opacity-0')
            }
        }

        document.onscroll = function() {
            buttonAppear(buttonUp)
            buttonAppear(buttonContacts)
        }
    }, [])

  return (
    <div className="container">
        <a href="#" id="buttonUp" class="button__top hidden opacity-0">
            <img class="button__image" src={triangle} alt="Arrow up" />
        </a>
        <div id="buttonContacts" class="button__container hidden opacity-0">
            <a href="https://t.me/dolori" class="button__socials button__socials-telegram">
                <img class="button__image-contacts" src={telegram} alt="Telegram" />
            </a>
            <a href="https://t.me/dolori" class="button__socials button__socials-whatsapp">
                <img class="button__image-contacts" src={whatsapp} alt="Whatsapp" />
            </a>
        </div>
    </div>
  )
}

export default Buttons