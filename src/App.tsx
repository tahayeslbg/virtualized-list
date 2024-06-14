import VirtualizedList from "./VirtualizedList";

const items = Array.from({ length: 100000 }, (_, i) => ({
	id: i + 1,
	name: `Item ${i + 1}`,
}));

function App() {
	return (
		<div className='max-w-md mx-auto my-16 space-y-10'>
			<h1 className='text-3xl font-bold tracking-tighter text-center text-gray-900'>
				Virtualized List
			</h1>
			<VirtualizedList items={items} itemHeight={54} containerHeight={600} />
		</div>
	);
}

export default App;
