import Border from "./components/Border.js"
import Clock from "./components/Clock.js"
import Text from "./components/Text.js"
import Typewriter from "./components/Typewriter.js"
import literal from "./literal/index.js"

const mount = literal("#app").then(mount => mount(app()))

function app() {
	return Border({
		title: "This is a test of Literal",
		padding: { vertical: 1, horizontal: 2 },
		child: Clock({
			weekday: "long",
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: false,
		}),
	})
}

// const chars = "─│┌┐└┘├┤┬┴┼".split("")
