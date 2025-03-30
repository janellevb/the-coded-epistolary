import {useEffect, useState} from "react";
import * as utils from "../utils/helper_functions.ts";


const heightBlocks = Math.floor(window.innerHeight/70)
const widthBlocks = Math.floor(window.innerWidth/70)

const BackgroundSquares = () => {
    const [coordinates] = useState(Array.from({ length: 8 }, () => {
        return {x: utils.getRandomInt(1, widthBlocks-1)*70, y: utils.getRandomInt(1, heightBlocks-1)*70}
    }));
    const [colours, setColours] = useState<string[]>([]);

    useEffect(() => {
        setColours(["#E6EF7D", "#2BAECC", "#65D6BC", "#A4A5F1", "#C766D6", "#958C97", "#BADD13", "#D67D66"])
    }, []);

    return <>
        <div>
            {colours.map((colour: string, index: number) => (
                <div
                    key={`${colour+index}`}
                    style={{
                        backgroundColor: colour,
                        position: "absolute",
                        left: `${coordinates[index].x}px`,
                        top: `${coordinates[index].y}px`,
                        height: '70px',
                        width: '70px',
                        zIndex: '-1'
                    }}
                >
                </div>
            ))}
        </div>
    </>
}

export default BackgroundSquares;