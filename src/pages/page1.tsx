import LogoTopLeft from "../components/logo_topleft.tsx";
import BackgroundSquares from "../components/background_squres.tsx";
import './page1.css';
import {useState} from "react";
import {
    bit_of_a_bad_story,
    could_allow,
    i_dont_know_how_meaningful,
    i_think_we_chose, uh_november
} from "../utils/images.ts";

const Page1 = () => {
    const [step, setStep] = useState<number>(0);
    const [viewStep, setViewStep] = useState<number>(0);
    const [shouldFadeOut, setShouldFadeOut] = useState<boolean>(false);

    const step1 =
        <>
            <BackgroundSquares/>
            <div className="center-text">
                <div className="justify-center">As social creatures,</div>
                <br/>
                <div style={{
                    "height": "20px"
                }}/>
                <div className="justify-center">
                    humans are naturally inclined to seek out connections with others.
                </div>
            </div>
        </>

    const step2 =
        <>
            <BackgroundSquares/>
            <div className="center-text">
                <div className="justify-center">And yet,<br/>we often face barriers such as</div>
                <br/>
                <div className="justify-center">the fear of the unknown</div>
                <br/>
                <div className="justify-center">and misdirection.</div>
            </div>
        </>

    const step3 =
        <>
            <BackgroundSquares/>
            <div className="center-text">
                <div className="justify-center-wide">This project emanates from the universal desire to articulate feelings perfectly through a number of ways—</div>
                <br/>
                <div className="justify-center-wide">timing, phrasing, delivery.</div>
            </div>
        </>


    const step4 =
        <>
            <BackgroundSquares/>
            <div className="center-text">
                <div className="justify-center-wide">Through the medium of unsent letters, a mosaic of emotions and unspoken words is formed.</div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '40vw',
                    alignItems: 'center'
                }}>
                    <img src={i_think_we_chose} style={{maxWidth: '50%'}}/>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                        <img src={could_allow} style={{maxWidth: '30%', height: 'fit-content'}}/>
                        <img src={bit_of_a_bad_story} style={{maxWidth: '60%'}}/>
                    </div>
                    <img src={i_dont_know_how_meaningful} style={{maxWidth: '60%'}}/>
                    <img src={uh_november} style={{maxWidth: '60%'}}/>
                </div>
            </div>

        </>


    const step5 =
        <>
            <BackgroundSquares/>
            <div className="center-text">
                <div className="justify-center-wide">This project seeks to reveal unspoken sentiments and assemble the elusive, </div>
                <br/>
                <div className="justify-center">”perfect letter”</div>
                <br/>
                <div className="justify-center">from my life, and yours.</div>
            </div>
        </>


    return <>
        <div className={`${shouldFadeOut ? 'fade-out-page' : 'fade-in-page'}`}>
            <LogoTopLeft/>
            <div className='next-button' onClick={() => {
                if(step<4) {
                    setStep(prevStep => prevStep+1);
                    setTimeout(() => {
                        setViewStep(prevViewStep => prevViewStep+1);
                    }, 400)
                } else {
                    setStep(prevStep => prevStep+1);
                    setTimeout(() => {
                        window.location.href = '/a-coded-epistolary/#gallery'
                    }, 400)
                }
            }}>
                next
            </div>
            {viewStep==0 &&
                <div className={step != 0 ? 'fade-out-page' : 'fade-in-page'}>
                    {step1}
                </div>
            }
            {viewStep==1 &&
                <div className={step != 1 ? 'fade-out-page' : 'fade-in-page'}>
                    {step2}
                </div>
            }
            {viewStep==2 &&
                <div className={step != 2 ? 'fade-out-page' : 'fade-in-page'}>
                    {step3}
                </div>
            }
            {viewStep==3 &&
                <div className={step != 3 ? 'fade-out-page' : 'fade-in-page'}>
                    {step4}
                </div>
            }
            {viewStep==4 &&
                <div className={step != 4 ? 'fade-out-page' : 'fade-in-page'}>
                    {step5}
                </div>
            }
        </div>
        <div className={`top-right-text-page1 ${shouldFadeOut ? 'fade-out-page' : 'fade-in-page'}`}>
            [<span className="clickable-text" onClick={() => {
            setShouldFadeOut(true);
            setTimeout(() => {
                window.location.href = '/a-coded-epistolary/#gallery'
            }, 400)
        }}><u>click here</u></span> to return to gallery]
        </div>
    </>
}

export default Page1;