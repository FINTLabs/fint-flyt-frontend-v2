import React, { useState, useRef, useCallback } from 'react';
import {Box, Button, Heading, HelpText, HGrid, HStack, VStack} from "@navikt/ds-react";
import {useTranslation} from "react-i18next";
import ReactFlow, {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Background,
    Controls, MarkerType, Panel,
    ReactFlowProvider, useEdgesState, useNodesState
} from 'reactflow';
import 'reactflow/dist/style.css';

import Sidebar from "~/routes/flow/Sidebar";
import styles from './style.module.css';
import CustomNode from "~/routes/flow/CustomNode";
import CustomInputNode from "~/routes/flow/CustomInputNode";
import ChannelNodeList from "~/routes/flow/ChannelNodeList";
import AnotherCustomNode    from "~/routes/flow/AnotherCustomNode";
import anotherCustomNode from "~/routes/flow/AnotherCustomNode";
import SidebarMenu  from "~/routes/flow/SidebarMenu";
import {MiniMap} from "@reactflow/minimap";
import CustomBlueNode from "~/routes/flow/CustomBlueNode";
import CustomYellowNode from "~/routes/flow/CustomYellowNode";

const nodeTypes = {
    custom: CustomNode,
    customInput: CustomInputNode,
    anotherCustomNode: AnotherCustomNode,
    customBlue: CustomBlueNode,
    customYellow: CustomYellowNode,
};

const inputData = [
    { id: '1', name: 'Node 1' },
    { id: '2', name: 'Node 2' },
    { id: '3', name: 'Node 2' },
    { id: '4', name: 'Node 2' },
    { id: '5', name: 'Node 2' },
    // add more data here
];

const initialNodes = [
    {
        id: '1',
        data: { name: 'Database Node', job: 'Developer', connections: inputData, input:true},
        position: { x: 0, y: 0 },
        type: 'custom',

    },
    {
        id: '2',
        data: { label: 'test input node', connections: inputData },
        position: { x: 300, y: 100 },
        type: 'anotherCustomNode',
        isConnectable: true,
    },
    {
        id: '3',
        data: { label: 'Hello World' },
        position: { x: 200, y: 200 },
        type: 'customBlue',
    },
    {
        id: '4',
        data: { label: 'Hello World' },
        position: { x: 300, y: 200 },
        type: 'customYellow',
    },
];

const initialEdges = [
    {
        id: '2->3',
        type: 'bezier',
        source: '2',
        target: '3',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
        label: 'edge with an arrow',
    }
];

let id = 0;
const getId = () => `dndnode_${id++}`;



export default function Index() {
    const {t} = useTranslation('translations', {keyPrefix: 'pages.integrations'})

    const proOptions = { hideAttribution: true };
    const defaultViewport = { x: 0, y: 0, zoom: 1 };

    // const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    // const onNodesChange = useCallback(
    //     (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    //     [],
    // );
    // const onEdgesChange = useCallback(
    //     (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    //     [],
    // );

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [],
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);


    const onDrop = useCallback(
        (event) => {
            event.preventDefault();

            const type = event.dataTransfer.getData('application/reactflow');

            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                return;
            }

            const position = reactFlowInstance.screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            });
            const newNode = {
                id: getId(),
                type,
                position,
                data: { name: `${type} thingy`, isOk: true, job: `more data ` },
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance],
    );

    return (
        <Box
            padding="8"
            paddingBlock="16"
        >
            <HStack id={'instances-custom-header'} align={"center"} justify={"space-between"} gap={"2"} wrap={false}>
                <HStack align={"center"} gap={"2"}>
                    <Heading size={"medium"}>{t('header')}</Heading>
                    <HelpText title={"Hva er dette"} placement="bottom">
                        {t('help.header')}
                    </HelpText>
                </HStack>
            </HStack>

            <HGrid columns="250px auto" style={{height:800}} gap={"5"}>
                <ReactFlowProvider>
                <VStack>

                    <Box
                        id={"flow-buttons"}
                        background={"surface-default"}
                        padding="6"
                        borderRadius={"large"}
                        borderWidth="2"
                        borderColor={"border-subtle"}
                    >

                        <SidebarMenu />
                    </Box>


                </VStack>

                    <Box id={"integration-table-container"} background={"surface-default"} padding="6" borderRadius={"large"}
                         borderWidth="2" borderColor={"border-subtle"}>
                    <ReactFlow

                        nodes={nodes}
                        onNodesChange={onNodesChange}
                        edges={edges}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        // fitView
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        onInit={setReactFlowInstance}
                        proOptions={proOptions}
                        nodeTypes={nodeTypes}
                        defaultViewport={defaultViewport}
                    >
                        <Background/>
                        <Controls/>
                        <MiniMap />

                    </ReactFlow>
                    </Box>

                </ReactFlowProvider>
            </HGrid>
            <Box
                id={"flow-buttons"}
                background={"surface-default"}
                padding="6"
                borderRadius={"large"}
                borderWidth="2"
                borderColor={"border-subtle"}
            >
                <Button onClick={() => console.log(nodes)}>Print nodes</Button>
                <Button onClick={() => console.log(edges)}>Print edges</Button>
            </Box>
        </Box>
    );
}