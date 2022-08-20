import {useState} from 'react';

const ScrolltoTopButton = () => {
    const [visible, setVisible] = useState(false);


    const toggleVisibility = () => {
        const scroll = document.documentElement.scrollTop;
        if (scroll > 500) {
            setVisible(true);
        }
        else if (scroll <= 500) {
            setVisible(false);
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behaviour: 'smooth'
        });
    }

    window.addEventListener('scroll', toggleVisibility);

    return (
        <button onClick={scrollToTop} className="scroll-button" >
             <span className="material-symbols-outlined">
arrow_upward
</span>
           


        </button>
    )

}

export default ScrolltoTopButton;