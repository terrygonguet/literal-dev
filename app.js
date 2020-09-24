import Border from "./components/Border.js"
import Input from "./components/Input.js"
import literal from "./literal/index.js"

literal("#app").then(mount => mount(app()))

function app() {
	return Border({
		title: "This is a text input test, please break it",
		child: Input(),
		padding: { vertical: 1, horizontal: 2 },
	})
}

// const chars = "─│┌┐└┘├┤┬┴┼".split("")
