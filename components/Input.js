/**
 * @returns {import("../literal").RenderFn}
 */
export default function Input() {
	let value = "WIP",
		key = {}
	return function ({ width, height, registerInput, registerHook, invalidate }) {
		return " " + value + " ".repeat(width - value.length - 1) + " ".repeat(width).repeat(height - 1)
	}
}
