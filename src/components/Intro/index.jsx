import Logo from "./Logo/Logo";
import LogoInstagram from "./LogoInstagram/LogoInstagram";
import PhoneNumber from "./PhoneNumber/PhoneNumber";
import Description from "./Description/Description";
import ButtonAppointment from "./ButtonAppointment/ButtonAppointment";
import Image from "./Image/Image";
import Title from "../../UI/Title";
import img1 from "../../attachments/img/img1.png";
import img2 from "../../attachments/img//img2.png";
import img3 from "../../attachments/img//img3.png";
import React from "react";
import './style.css'

export const Intro = () => (
    <div className="Intro">
        <div className="Intro-header">
            <div className="Header-left">
                <Logo />
                <Title
                    content="Пудовикова елена валерьевна"
                    fontSize="45px"
                    color="#952D31"
                    width="920px"
                    marginBottom="10px"
                />
            </div>
            <div className="Header-right">
                <LogoInstagram />
                <PhoneNumber content="+ 7 (911) 465-34-32" />
            </div>
        </div>
        <Description content="Не следует, однако, забывать о том, что постоянный количественный рост и сфера нашей активности напрямую зависит от новых предложений. С другой стороны выбранный нами инновационный путь..." />
        <ButtonAppointment content="Записаться на обучение" />
        <div className="Img-block">
            <Image imageName={img1}/>
            <Image imageName={img2} marginLeft="75px" marginRight="75px" />
            <Image imageName={img3} />
        </div>
    </div>
)