import Border from "./components/Border.js"
import Clock from "./components/Clock.js"
import Text from "./components/Text.js"
import Typewriter from "./components/Typewriter.js"
import Split from "./components/Split.js"
import literal from "./literal/index.js"
import gameOfLife from "./components/GameOfLife.js"
import Input from "./components/Input.js"

literal("#app").then(mount => mount(app()))

function app() {
	return Split(Input(), gameOfLife(), { separatorAt: 0 })
}

// const chars = "─│┌┐└┘├┤┬┴┼".split("")
