/** @typedef {import("../literal").RenderFn} RenderFn */

/** @typedef {"left" | "right" | "center"} HorizontalAlign */
/** @typedef {"top" | "bottom" | "center"} VericalAlign */

/**
 * @param {string} txt
 * @param {Object} options
 * @param {HorizontalAlign} options.horizontalAlign
 * @param {VericalAlign} options.verticalAlign
 * @returns {RenderFn}
 */
export default function Text(txt, { horizontalAlign = "left", verticalAlign = "top" } = {}) {
	const paragraphs = txt.split("\n")
	return function ({ width, height }) {
		const totalHeight = paragraphs.map(p => Math.floor(p.length / width) + 1).reduce((acc, cur) => acc + cur, 0)
		let content = "",
			curHeight = 0

		if (verticalAlign == "center") {
			const space = Math.max(height - totalHeight, 0)
			// consume the starting height
			while (curHeight < Math.floor(space / 2)) {
				content += " ".repeat(width)
				curHeight++
			}
		}

		for (let i = 0; i < paragraphs.length; i++) {
			let paragraph = paragraphs[i]
			do {
				let line = paragraph.slice(0, width)
				if (line.length < width) {
					switch (horizontalAlign) {
						case "left":
							line = line.padEnd(width, " ")
							break
						case "right":
							line = line.padStart(width, " ")
							break
						case "center":
							let space = width - line.length
							line = " ".repeat(Math.floor(space / 2)) + line + " ".repeat(Math.ceil(space / 2))
							break
					}
				}
				content += line
				paragraph = paragraph.slice(width)
				if (++curHeight > height) break
			} while (paragraph)
		}

		switch (verticalAlign) {
			case "top":
			case "center":
				// consume the remaining height
				while (curHeight++ <= height) {
					content += " ".repeat(width)
				}
				break
			case "bottom":
				// fill out the top of the container
				while (++curHeight <= height) {
					content = " ".repeat(width) + content
				}
				break
		}

		return content
	}
}
