import Text from "./Text.js"

/**
 * @returns {import("../literal").RenderFn}
 */
export default function Input() {
	let key = {},
		caret = true
	return function ({ width, height, registerInput, registerChild, invalidate }) {
		const multiline = height > 1
		const value = registerInput(key, invalidate, {
			onFocusChange: focus => invalidate((caret = focus)),
			multiline,
		})
		const text = value + (caret ? "█" : "")
		const child = registerChild(Text(multiline ? text : text.slice(-width + 2)))
		return child.repeat(width).repeat(height)
	}
}
