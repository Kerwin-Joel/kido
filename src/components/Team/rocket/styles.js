import styled,{css} from 'styled-components'


const createStart = () =>{
    let styles = '';

    for (let i = 0; i < 30; i++) {
        let randomOne = Math.floor(Math.random() * 300) ;
        let randomTwo = Math.floor(Math.random() * 300) ;
        styles += `
        .shootingstar:nth-child(${i}) {
            left: ${randomOne}px;
            top: ${randomTwo}px;
            animation-delay: calc(-400s / ${i});
        }
        `
    }

    return css`${styles}`;
}

export const Container = styled.div`
    /* this code is a copy from codepen, this code i don't made */
$green : red;
$bluegreen : #3943B7;
$bluewhite: #dafffe;

/* //style svg */
.st0{fill:#b77dfb;} 
.st1{fill:#E8E6EF;} 
.st2{filter:url(#Adobe_OpacityMaskFilter);} 
.st3{filter:url(#Adobe_OpacityMaskFilter_1_);} 
.st4{mask:url(#SVGID_1_);fill:url(#SVGID_2_);} 
.st5{opacity:0.61;fill:#CFE0E2;} 
.st6{opacity:0.7;fill:#012226;} 
.st7{filter:url(#Adobe_OpacityMaskFilter_2_);} 
.st8{filter:url(#Adobe_OpacityMaskFilter_3_);} 
.st9{mask:url(#SVGID_3_);fill:url(#SVGID_4_);} 
.st10{fill:url(#SVGID_5_);} 
.st11{fill:#3943B7;} 
.st12{fill:#782fff;}
/* //style svg */

#rocket{
    position: absolute;
    width: 80px;
    left: 50%;
    margin-left: -40px;
    top: 70px;
    z-index: -2;
}

.artboard {
    position: relative;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: solid #26F0F1 2px;
    margin: 0 auto;
    overflow: hidden;
    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
    backface-visibility: none;
    background: radial-gradient(circle at bottom, rgba(24, 244, 163, 0.3) 0%, rgba(1, 34, 38, 0) 60%);
}

.star {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 37%;
    left: 31%;
}

.star::before,
.star::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 6px 3px rgba(255, 255, 255, 0.15);
    animation: sparkle 1s ease-in-out infinite alternate;
}

.star::after {
    transform: translate(-50%, -50%) rotate(90deg);
}

.star::before {
    transform: translate(-50%, -50%);
}

.star:nth-child(2) {
    top: 20%;
    left: 23%;
    transform: scale(1.4);
}

.star:nth-child(3) {
    top: 28%;
    left: 64%;
    transform: scale(0.7);
}


@keyframes sparkle {
    from {
        height: 10px;
    }
    to {
        height: 3px;
    }
}

.smoke {
    position: absolute;
    width: 400%;
    height: 400%;
    bottom: -250%;
    left: 50%;
    background-color: #e8e6ef;
    transform: translateX(-50%) scale(0.25);
}

.smoke-bubble {
    position: absolute;
    background-color: #e8e6ef;
    border-radius: 50%;
    animation: smoke infinite 7s alternate ease-in-out;
}

.smoke-bubble:nth-child(1){
    left: 1%;
    top: -22%;
    width: 20%;
    height: 20%;
    animation-duration: 5s;
}
.smoke-bubble:nth-child(2){
    right: 1%;
    top: -22%;
    width: 20%;
    height: 20%;
    animation-duration: 5s;
}
.smoke-bubble:nth-child(3){
    left: -6%;
    top: -28%;
    width: 15%;
    height: 15%;
    animation-duration: 3s;
}
.smoke-bubble:nth-child(4){
    right: -6%;
    top: -28%;
    width: 15%;
    height: 15%;
    animation-duration: 3s;
}
.smoke-bubble:nth-child(5){
    left: 12%;
    top: -11%;
    width: 20%;
    height: 20%;
    animation-duration: 6s;
}
.smoke-bubble:nth-child(6){
    right: 12%;
    top: -11%;
    width: 20%;
    height: 20%;
    animation-duration: 6s;
}
.smoke-bubble:nth-child(7){
    left: 28%;
    top: -7%;
    width: 14%;
    height: 14%;
    animation-duration: 3s;
}
.smoke-bubble:nth-child(8){
    right: 28%;
    top: -7%;
    width: 14%;
    height: 14%;
    animation-duration: 3s;
}
.smoke-bubble:nth-child(9){
    left: 35%;
    top: -6%;
    width: 19%;
    height: 19%;
    animation-duration: 5s;
}
.smoke-bubble:nth-child(10){
    right: 35%;
    top: -6%;
    width: 19%;
    height: 19%;
    animation-duration: 5s;
}
.smoke-bubble:nth-child(11){
    left: -9%;
    top: -19%;
    width: 30%;
    height: 30%;
    animation: none;
}

.smoke-bubble:nth-child(12){
    right: -9%;
    top: -19%;
    width: 30%;
    height: 30%;
    animation: none;
}


@keyframes smoke {
    0% {
        transform: scale(1.2);
    }
    50% {
        transform: scale(0.8);
    }
    100% {
        transform: scale(1.2);
    }
}

.fire {
    top: 67%;
    z-index: -4;
    position: absolute;
    left: 50%;
    margin-left: -10px;
    width: 20px;
    height: 20px;
    border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
    background-color: #3943B7;
    transform: rotate(135deg);
    margin-top: 20px;
    animation: flicker infinite 1s alternate ease-in-out;
}

.fire:after {
    content: "";
    top: 5px;
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
    background-color: #dafffe;
    
}

@keyframes flicker {
    0% {
        transform: rotate(135deg) scale(0.8);
        box-shadow: 0 0 17px 10px rgba(165, 238, 224, 0.5);
    }
    25% {
        box-shadow: 0 0 17px 5px rgba(165, 238, 224, 0.5);
    }
    50% {
        box-shadow: 0 0 17px 7px rgba(165, 238, 224, 0.5);
    }
    75% {
        box-shadow: 0 0 17px 5px rgba(165, 238, 224, 0.5);
    }
    100% {
        box-shadow: 0 0 17px 10px rgba(165, 238, 224, 0.5);
    }
}

.takeoff {
    z-index: -4;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 7%;
    height: 100%;
    top: 67%;
    background-image: linear-gradient(to right, #26F0F1 0%, #dafffe 25%, #3943B7 50%, #dafffe 75%, #26F0F1 100%);
}

.shake {
    animation: shake 0.2s infinite cubic-bezier(.36,.07,.19,.97) alternate;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
}



@keyframes shake {
    10%, 90% {
        transform: translate3d(-1px, 0, 0);
    }
    20%, 80% {
        transform: translate3d(-1px, 0, 0);
    }
    30%, 50%, 70% {
        transform: translate3d(-2px, 0, 0);
    }

    40%, 60% {
        transform: translate3d(2px, 0, 0);
    }
}

.shootingstar {
    position: absolute;
    width: 3px;
    height: 20px;
    border-radius: 50%;
    box-shadow: 0 0 6px 3px rgba(255, 255, 255, 0.15);
    background-color: #fff;
    z-index: -2;
    animation: shooting 10s infinite ease; 
}
@keyframes shooting {
    0% {
        opacity: 0;
        transform: translateY(-300px);
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 1;
        transform: translateY(600px);
    }
}

${createStart()}

/* .shootingstar:nth-child(#{$i}) {
    left: random(300) + px;
    top: random(300) + px;
    animation-delay: calc(-400s / #{$i});
} */

/* const */


`;