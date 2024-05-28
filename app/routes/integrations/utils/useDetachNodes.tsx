import {useCallback} from 'react';
import {useReactFlow, useStoreApi} from 'reactflow';

function useDetachNodes() {
    const { setNodes } = useReactFlow();
    const store = useStoreApi();

    return useCallback(
        (ids: string[], removeParentId?: string) => {
            const {nodeInternals} = store.getState();
            const nextNodes = Array.from(nodeInternals.values()).map((n) => {
                if (ids.includes(n.id) && n.parentId) {
                    const parentNode = nodeInternals.get(n.parentId);
                    return {
                        ...n,
                        position: {
                            x: n.position.x + (parentNode?.positionAbsolute?.x ?? 0),
                            y: n.position.y + (parentNode?.positionAbsolute?.y ?? 0),
                        },
                        expandParent: undefined,
                        parentNode: undefined,
                    };
                }
                return n;
            });
            setNodes(
                nextNodes.filter((n) => !removeParentId || n.id !== removeParentId)
            );
        },
        [setNodes, store]
    );
}

export default useDetachNodes;
