import { useDrag, useDrop } from 'react-dnd';

export interface UseConditionalDragDropProps {
	$draggable?: boolean;
	$droppable?: boolean;
	$dragType?: string;
	$acceptsDropTypes?: string[];
	$dragItem?: any;
	$drop?: (_item: any) => void;
	$hover?: (_item: any) => void;
	$dragEnd?: (_item: any) => void;
}

export const useConditionalDragDrop = ({
	$draggable,
	$droppable,
	$dragType,
	$acceptsDropTypes,
	$dragItem,
	$drop,
	$hover,
	$dragEnd
}: UseConditionalDragDropProps) => {
	// Setup useDrop hook conditionally
	const [{ $isOver, $canDrop }, dropRef] = useDrop({
		accept: $acceptsDropTypes || [],
		drop: $drop,
		hover: $hover,
		collect: (monitor) => ({
			$isOver: !!monitor.isOver(),
			$canDrop: !!monitor.canDrop()
		})
	});

	// Setup useDrag hook conditionally
	const [{ $isDragging }, dragRef] = useDrag({
		type: $dragType || 'default',
		item: $dragItem,
		end: $dragEnd,
		collect: (monitor) => ({ $isDragging: !!monitor.isDragging() })
	});

	// Merge refs function to combine drag and drop refs
	const dragDropRef = (el: any) => {
		if (el) {
			if ($droppable && dropRef) dropRef(el);
			if ($draggable && dragRef) dragRef(el);
		}
	};

	return {
		dragDropRef,
		$isOver,
		$canDrop,
		$isDragging
	};
};
