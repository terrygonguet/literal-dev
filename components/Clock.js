import Text from "./Text.js"

/**
 * @param {Intl.DateTimeFormatOptions} options
 * @returns {import("../literal").RenderFn}
 */
export default function Clock(options) {
	const formatter = new Intl.DateTimeFormat(undefined, options)
	return function ({ width, height, registerChild, invalidate }) {
		const child = registerChild(
			Text(formatter.format(new Date()), { verticalAlign: "center", horizontalAlign: "center" }),
		)
		setTimeout(invalidate, 1000)
		return child.repeat(width).repeat(height)
	}
}
