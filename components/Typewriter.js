import Text from "./Text.js"

/** @typedef {import("../literal").RenderFn} RenderFn */

/**
 * @param {string} txt
 * @param {Object} options
 * @param {number} options.charactersPerSecond
 * @returns {RenderFn}
 */
export default function Typewriter(txt, { charactersPerSecond = 35, step = 3 } = {}) {
	let i = 0
	return function ({ width, height, invalidate, registerChild }) {
		const child = registerChild(Text(txt.slice(0, i)))
		if (i < txt.length) setTimeout(invalidate, 1000 / charactersPerSecond)
		i += step
		return child.repeat(width).repeat(height)
	}
}
