import React from "react";
import { useRef} from "react";
import { useState} from "react";
import '../../../styles/accordion.css';
import Map from "../LocComponents/Location";
/*import MailDoc from "../MailComponents";*/

const AccordionItem = ({ faq }) => {
    const [clicked, setClicked] = useState(false);
    const contentEl = useRef();

    const { question, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, answer11, answer12, answer13 } = faq;

    const handleToggle = () => {
        setClicked((prev) => !prev);
    };

    return (

        <div className={`accordion_item  docBox  ${clicked ? "active" : ""}`}>


            <div id={'map'} >
                <Map/>
                {/* <MailDoc/>*/}
            </div>
            <script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
                defer
            ></script>

            <button className="button docButton" onClick={handleToggle}>
                {question}
                <span className="control ">{clicked ? "-" : "+"} </span>
            </button>

            <div
                ref={contentEl}
                className="answer_wrapper"
                style={
                    clicked
                        ? { height: contentEl.current.scrollHeight }
                        : { height: "0px" }
                }
            >
                <div className={'row docBox-1  '} >
                    <div className={'col-md-6 docBox-2'} >
                        <div className="answer ">{answer1}</div><hr className={'hrdoc'}/>
                        <div className="answer">{answer2}</div><hr className={'hrdoc'} />
                        <div className="answer">{answer3}</div><hr className={'hrdoc'} />
                        <div className="answer">{answer4}</div><hr className={'hrdoc'} />
                        <div className="answer">{answer5}</div><hr className={'hrdoc'} />
                        <div className="answer">{answer6}</div><hr className={'hrdoc'} />
                    </div>
                    <div className={'col-md-6 docBox-3'}>
                        <div className="answer">{answer7}</div><hr className={'hrdoc'} />
                        <div className="answer">{answer8}</div><hr className={'hrdoc'} />
                        <div className="answer">{answer9}</div><hr className={'hrdoc'} />
                        <div className="answer">{answer10}</div><hr className={'hrdoc'} />
                        <div className="answer">{answer11}</div><hr className={'hrdoc'} />
                        <div className="answer">{answer12}</div><hr className={'hrdoc'} />
                        <div className="answer">{answer13}</div><hr className={'hrdoc'} />
                    </div>
                </div>


            </div>



        </div>

    );
};

export default AccordionItem;