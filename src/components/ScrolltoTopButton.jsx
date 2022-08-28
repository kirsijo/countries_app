import {useState} from 'react';
import Button from 'react-bootstrap/Button';

const ScrolltoTopButton = (props) => {
    const [visible, setVisible] = useState("hidden");
    const [scrollPosition, setSrollPosition] = useState(0);


    const toggleVisibility = () => {
        const scroll = document.documentElement.scrollTop;
        if (scroll > 50) {
            setVisible("visible");
        }
        else if (scroll <= 50) {
            setVisible("hidden");
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
        <>
        <style type="text/css">
        {`
        .btn-visible { 
        display:block;
        position: fixed; 
        background-color: #26d9f7;
        border-radius: 50%;
        right: 5%;
        bottom: 40px;
        cursor: pointer;
        color: blue;
        font-size: 2.5rem;
        }

        .btn-visible:hover { 
            display:block;
            position: fixed; 
            background-color: #26d9f7;
            border-radius: 50% ;
            right: 5%;
            bottom: 40px;
            cursor: pointer;
            color: #82b791;
            font-size: 2.5rem;
            }

        .btn-hidden {
        display: none;
        } 
        `}
    </style>
        <Button onClick={scrollToTop} variant={visible} >
             <i className="bi bi-arrow-up-circle-fill"></i>
        
        </Button>
        </>
    )

}

export default ScrolltoTopButton;