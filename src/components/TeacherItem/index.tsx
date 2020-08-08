import React from 'react';
import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://scontent.fcwb2-1.fna.fbcdn.net/v/t1.0-9/90427845_2828769603837942_6951826952839757824_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeF8LkjWxW_Mws_jRUGejnxsqGZReJD_iQioZlF4kP-JCNYf6Z78WMADtT4R8tr5HU7rd4_nlawafT-99-_3OXcv&_nc_ohc=URdgyx-OAuYAX_Z-bFO&_nc_ht=scontent.fcwb2-1.fna&oh=300c6e632b889f2c962808e6da5c35fb&oe=5F4F1EF2" alt=""/>
            <div>
                <strong>
                    Diego Ceccon
                </strong>
                <span>Química</span>
            </div>
            </header>

            <p>Entusiasta das melhores tecnologias de química avançada
            <br/><br/>
            Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências.</p>

            <footer>
                <p>Preço/hora</p>
                <strong>R$ 80,00</strong>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem