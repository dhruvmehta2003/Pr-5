<script>
function addEdge(adj, src, dest) {
adj[src].push(dest)
}

function displayGraph(adj, v) {
for (let i = 0; i < v; i++) {
	document.write(i + "--> ")
	for (let j = 0; j < adj[i].length; j++) {
	document.write(adj[i][j] + " ")
	}
	document.write("<br>")
}
}

function transposeGraph(adj, transpose, v) {

for (let i = 0; i < v; i++)
	for (let j = 0; j < adj[i].length; j++)
	addEdge(transpose, adj[i][j], i)
}

let v = 5
let adj = new Array(v).fill(0).map(() => new Array())
addEdge(adj, 0, 1)
addEdge(adj, 0, 4)
addEdge(adj, 0, 3)
addEdge(adj, 2, 0)
addEdge(adj, 3, 2)
addEdge(adj, 4, 1)
addEdge(adj, 4, 3)
let transpose = new Array(v).fill(0).map(() => new Array())
transposeGraph(adj, transpose, v)

displayGraph(transpose, v)


</script>
