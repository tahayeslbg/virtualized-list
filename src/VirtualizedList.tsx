import React, { useState } from "react";

interface Item {
	id: number;
	name: string;
}

interface VirtualizedListProps {
	items: Item[];
	itemHeight: number;
	containerHeight: number;
}

const VirtualizedList: React.FC<VirtualizedListProps> = ({
	items,
	itemHeight,
	containerHeight,
}) => {
	const [scrollTop, setScrollTop] = useState(0);

	const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
		setScrollTop(e.currentTarget.scrollTop);
	};

	const startIndex = Math.floor(scrollTop / itemHeight);
	const endIndex = Math.min(
		startIndex + Math.ceil(containerHeight / itemHeight),
		items.length
	);

	const visibleItems = items.slice(startIndex, endIndex);

	return (
		<div
			onScroll={handleScroll}
			className='px-5 overflow-auto'
			style={{ height: `${containerHeight}px` }}
		>
			<div
				className='relative'
				style={{
					height: `${items.length * itemHeight}px`,
				}}
			>
				{visibleItems.map((item, index) => (
					<div
						key={item.id}
						className='absolute flex items-center justify-between w-full px-5 border border-gray-300 rounded-md'
						style={{
							top: `${(startIndex + index) * itemHeight}px`,
							height: `${itemHeight - 8}px`,
						}}
					>
						<span className='text-lg font-medium tracking-tighter text-gray-900'>
							{item.name}
						</span>
						<span className='text-sm text-gray-500'>ID: {item.id}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default VirtualizedList;
