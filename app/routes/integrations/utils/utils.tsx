import { getNodePositionWithOrigin, rectToBox, type Node, type NodeOrigin, type Rect, boxToRect, Box, ReactFlowInstance } from 'reactflow';

export const getId = (prefix = 'node') => `${prefix}_${Math.random() * 10000}`;

export const getNodePositionInsideParent = (node: Partial<Node>, groupNode: Node) => {
    const position = node.position ?? { x: 0, y: 0 };
    const nodeWidth = node.width ?? 0;
    const nodeHeight = node.height ?? 0;
    const groupWidth = groupNode.width ?? 0;
    const groupHeight = groupNode.height ?? 0;

    if (position.x < groupNode.position.x) {
        position.x = 0;
    } else if (position.x + nodeWidth > groupNode.position.x + groupWidth) {
        position.x = groupWidth - nodeWidth;
    } else {
        position.x = position.x - groupNode.position.x;
    }

    if (position.y < groupNode.position.y) {
        position.y = 0;
    } else if (position.y + nodeHeight > groupNode.position.y + groupHeight) {
        position.y = groupHeight - nodeHeight;
    } else {
        position.y = position.y - groupNode.position.y;
    }

    return position;
};

export const getBoundsOfBoxes = (box1: Box, box2: Box): Box => ({
    x: Math.min(box1.x, box2.x),
    y: Math.min(box1.y, box2.y),
    x2: Math.max(box1.x2, box2.x2),
    y2: Math.max(box1.y2, box2.y2),
});

export const getRelativeNodesBounds = (nodes: Node[], nodeOrigin: NodeOrigin = [0, 0]): Rect => {
    if (nodes.length === 0) {
        return { x: 0, y: 0, width: 0, height: 0 };
    }

    const box = nodes.reduce(
        (currBox, node) => {
            const { x, y } = getNodePositionWithOrigin(node, nodeOrigin);
            return getBoundsOfBoxes(
                currBox,
                rectToBox({
                    x,
                    y,
                    width: node.width || 0,
                    height: node.height || 0,
                })
            );
        },
        { x: Infinity, y: Infinity, x2: -Infinity, y2: -Infinity }
    );

    return boxToRect(box);
};
export const handleDropLogic = (
    reactFlowInstance: ReactFlowInstance | null,
    type: string,
    data: any,
    position: {
        x: number;
        y: number;
    },
    addNewNodeDrop: (newNode: Node) => void
): void => {
    if (!type || !reactFlowInstance) return;

    const intersections = reactFlowInstance
        .getIntersectingNodes({
            x: position.x,
            y: position.y,
            width: 40,
            height: 40,
        })
        .filter((n) => n.type === 'subflow');

    const groupNode = intersections[0];

    const newNode: Node = {
        id: getId(),
        type,
        position,
        data,
    };

    if (groupNode) {
        newNode.position = getNodePositionInsideParent(
            {
                position,
                width: 40,
                height: 40,
            },
            groupNode
        ) ?? { x: 0, y: 0 };
        newNode.parentId = groupNode?.id;
        newNode.expandParent = true;
    }

    addNewNodeDrop(newNode);
};
