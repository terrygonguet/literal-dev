/** @typedef {import("../literal").RenderFn} RenderFn */

/**
 * @typedef {Object} PaddingOptions
 * @property {number} vertical
 * @property {number} horizontal
 */

/**
 * @param {Object} options
 * @param {string=} options.title
 * @param {number | PaddingOptions=} options.padding
 * @param {RenderFn=} options.child
 * @returns {RenderFn}
 */
export default function Border({ title = "", padding = 1, child } = {}) {
	const vpad = typeof padding == "number" ? padding : padding.vertical
	const hpad = typeof padding == "number" ? padding : padding.horizontal
	return function ({ width, height, registerChild }) {
		const filler = child ? registerChild(child) : " "
		if (title.length > width - 4) title = title.slice(0, width - 7) + "..."
		const space = width - title.length - 4
		const left = Math.floor(space / 2),
			right = Math.ceil(space / 2)
		return (
			"┌" +
			"─".repeat(left) +
			` ${title} ` +
			"─".repeat(right) +
			"┐" +
			("│" + " ".repeat(width - 2) + "│").repeat(vpad) +
			("│" + " ".repeat(hpad) + filler.repeat(width - 2 - 2 * hpad) + " ".repeat(hpad) + "│").repeat(
				height - 2 - 2 * vpad,
			) +
			("│" + " ".repeat(width - 2) + "│").repeat(vpad) +
			"└" +
			"─".repeat(width - 2) +
			"┘"
		)
	}
}
