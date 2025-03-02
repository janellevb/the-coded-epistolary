import './App.css'
import DraggableText from "./components/draggable_text.tsx";
import * as utils from "./utils/helper_functions.ts";
// import get30PercentFromTop from "./utils/helper_functions.ts";

function App() {
  return (
    <>
      <DraggableText
        text={"curly fries"}
        initialY={utils.get20PercentFromTop()}
        initialX={utils.getMiddleX()}
      >
      </DraggableText>
      <DraggableText
        text={"crinkle fries"}
        initialY={utils.get20PercentFromTop()+200}
        initialX={utils.getMiddleX()}
      >
      </DraggableText>
      <DraggableText
        text={"waffle fries"}
        initialY={utils.get20PercentFromTop()+400}
        initialX={utils.getMiddleX()}
      >
      </DraggableText>
    </>
  )
}

export default App
