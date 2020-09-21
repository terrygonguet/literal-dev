/** @type {import("./literal").Component} */
export default function gameOfLife({ initialAliveProb = 0.15, stepsPerSecond = 5 } = {}) {
	/** @type {boolean[][]} */
	let board
	return function ({ width, height, invalidate }) {
		const rwidth = Math.floor(width / 2)
		if (!board) {
			board = Array(height)
				.fill()
				.map(_ =>
					Array(rwidth)
						.fill()
						.map(_ => Math.random() < initialAliveProb),
				)
		} else {
			/** @type {boolean[][]} */
			const next = Array(height)
				.fill()
				.map(_ => Array(rwidth).fill(false))
			for (let x = 0; x < rwidth; x++) {
				for (let y = 0; y < height; y++) {
					const cell = board[y][x]
					const neighbours =
						(board?.[y - 1]?.[x - 1] || 0) +
						(board?.[y]?.[x - 1] || 0) +
						(board?.[y + 1]?.[x - 1] || 0) +
						(board?.[y - 1]?.[x] || 0) +
						(board?.[y]?.[x + 1] || 0) +
						(board?.[y + 1]?.[x] || 0) +
						(board?.[y - 1]?.[x + 1] || 0) +
						(board?.[y + 1]?.[x + 1] || 0)
					if (cell) next[y][x] = neighbours == 2 || neighbours == 3
					else next[y][x] = neighbours == 3
				}
			}
			board = next
		}
		setTimeout(invalidate, 1000 / stepsPerSecond)
		const eol = width % 2 == 0 ? "" : " "
		return board.map(col => col.map(cell => (cell ? "██" : "  ")).join("") + eol).join("")
	}
}
