import Text from "./Text.js"

/**
 * @returns {import("../literal").RenderFn}
 */
export default function Input() {
	let key = {},
		caret = true
	return function ({ width, height, registerFocus, registerChild, invalidate }) {
		const multiline = height > 1
		const value = registerFocus(key, activeFocus => invalidate((caret = key == activeFocus)))
		const text = value + (caret ? "█" : "")
		const child = registerChild(Text(multiline ? text : text.slice(-width + 2)))
		return child.repeat(width).repeat(height)
	}
}
