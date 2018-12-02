// https://www.youtube.com/watch?v=H2aW5V46khA&t=690s

let tetris = (function() {
	const canvas = document.getElementById('tetris');
	const ctx = canvas.getContext('2d');

	ctx.scale(20, 20);
	ctx.fillStyle = '#000';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	const matrix = [
		[0, 0, 0],
		[1, 1, 1],
		[0, 1, 0]
	];

	function drawMatrix(matrix, offset) {
		matrix.forEach((row, y) => {
			row.forEach((value, x) => {
				if (value !== 0) {
					ctx.fillStyle = 'red';
					ctx.fillRect(x + offset.x, y + offset.y, 1, 1);
				}
			})
		})
	}

	drawMatrix(matrix, {x: 3, y: 4});

	console.log('tetris');
})


export default tetris;