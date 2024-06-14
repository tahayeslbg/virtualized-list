# Virtualized List Component

This repository contains a list virtualization component created using React and TypeScript. This component is used to efficiently handle large lists.

## Features

- Does not use any external libraries.
- Receives each item through the `items` prop.

## Usage

```jsx
import React from "react";
import VirtualizedList from "./VirtualizedList";

const items = Array.from({ length: 100000 }, (_, i) => ({
	id: i + 1,
	name: `Item ${i + 1}`,
}));

function App() {
	return (
		<div style={{ width: "200px", margin: "0 auto" }}>
			<h1>Virtualized List</h1>
			<VirtualizedList items={items} itemHeight={20} containerHeight={300} />
		</div>
	);
}

export default App;
```

In this example, we create an array called items. This array contains 100000 items in the form of “Item 1”, “Item 2”, …, “Item 100000”. We pass these items to the VirtualizedList component via the items prop.
