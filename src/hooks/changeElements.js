import { useState } from "react";
import confetti from 'canvas-confetti';

export const useChangeElements = () => {
    const [index, setIndex] = useState(0);
    const [textP, setTextP] = useState('Vamos, respóndeme! ');
    const [image, setImage] = useState('https://i.pinimg.com/originals/f6/a5/f7/f6a5f7ddff1f05cbcc560256b9f98c2e.gif');
    const [accepted, setAccepted] = useState(false); // Controla si ya se mostró el mensaje de agradecimiento

    const options = [
        'Segura?', 'Segurísima?', 'Estás completamente segura?', 
        'No te arrepentirás?', 'Pero si estás segura?', 'No hay vuelta atrás', 
        'No hay devoluciones', 'No hay garantía', 'No hay reembolsos', 
        'No hay cambios', 'Estás segura vale?'
    ];

    const handleButtonNo = () => {
        if (index < options.length - 1) {
            setIndex(index + 1);
            setImage('https://media.tenor.com/ivKWdfdbV3EAAAAi/goma-goma-cat.gif');
            setTextP(options[index]);
        } else {
            window.location.href = "https://www.youtube.com/watch?v=b3rNUhDqciM"; // Cambia esto por el enlace de destino
        }
    };

    const handleButtonYes = () => {
        if (!accepted) {
            // Si aún no ha aceptado, primero muestra el mensaje de agradecimiento
            setImage("https://i.pinimg.com/originals/e4/9d/7b/e49d7b7e965f09e31b498314b02e3662.gif");
            setTextP('Gracias por aceptar, te quiero mucho <3');
            confetti();
            setAccepted(true);
        } else {
            // Si ya aceptó antes, ahora sí lo redirige al enlace
            window.location.href = "https://www.youtube.com/watch?v=71NAThAf5yw"; // Cambia esto por el enlace de destino
        }
    };

    return { handleButtonNo, handleButtonYes, textP, image };
};
