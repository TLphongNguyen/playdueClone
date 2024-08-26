import React, { useState, useEffect } from 'react';

const Maze = () => {
	const [maze, setMaze] = useState([
		[0, 1, 0, 0, 0],
		[0, 1, 0, 1, 0],
		[0, 0, 0, 1, 0],
		[0, 1, 1, 1, 0],
		[0, 0, 0, 0, 0],
	]);
	const [start, setStart] = useState([0, 0]);
	const [end, setEnd] = useState([4, 4]);
	const [path, setPath] = useState([]);
	const [steps, setSteps] = useState(0);

	const directions = [
		[1, 0], // down
		[0, 1], // right
		[-1, 0], // up
		[0, -1], // left
	];

	const isValidMove = (x, y) => {
		return x >= 0 && x < maze.length && y >= 0 && y < maze[0].length && maze[x][y] === 0;
	};
	const manhattanDistance = (point, goal) => {
		return Math.abs(point[0] - goal[0]) + Math.abs(point[1] - goal[1]);
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
		let stepsCount = 0;

		while (queue.length > 0) {
			const [x, y] = queue.shift();

			if (x === end[0] && y === end[1]) {
				const path = [];
				let current = end;
				while (current) {
					path.push(current);
					current = parent[current[0]][current[1]];
					stepsCount++;
				}
				setPath(path.reverse());
				setSteps(stepsCount - 1);

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
		let stepsCount = 0;
		while (stack.length > 0) {
			const [x, y] = stack.pop();

			if (x === end[0] && y === end[1]) {
				const path = [];
				let current = end;
				while (current) {
					path.push(current);
					current = parent[current[0]][current[1]];
					stepsCount++;
				}
				setPath(path.reverse());
				setSteps(stepsCount - 1);

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
	const bestFirstSearch = () => {
		const priorityQueue = [[...start, manhattanDistance(start, end)]];
		const visited = Array(maze.length)
			.fill(false)
			.map(() => Array(maze[0].length).fill(false));
		const parent = Array(maze.length)
			.fill(null)
			.map(() => Array(maze[0].length).fill(null));
		visited[start[0]][start[1]] = true;

		let stepsCount = 0;

		while (priorityQueue.length > 0) {
			priorityQueue.sort((a, b) => a[2] - b[2]);
			const [x, y, _] = priorityQueue.shift();

			if (x === end[0] && y === end[1]) {
				const path = [];
				let current = end;
				while (current) {
					path.push(current);
					current = parent[current[0]][current[1]];
					stepsCount++;
				}
				setPath(path.reverse());
				setSteps(stepsCount - 1);
				return;
			}

			for (const [dx, dy] of directions) {
				const newX = x + dx;
				const newY = y + dy;

				if (isValidMove(newX, newY) && !visited[newX][newY]) {
					priorityQueue.push([newX, newY, manhattanDistance([newX, newY], end)]);
					visited[newX][newY] = true;
					parent[newX][newY] = [x, y];
				}
			}
		}
	};

	const ten = () => {
		setMaze([
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
		setEnd([9, 9]);
		setPath([]);
	};

	const fifteen = () => {
		setMaze([]);
		setMaze([
			[0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0],
			[0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
			[1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
			[0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
			[0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
			[0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0],
			[1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0],
			[0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
			[1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0],
			[0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0],
			[0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
			[0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
			[0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
			[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		]);
		setEnd([14, 14]);
		setPath([]);
	};
	const defaultMaze = () => {
		setMaze([
			[0, 1, 0, 0, 0],
			[0, 1, 0, 1, 0],
			[0, 0, 0, 1, 0],
			[0, 1, 1, 1, 0],
			[0, 0, 0, 0, 0],
		]);
		setEnd([14, 14]);
		setPath([]);
	};
	useEffect(() => {
		console.log(maze);
	}, [maze]);
	return (
		<div>
			<h1>Maze Solver</h1>
			<div className=" flex">
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
				<div className="ml-[100px]">
					<p>Số bước nhảy: {steps}</p>
				</div>
			</div>
			<button className="p-[10px] border-[1px] border-solid border-[#ccc] " onClick={bfs}>
				Solve with BFS
			</button>
			<button className="p-[10px] border-[1px] border-solid border-[#ccc] " onClick={dfs}>
				Solve with DFS
			</button>
			<button className="p-[10px] border-[1px] border-solid border-[#ccc] " onClick={bestFirstSearch}>
				Solve with BestFS
			</button>
			<div className="">
				<h2 className="">Thay đổi Mê cung</h2>
				<button className="p-[10px] border-[1px] border-solid border-[#ccc]" onClick={defaultMaze}>
					5*5
				</button>
				<button className="p-[10px] border-[1px] border-solid border-[#ccc]" onClick={ten}>
					10*10
				</button>
				<button className="p-[10px] border-[1px] border-solid border-[#ccc]" onClick={fifteen}>
					15*15
				</button>
			</div>
		</div>
	);
};

export default Maze;
