import DraggableText from "../components/draggable_text.tsx";
import * as utils from "../utils/helper_functions.ts";
import * as images from '../utils/images.ts';
import TextBank from "../components/text_bank.tsx";
import arrowLeft from "../assets/arrow_left.png";
import arrowRight from "../assets/arrow_right.png";
import {useState, useRef, useEffect} from 'react';
import './gallery_page.css';
import LogoTopLeft from "../components/logo_topleft.tsx";

interface TextItem {
	text: string;
	initialY: number;
	initialX: number;
	shouldPin?: boolean;
	page: number;
}

const numberOfPages = 20;
const heightBlocks = Math.floor(window.innerHeight/70)
const widthBlocks = Math.floor(window.innerWidth/70)


const GalleryPage = () => {
	const [page1, setPage1] = useState<TextItem[]>([
		{ text: images.i_miss_you, initialY: utils.get25PercentFromTop() + 125, initialX: utils.getMiddleX(1), shouldPin: false, page: 0 },
		{ text: images.im_going_to, initialY: utils.get25PercentFromTop() + 250, initialX: utils.getMiddleX(1), shouldPin: false, page: 0 },
		{ text: images.start_off_positively, initialY: utils.get25PercentFromTop() + 365, initialX: utils.getMiddleX(1), shouldPin: false, page: 0 },
		{ text: images.if_youd_like, initialY: utils.get25PercentFromTop() +185, initialX: utils.getMiddleX(1), shouldPin: false, page: 1 },
		{ text: images.to_see_a_museum, initialY: utils.get25PercentFromTop() + 270, initialX: utils.getMiddleX(1), shouldPin: false, page: 1 },
		{ text: images.that_probably, initialY: utils.get25PercentFromTop() + 150, initialX: utils.getMiddleX(1), shouldPin: false, page: 2 },
		{ text: images.i_am, initialY: utils.get25PercentFromTop() + 230, initialX: utils.getMiddleX(1), shouldPin: false, page: 2 },
		{ text: images.leaning_more, initialY: utils.get25PercentFromTop() + 310, initialX: utils.getMiddleX(1), shouldPin: false, page: 2 },
		{ text: images.the_idea_of_a_structure, initialY: utils.get25PercentFromTop()+170, initialX: utils.getMiddleX(1), shouldPin: false, page: 3 },
		{ text: images.a_thing_that_worries, initialY: utils.get25PercentFromTop()+290, initialX: utils.getMiddleX(1), shouldPin: false, page: 3 },
		{ text: images.but_yeah, initialY: utils.get25PercentFromTop()+110, initialX: utils.getMiddleX(1), shouldPin: false, page: 4 },
		{ text: images.if_we_could_talk, initialY: utils.get25PercentFromTop()+230, initialX: utils.getMiddleX(1), shouldPin: false, page: 4 },
		{ text: images.that_could_allow, initialY: utils.get25PercentFromTop()+360, initialX: utils.getMiddleX(1), shouldPin: false, page: 4 },
		{ text: images.ive_been_through, initialY: utils.get25PercentFromTop()+190, initialX: utils.getMiddleX(1), shouldPin: false, page: 5 },
		{ text: images.i_dont_even_know, initialY: utils.get25PercentFromTop()+290, initialX: utils.getMiddleX(1), shouldPin: false, page: 5 },
		{ text: images.i_think_we_chose, initialY: utils.get25PercentFromTop()+100, initialX: utils.getMiddleX(1), shouldPin: false, page: 6 },
		{ text: images.could_allow, initialY: utils.get25PercentFromTop()+170, initialX: utils.getMiddleX(1), shouldPin: false, page: 6 },
		{ text: images.bit_of_a_bad_story, initialY: utils.get25PercentFromTop()+280, initialX: utils.getMiddleX(1), shouldPin: false, page: 6 },
		{ text: images.uh_november, initialY: utils.get25PercentFromTop()+390, initialX: utils.getMiddleX(1), shouldPin: false, page: 6 },
		{ text: images.is_it_okay, initialY: utils.get25PercentFromTop()+90, initialX: utils.getMiddleX(1), shouldPin: false, page: 7 },
		{ text: images.i_die_from, initialY: utils.get25PercentFromTop()+170, initialX: utils.getMiddleX(1), shouldPin: false, page: 7 },
		{ text: images.idea_of_physical_intimacy, initialY: utils.get25PercentFromTop()+260, initialX: utils.getMiddleX(1), shouldPin: false, page: 7 },
		{ text: images.this_weekend, initialY: utils.get25PercentFromTop()+370, initialX: utils.getMiddleX(1), shouldPin: false, page: 7 },
		{ text: images.ok_that_sounds, initialY: utils.get25PercentFromTop()+50, initialX: utils.getMiddleX(1), shouldPin: false, page: 8 },
		{ text: images.like_a_lot_of, initialY: utils.get25PercentFromTop()+150, initialX: utils.getMiddleX(1), shouldPin: false, page: 8 },
		{ text: images.happened_so_fast, initialY: utils.get25PercentFromTop()+250, initialX: utils.getMiddleX(1), shouldPin: false, page: 8 },
		{ text: images.a_theory, initialY: utils.get25PercentFromTop()+350, initialX: utils.getMiddleX(1), shouldPin: false, page: 8 },
		{ text: images.it_using_words, initialY: utils.get25PercentFromTop()+450, initialX: utils.getMiddleX(1), shouldPin: false, page: 8 },
		{ text: images.how_do_you, initialY: utils.get25PercentFromTop()+135, initialX: utils.getMiddleX(1), shouldPin: false, page: 9 },
		{ text: images.want_to_grab, initialY: utils.get25PercentFromTop()+260, initialX: utils.getMiddleX(1), shouldPin: false, page: 9 },
		{ text: images.coffee, initialY: utils.get25PercentFromTop()+375, initialX: utils.getMiddleX(1), shouldPin: false, page: 9 },
		{ text: images.reinventing_myself, initialY: utils.get25PercentFromTop()+90, initialX: utils.getMiddleX(1), shouldPin: false, page: 10 },
		{ text: images.for_the_night, initialY: utils.get25PercentFromTop()+210, initialX: utils.getMiddleX(1), shouldPin: false, page: 10 },
		{ text: images.or_do_you, initialY: utils.get25PercentFromTop()+310, initialX: utils.getMiddleX(1), shouldPin: false, page: 10 },
		{ text: images.want_to_talk, initialY: utils.get25PercentFromTop()+410, initialX: utils.getMiddleX(1), shouldPin: false, page: 10 },
		{ text: images.ill_miss_you, initialY: utils.get25PercentFromTop()+200, initialX: utils.getMiddleX(1), shouldPin: false, page: 11 },
		{ text: images.too, initialY: utils.get25PercentFromTop()+320, initialX: utils.getMiddleX(1), shouldPin: false, page: 11 },
		{ text: images.thank_u_for_being, initialY: utils.get25PercentFromTop()+190, initialX: utils.getMiddleX(1), shouldPin: false, page: 12 },
		{ text: images.entrenched, initialY: utils.get25PercentFromTop()+320, initialX: utils.getMiddleX(1), shouldPin: false, page: 12 },
		{ text: images.meet_eggplants_top, initialY: utils.get25PercentFromTop()+190, initialX: utils.getMiddleX(1), shouldPin: false, page: 13 },
		{ text: images.meet_eggplants_bottom, initialY: utils.get25PercentFromTop()+310, initialX: utils.getMiddleX(1), shouldPin: false, page: 13 },
		{ text: images.see_flirt_top, initialY: utils.get25PercentFromTop()+200, initialX: utils.getMiddleX(1), shouldPin: false, page: 14 },
		{ text: images.that_u_miss_bottom, initialY: utils.get25PercentFromTop()+320, initialX: utils.getMiddleX(1), shouldPin: false, page: 14 },
		{ text: images.ur_identity_top, initialY: utils.get25PercentFromTop()+210, initialX: utils.getMiddleX(1), shouldPin: false, page: 15 },
		{ text: images.ur_identity_bottom, initialY: utils.get25PercentFromTop()+290, initialX: utils.getMiddleX(1), shouldPin: false, page: 15 },
		{ text: images.lets_talk_in_the_top, initialY: utils.get25PercentFromTop()+190, initialX: utils.getMiddleX(1), shouldPin: false, page: 16 },
		{ text: images.physical_bottom, initialY: utils.get25PercentFromTop()+280, initialX: utils.getMiddleX(1), shouldPin: false, page: 16 },
		{ text: images.my_hair_looked_nice_today, initialY: utils.get25PercentFromTop()+190, initialX: utils.getMiddleX(1), shouldPin: false, page: 17 },
		{ text: images.i_wish_you_saw, initialY: utils.get25PercentFromTop()+280, initialX: utils.getMiddleX(1), shouldPin: false, page: 17 },
		{ text: images.its_been_a_long_time_since, initialY: utils.get25PercentFromTop()+150, initialX: utils.getMiddleX(1), shouldPin: false, page: 18 },
		{ text: images.say_something_new, initialY: utils.get25PercentFromTop()+250, initialX: utils.getMiddleX(1), shouldPin: false, page: 18 },
		{ text: images.also_nobody, initialY: utils.get25PercentFromTop()+350, initialX: utils.getMiddleX(1), shouldPin: false, page: 18 },
		{ text: images.it_isnt_a_conversation, initialY: utils.get25PercentFromTop()+350, initialX: utils.getMiddleX(1), shouldPin: false, page: 19 },
		{ text: images.sometimes_we_should_just, initialY: utils.get25PercentFromTop()+350, initialX: utils.getMiddleX(1), shouldPin: false, page: 19 },
		{ text: images.you_want_to_be_perceived, initialY: utils.get25PercentFromTop()+350, initialX: utils.getMiddleX(1), shouldPin: false, page: 19 },
		{ text: images.but_are_too_lazy, initialY: utils.get25PercentFromTop()+350, initialX: utils.getMiddleX(1), shouldPin: false, page: 19 },
	]);
	const [leftRightCounter, setLeftRightCounter] = useState<number>(0);
	const [hideTextBank, setHideTextBank] = useState<boolean>(true);
	const [showArrowGuide, setShowArrowGuide] = useState<boolean>(true);
	const [showDragGuide, setShowDragGuide] = useState<boolean>(true);
	const [textContainerOffset, setTextContainerOffset] = useState(0);
	const [hideLeftArrow, setHideLeftArrow] = useState<boolean>(true);
	const [hideRightArrow, setHideRightArrow] = useState<boolean>(false);
	const [shouldFadeOut, setShouldFadeOut] = useState<boolean>(false);
	const [colours, setColours] = useState<string[]>([]);
	const [coordinates, setCoordinates] = useState(Array.from({ length: 8 }, () => {
		return {x: utils.getRandomInt(1, widthBlocks-1)*70, y: utils.getRandomInt(1, heightBlocks-1)*70}
	}));

	const [showNew, setShowNew] = useState(true);
	const oldElementsRef = useRef<HTMLDivElement>(null);
	const newElementsRef = useRef<HTMLDivElement>(null);

	const handleClick = () => {
		const newCoordinates = Array.from({ length: 8 }, () => ({
			x: utils.getRandomInt(1, widthBlocks-1)*70,
			y: utils.getRandomInt(1, heightBlocks-1)*70,
		}));

		if (showNew) {
			oldElementsRef.current?.classList.add('fade-out');
			newElementsRef.current?.classList.remove('fade-in');
		} else {
			oldElementsRef.current?.classList.add('fade-out');
			newElementsRef.current?.classList.remove('fade-in');
		}

		setTimeout(() => {
			setCoordinates(newCoordinates);
			setShowNew(!showNew);

			if (showNew) {
				newElementsRef.current?.classList.add('fade-in');
				oldElementsRef.current?.classList.remove('fade-out');
			} else {
				newElementsRef.current?.classList.add('fade-in');
				oldElementsRef.current?.classList.remove('fade-out');
			}
		}, 200);
	};


	useEffect(() => {
		if (showNew) {
			newElementsRef.current?.classList.add('fade-in');
		} else {
			newElementsRef.current?.classList.add('fade-in');
		}

		setColours(["#E6EF7D", "#2BAECC", "#65D6BC", "#A4A5F1", "#C766D6", "#958C97", "#BADD13", "#D67D66"])

		return () => {
			if (oldElementsRef.current) {
				oldElementsRef.current.className = '';
			}
			if (newElementsRef.current) {
				newElementsRef.current.className = '';
			}
		};
	}, []);

	useEffect(() => {
		if(leftRightCounter>0) {
			setHideLeftArrow(false);
		} else {
			setHideLeftArrow(true);
		}
		if(leftRightCounter==numberOfPages-1) {
			setHideRightArrow(true);
		} else {
			setHideRightArrow(false);
		}
	}, [leftRightCounter]);

	const handleLeftArrowClick = () => {
		if(leftRightCounter>0) {
			handleClick();
			setTextContainerOffset(prevOffset => prevOffset + 50);
			setLeftRightCounter(prevCounter => prevCounter-1);
		}
	};

	const handleRightArrowClick = () => {
		setShowArrowGuide(false);
		if(leftRightCounter<numberOfPages-1) {
			handleClick();
			setTextContainerOffset(prevOffset => prevOffset - 50);
			setLeftRightCounter(prevCounter => prevCounter+1);
		}
	};

	const toggleTextBank = () => {
		setShowDragGuide(false);
		setHideTextBank(prevValue => !prevValue);
	};

	const handleCallback1 = (index: number, shouldPin: boolean) => {
		const newDraggableTextPage1 = page1.map((item: TextItem, i: number) => {
			if (i === index) {
				return { ...item, shouldPin: shouldPin, page: leftRightCounter};
			} else {
				return item;
			}
		});
		setPage1(newDraggableTextPage1);
	};

	return (
		<div className={`${shouldFadeOut ? 'fade-out-page' : 'fade-in-page'}`}>
			{!hideLeftArrow && <img
				src={arrowLeft}
				width={40}
				height={40}
				style={{
					position: 'absolute',
					left: '5%',
					top: '50%',
					transform: 'translateY(-50%)',
					cursor: 'pointer',
					zIndex: 10
				}}
				onClick={handleLeftArrowClick}
			/>
			}
			{!hideRightArrow && <div style={{
				alignItems: 'center',
				display: 'flex',
				position: 'absolute',
				right: '5%',
				top: '50%',
				transform: 'translateY(-50%)',
				zIndex: 10
			}}>
				<div className={`text ${showArrowGuide ? '' : 'fadeOut'}`}>
		  [click the arrow to explore more memories]
				</div>
		<img
			src={arrowRight}
			width={40}
			height={40}
			style={{
							// position: 'absolute',
							// right: '5%',
							// top: '50%',
							cursor: 'pointer',
						}}
			onClick={handleRightArrowClick}
		  />
			</div>
			}
			<div className="elements-container">
				<div className="old-elements" ref={oldElementsRef}>
					{colours.map((colour: string, index: number) => (
						<div
							key={`old-${colour+index}`}
							style={{
								backgroundColor: colour,
								position: "absolute",
								left: `${coordinates[index].x}px`,
								top: `${coordinates[index].y}px`,
								height: '70px',
								width: '70px'
							}}
						>
						</div>
					))}
				</div>

				<div className="new-elements" ref={newElementsRef}>
					{colours.map((colour: string, index: number) => (
						<div
							key={`new-${colour+index}`}
							style={{
								backgroundColor: colour,
								position: "absolute",
								left: `${coordinates[index].x}px`,
								top: `${coordinates[index].y}px`,
								height: '70px',
								width: '70px'
							}}
						>
						</div>
					))}
				</div>
			</div>
			<LogoTopLeft/>
			{!showArrowGuide &&
				<div style={{
					display: 'flex',
					flexDirection: 'column'
				}} className="fadeIn">
					<div
						className={`text ${showDragGuide ? '': 'fadeOut'}`}
						style={{
							textAlign: 'center',
							width: '100vw',
							transform: 'translateX(-50%)',
							position: 'fixed',
							left: '50%',
							bottom: '70px'
					}}>
						[click to open and store notes here]
					</div>
					<TextBank
						callback={toggleTextBank}
					/>
				</div>
			}
			<div style={{
				position: 'relative',
				left: `${textContainerOffset}vw`,
				transition: 'left 0.5s ease-out',
				width: 'fit-content',
				height: '100vh'
			}}>
				{page1.map((data, index) => {
					return <div
						key={index}
						style={{
						position: 'relative',
						transition: 'left 0.5s ease-out, transform 0.3s ease-out',
						// left: `${data.shouldPin ? leftRightCounter*50 : data.page*50}vw`,
						left: `${data.shouldPin ? leftRightCounter*50 : data.page*50}vw`,
						transform: `translateY(${hideTextBank && data.shouldPin ? 'calc(25vh - 39px)' : 0})`,
						// transition: '0.3s ease-out',
					}}>
						<DraggableText
							key={data.text}
							hideTextBank={hideTextBank}
							index={index}
							shouldPin={data.shouldPin ?? false}
							leftRightCounter={leftRightCounter}
							page={data.page}
							text={data.text}
							initialY={data.initialY}
							initialX={data.initialX}
							callback={handleCallback1}
						/>
					</div>
				})}
			</div>
			<div className={`top-right-text ${shouldFadeOut ? 'fade-out-page' : 'fade-in-page'}`}>
				[<span className="clickable-text" onClick={() => {
				setShouldFadeOut(true);
				setTimeout(() => {
					window.location.href = '/a-coded-epistolary/#page1'
				}, 400)
			}}><u>click here</u></span> to know more]
			</div>
		</div>
	);
};

export default GalleryPage;