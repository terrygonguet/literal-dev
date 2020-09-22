import Border from "./components/Border.js"
import Clock from "./components/Clock.js"
import Text from "./components/Text.js"
import Typewriter from "./components/Typewriter.js"
import Split from "./components/Split.js"
import literal from "./literal/index.js"
import gameOfLife from "./components/GameOfLife.js"

const mount = literal("#app").then(mount => mount(app()))

function app() {
	return Split(
		Clock({
			weekday: "long",
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: false,
		}),
		gameOfLife(),
		{ separatorAt: 0 },
	)
}

// const chars = "─│┌┐└┘├┤┬┴┼".split("")
