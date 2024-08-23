import React, { useState, useEffect } from 'react';

const Maze = () => {
	const [maze, setMaze] = useState([
		[0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
		[0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
		[0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
		[1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
		[0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
		[0, 1, 1, 1, 1, 1, 0, 1, 1, 0],
		[0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
		[1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
		[0, 1, 1, 1, 1, 1, 0, 1, 0, 0],
	]);
	const [start, setStart] = useState([0, 0]);
	const [end, setEnd] = useState([9, 9]);
	const [path, setPath] = useState([]);

	const directions = [
		[1, 0], // down
		[0, 1], // right
		[-1, 0], // up
		[0, -1], // left
	];

	const isValidMove = (x, y) => {
		return x >= 0 && x < maze.length && y >= 0 && y < maze[0].length && maze[x][y] === 0;
	};

	const bfs = () => {
		const queue = [[...start]];
		const visited = Array(maze.length)
			.fill(false)
			.map(() => Array(maze[0].length).fill(false));
		const parent = Array(maze.length)
			.fill(null)
			.map(() => Array(maze[0].length).fill(null));
		visited[start[0]][start[1]] = true;

		while (queue.length > 0) {
			const [x, y] = queue.shift();

			if (x === end[0] && y === end[1]) {
				const path = [];
				let current = end;
				while (current) {
					path.push(current);
					current = parent[current[0]][current[1]];
				}
				setPath(path.reverse());
				return;
			}

			for (const [dx, dy] of directions) {
				const newX = x + dx;
				const newY = y + dy;

				if (isValidMove(newX, newY) && !visited[newX][newY]) {
					queue.push([newX, newY]);
					visited[newX][newY] = true;
					parent[newX][newY] = [x, y];
				}
			}
		}
	};

	const dfs = () => {
		const stack = [[...start]];
		const visited = Array(maze.length)
			.fill(false)
			.map(() => Array(maze[0].length).fill(false));
		const parent = Array(maze.length)
			.fill(null)
			.map(() => Array(maze[0].length).fill(null));
		visited[start[0]][start[1]] = true;

		while (stack.length > 0) {
			const [x, y] = stack.pop();

			if (x === end[0] && y === end[1]) {
				const path = [];
				let current = end;
				while (current) {
					path.push(current);
					current = parent[current[0]][current[1]];
				}
				setPath(path.reverse());
				return;
			}

			for (const [dx, dy] of directions) {
				const newX = x + dx;
				const newY = y + dy;

				if (isValidMove(newX, newY) && !visited[newX][newY]) {
					stack.push([newX, newY]);
					visited[newX][newY] = true;
					parent[newX][newY] = [x, y];
				}
			}
		}
	};

	return (
		<div>
			<h1>Maze Solver</h1>
			<div style={{ display: 'grid', gridTemplateColumns: `repeat(${maze[0].length}, 40px)` }}>
				{maze.map((row, i) =>
					row.map((cell, j) => (
						<div
							key={`${i}-${j}`}
							style={{
								width: 40,
								height: 40,
								border: '1px solid black',
								backgroundColor: path.some(([x, y]) => x === i && y === j)
									? 'green'
									: cell === 1
										? 'black'
										: 'white',
							}}
						/>
					)),
				)}
			</div>
			<button className="p-[10px] border-[1px] border-solid border-[#ccc] " onClick={bfs}>
				Solve with BFS
			</button>
			<button className="p-[10px] border-[1px] border-solid border-[#ccc] " onClick={dfs}>
				Solve with DFS
			</button>
		</div>
	);
};

export default Maze;
