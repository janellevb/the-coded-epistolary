import {useEffect, useRef, useState} from 'react';
import styled from "styled-components";

interface DraggableTextProps {
	text: string,
	initialY: number,
	initialX: number
}

const StyledBox = styled.div`
    position: absolute;
    width: 200px;
    height: 100px;
    background-color: #3498db;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: box-shadow 0.2s ease;
	`;

function DraggableText( {text, initialY, initialX} : DraggableTextProps ) {
	const [position, setPosition] = useState({x: initialX-100, y: initialY});
	const [isDragging, setIsDragging] = useState(false);
	const boxRef = useRef<HTMLDivElement>(null);

	const handleMouseDown = () => {
		setIsDragging(true);
	};

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
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

		if (isDragging) {
			document.addEventListener('mousemove', handleMouseMove);
			document.addEventListener('mouseup', handleMouseUp);
		}

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};
	}, [isDragging, setPosition]);

	return (
		<StyledBox
			style={{
				cursor: isDragging ? 'grabbing' : 'grab',
				transform: `translate(${position.x}px, ${position.y}px)`,
			}}
			onMouseDown={handleMouseDown}
			ref={boxRef}
		>
			{text}
		</StyledBox>
	);
}

export default DraggableText;