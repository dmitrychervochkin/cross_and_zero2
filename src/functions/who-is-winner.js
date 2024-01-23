export function whoIsWinner(field){
	const WIN_PATTERNS = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8], [2, 4, 6], // Варианты побед по диагонали
	];

	for (let i = 0; i < WIN_PATTERNS.length; i++) {
		const [a, b, c] = WIN_PATTERNS[i];
		if (field[a] &&	field[a] === field[b] && field[a] === field[c]) {
			return field[a];
		}
	}
	return null;
};
