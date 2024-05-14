import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

const DEFAULT_HANDLE_STYLE = {
    width: 10,
    height: 10,
    bottom: -5,
};

export default memo(({ data, isConnectable }) => {
    return (
        <>
        <div className="w-56 h-96 bg-gray-200 rounded-xl border border-black">
        <div>{data.label}  </div>
        {data.connections.map((c, index) => (
            <Handle
                key={c.id}
                type="source"
                position={Position.Bottom}
                id={c.id}
                style={{...DEFAULT_HANDLE_STYLE, left: `${(index + 1) * 15}%`}}
                isConnectable={isConnectable}
            />
        ))}
        {/*<Handle*/}
        {/*    type="source"*/}
        {/*    id="red"*/}
        {/*    position={Position.Bottom}*/}
        {/*    style={{ ...DEFAULT_HANDLE_STYLE, left: '15%', background: 'red' }}*/}
        {/*    onConnect={(params) => console.log('handle onConnect', params)}*/}
        {/*    isConnectable={isConnectable}*/}
        {/*/>*/}
        {/*<Handle*/}
        {/*    type="source"*/}
        {/*    position={Position.Bottom}*/}
        {/*    id="blue"*/}
        {/*    style={{ ...DEFAULT_HANDLE_STYLE, left: '50%', background: 'blue' }}*/}
        {/*    isConnectable={isConnectable}*/}
        {/*/>*/}
        {/*<Handle*/}
        {/*    type="source"*/}
        {/*    position={Position.Bottom}*/}
        {/*    id="orange"*/}
        {/*    style={{ ...DEFAULT_HANDLE_STYLE, left: '85%', background: 'orange' }}*/}
        {/*    isConnectable={isConnectable}*/}
        {/*/>*/}
        </div>
</>
)
    ;
});
