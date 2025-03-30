import {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import * as React from "react";

interface DraggableTextProps {
	text: string,
	index: number,
	initialY: number,
	initialX: number | null
	callback: (index: number, shouldPin: boolean) => void,
	hideTextBank: boolean,
	leftRightCounter: number,
	page: number,
	shouldPin: boolean,
}

const StyledBox = styled.div`
    height: 1px;
    width: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    position: absolute;
    top: 0;
    left: 0;
	transition: opacity 0.5s ease-in-out;
`;

const DraggableText = ( {text, index, initialX, initialY, callback, hideTextBank, leftRightCounter, page, shouldPin}: DraggableTextProps) => {
	const [position, setPosition] = useState({x: initialX != null ? initialX : 0, y: initialY});
	const [isDragging, setIsDragging] = useState(false);
	const boxRef = useRef<HTMLDivElement>(null);
	const imgRef = useRef<HTMLImageElement>(null);
	const [imageWidthHalf, setImageWidthHalf] = useState(0);
	const [imageHeightHalf, setImageHeightHalf] = useState(0);
	const [textBankYThreshold, setTextBankYThreshold] = useState(0);
	const [textBankXThreshold, setTextBankXThreshold] = useState(0);

	const scale = 0.74;

	const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		event.preventDefault()
		setIsDragging(true);
	};

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			event.preventDefault()
			if (isDragging) {
				setPosition((prevPosition) => ({
					x: prevPosition.x + event.movementX,
					y: prevPosition.y + event.movementY,
				}));
			}
		};

		const handleMouseUp = () => {
			setIsDragging(false);
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};

		if (isDragging && leftRightCounter == page || shouldPin) {
			document.addEventListener('mousemove', handleMouseMove);
			document.addEventListener('mouseup', handleMouseUp);
		}

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};
	}, [isDragging, setPosition]);

	useEffect(() => {
		// console.log(imageHeightHalf, imageWidthHalf)
		if(isDragging && !hideTextBank) {
			if(position.y>=textBankYThreshold+imageHeightHalf
				&& position.x>=textBankXThreshold+imageWidthHalf
				&& position.x<=(window.innerWidth-textBankXThreshold-imageWidthHalf)) {
				callback?.call(this, index, true)
			}
			else {
				callback?.call(this, index, false)
			}
		}
	}, [position, textBankYThreshold]);

	useEffect(() => {
		const calculateThreshold = () => {
			setTextBankYThreshold(window.innerHeight * 0.75);
			setTextBankXThreshold(window.innerWidth * 0.14);
		};

		calculateThreshold();
		window.addEventListener('resize', calculateThreshold);
		return () => {
			window.removeEventListener('resize', calculateThreshold);
		};
	}, [])

	useEffect(() => {
		const img = imgRef.current;

		const handleImageLoad = () => {
			if (img) {
				const originalWidth = img.naturalWidth;
				const originalHeight = img.naturalHeight;

				setImageWidthHalf((originalWidth * scale) / 2);
				setImageHeightHalf((originalHeight * scale) / 2);
			}
		};

		if (img) {
			if (img.complete) {
				handleImageLoad();
			} else {
				img.addEventListener('load', handleImageLoad);

				return () => {
					img.removeEventListener('load', handleImageLoad);
				};
			}
		}
	}, [scale]);

	return (
		<StyledBox
			style={{
				cursor: leftRightCounter == page ? isDragging ? 'grabbing' : 'grab' : '',
				transform: `translate(${position.x}px, ${position.y}px) translateX(-50%)`,
				opacity: page != leftRightCounter && !shouldPin ? '0.4' : '1',
			}}
			className="img-drop-shadow"
			onMouseDown={handleMouseDown}
			ref={boxRef}
		>
			<img
				src={text}
				style={{scale: `${scale}`, zIndex: '3',}}
				ref={imgRef}
				alt="Draggable Image"
			/>
		</StyledBox>
	);
}

export default DraggableText;