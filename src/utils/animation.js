import { keyframes } from "styled-components"

export const fadeIn = keyframes`
 

   25% {
      opacity: 1;
      transform: translateX(0);
   }
   50% {
      opacity: 0.8;
      transform: translateX(0);
   }
   100% {
      opacity: 0.6;
      transform: translateX(-300px);
   }
 
} 
`

export const spinRotation = keyframes`
    0% {
        transform: translate(0, 0) rotate(0) scale(1);
        transform: translate(0, 0) rotate(0) scale(1)
    }
    10% {
        transform: translate(15px, -2px) rotate(10deg) scale(1.2);
        transform: translate(15px, -2px) rotate(10deg) scale(1.2)
    }
    20% {
        transform: translate(130px, -2px) rotate(-20deg) scale(1.5);
        transform: translate(130px, -2px) rotate(-20deg) scale(1.5)
    }
    40% {
        transform: translate(260px, -40px) rotate(10deg) scale(.8);
        transform: translate(260px, -40px) rotate(10deg) scale(.8);
        opacity: .5
    }
    100% {
        transform: translate(1000px, -200px) rotate(60deg) scale(0);
        transform: translate(1000px, -200px) rotate(60deg) scale(0);
        opacity: 0
    }
`
