/**
 * @typedef {import("../literal").RenderFn} RenderFn
 */

/**
 * @param {RenderFn} child1
 * @param {RenderFn} child2
 * @param {Object} options
 * @param {"vertical" | "horizontal"} options.direction
 * @param {number} options.separatorAt
 * @returns {RenderFn}
 */
export default function Split(child1, child2, { direction = "vertical", separatorAt = 0.5 } = {}) {
	// TODO: data validation
	return function ({ width, height, registerChild }) {
		const filler1 = registerChild(child1)
		const filler2 = registerChild(child2)
		if (direction == "vertical") {
			let sectionHeight1 = Math.ceil(height * separatorAt) - 1
			if (sectionHeight1 <= 0) sectionHeight1 = 1
			else if (sectionHeight1 >= height - 2) sectionHeight1 = height - 4

			let sectionHeight2 = height - sectionHeight1 - 1

			return (
				"┌" +
				"─".repeat(width - 2) +
				"┐" +
				("│" + filler1.repeat(width - 2) + "│").repeat(sectionHeight1) +
				"├" +
				"─".repeat(width - 2) +
				"┤" +
				("│" + filler2.repeat(width - 2) + "│").repeat(sectionHeight2 - 2) +
				"└" +
				"─".repeat(width - 2) +
				"┘"
			)
		}
	}
}
