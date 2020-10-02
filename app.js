import Border from "./components/Border.js"
import Input from "./components/Input.js"
import Split from "./components/Split.js"
import literal from "./literal/index.js"

literal("#app").then(mount => mount(app()))

function app() {
	return Split(Input(), Input(), { direction: "vertical", separatorAt: 0.5 })
}

// const chars = "─│┌┐└┘├┤┬┴┼".split("")
