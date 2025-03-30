export function get25PercentFromTop() : number {
	const screenHeight = window.innerHeight;
	return screenHeight * 0.25;
}

export function getMiddleX(multiplier: number) : number {
	const screenWidth = window.innerWidth;
	return screenWidth * 0.5 * (multiplier ?? 1);
}

export function getRandomInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
