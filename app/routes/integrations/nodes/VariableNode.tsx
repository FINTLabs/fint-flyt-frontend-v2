import { DataType } from '~/types/types';
import DataTypeComponent from './UI/DataTypeComponent';
import { DisplayName } from './UI/DisplayName';
import { Handle, Position } from 'reactflow';
import { Button, TextField, Tooltip } from '@navikt/ds-react';
import { CheckmarkIcon, ChevronDownIcon, PencilIcon, XMarkIcon } from '@navikt/aksel-icons';
import { useState } from 'react';

interface NodeData {
    data: DataType;
    displayName: string;
}

interface VariableNodeProps {
    data: NodeData;
}

const VariableNode: React.FC<VariableNodeProps> = ({ data }) => {
    // if (data.displayName === 'Saksnummer') return <Saksnumre data={data}></Saksnumre>;
    // if (data.displayName === 'SaksId') return <Nummre data={data}></Nummre>;
    const [isComponentEditing, setIsComponentEditing] = useState(false);
    const [selectedUIType, setSelectedUIType] = useState(3);

    return (
        <div>
            <UISwitchButtons
                selectedUIType={selectedUIType}
                setSelectedUIType={setSelectedUIType}
            />

            <Handle
                type={'target'}
                position={Position.Left}
                id={'123'}
                className="absolute !left-[-8px] !z-10 !w-4 !h-4 !bg-teal-500"
            />
            {selectedUIType === 1 && (
                <div
                    className={`bg-blue-100 h-20 pl-4 pr-4 flex justify-content items-center rounded-lg border border-blue-500
                    ${isComponentEditing ? 'border-red-500' : ''}`}>
                    <div className="absolute top-[-38px] h-24 -z-10 right-0">
                        {isComponentEditing ? (
                            <div className="flex gap-2">
                                {/* Save button */}
                                <button
                                    className="hover:bg-blue-300 p-2 bg-blue-50 border border-blue-500"
                                    onClick={() => {
                                        setIsComponentEditing((prev) => !prev);
                                    }}>
                                    <CheckmarkIcon
                                        color="var(--a-icon-success)"
                                        title="Godkjenn"
                                        fontSize="1.4rem"
                                    />
                                </button>
                                <button
                                    className="hover:bg-blue-300 p-2 bg-blue-50 border border-blue-500"
                                    onClick={() => setIsComponentEditing((prev) => !prev)}>
                                    <XMarkIcon
                                        color="var(--a-icon-danger)"
                                        title="Avbryt"
                                        fontSize="1.4rem"
                                    />
                                </button>
                            </div>
                        ) : (
                            <>
                                <button
                                    className="hover:bg-blue-300 p-2 bg-blue-50 border border-blue-500"
                                    onClick={() => {
                                        setIsComponentEditing((prev) => !prev);
                                    }}>
                                    <PencilIcon title="Rediger" className="" fontSize="1.4rem" />
                                </button>
                            </>
                        )}
                    </div>
                    <div className="border rounded-3xl">
                        <div className="flex items-center pr-2">
                            <DataTypeComponent
                                data={data.data}
                                isEditing={isComponentEditing}
                                setIsEditing={setIsComponentEditing}
                            />
                            <VariableNameVersion1
                                initialName={data.displayName}
                                isComponentEditing={isComponentEditing}
                                setIsComponentEditing={setIsComponentEditing}
                            />
                        </div>
                    </div>
                </div>
            )}

            {selectedUIType === 2 && (
                <div
                    className={`bg-blue-100 h-20 pl-4 pr-4 flex justify-content items-center rounded-lg border border-blue-500
                    ${isComponentEditing ? 'border-red-500' : ''}`}>
                    <div className="border rounded-3xl">
                        <div className="flex items-center pr-2">
                            <DataTypeComponent
                                data={data.data}
                                isEditing={isComponentEditing}
                                setIsEditing={setIsComponentEditing}
                            />
                            <VariableNameVersion2
                                initialName={data.displayName}
                                isComponentEditing={isComponentEditing}
                                setIsComponentEditing={setIsComponentEditing}
                            />
                        </div>
                    </div>
                </div>
            )}

            {selectedUIType === 3 && (
                <div
                    className={`bg-blue-100 h-20 pl-4 pr-4 flex justify-content items-center rounded-lg border border-blue-500
                    ${isComponentEditing ? 'border-red-500' : ''}`}>
                    <div className="border rounded-3xl">
                        <div className="flex items-center pr-2">
                            <DataTypeComponent
                                data={data.data}
                                isEditing={isComponentEditing}
                                setIsEditing={setIsComponentEditing}
                            />

                            <VariableNameVersion3
                                initialName={data.displayName}
                                isComponentEditing={isComponentEditing}
                                setIsComponentEditing={setIsComponentEditing}
                            />
                        </div>
                    </div>
                </div>
            )}

            <Handle
                type={'source'}
                position={Position.Right}
                id={'123'}
                className="absolute !right-[-8px] !z-10 !w-4 !h-4 !bg-teal-500"
            />
        </div>
    );
};

export default VariableNode;

interface VariableNameProps {
    initialName: string;
    isComponentEditing: boolean;
    setIsComponentEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

function VariableName({
    initialName,
    isComponentEditing,
    setIsComponentEditing,
}: VariableNameProps) {
    const [isEditing, setIsEditing] = useState(false);

    const [name, setName] = useState(initialName);
    return (
        <div className="ml-3 flex flex-row items-center">
            {!isEditing && (
                <>
                    <DisplayName
                        onClick={() => {
                            setIsEditing((prev) => !prev);
                        }}
                        title={name}></DisplayName>
                    {/* {isComponentEditing && (
                        <Button
                            variant="tertiary"
                            icon={
                                <PencilIcon
                                    title="Rediger"
                                    onClick={() => setIsEditing((prev) => !prev)}
                                />
                            }
                        />
                    )} */}
                </>
            )}
            {isEditing && (
                <div className="ml-1 pl-1 flex flex-row">
                    <TextField
                        hideLabel
                        value={name}
                        label={'VariabelNavn'}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <Button
                        variant="tertiary"
                        icon={
                            <CheckmarkIcon
                                title="Godkjenn"
                                onClick={() => setIsEditing((prev) => !prev)}
                            />
                        }
                    />
                    <Button
                        variant="tertiary"
                        icon={
                            <XMarkIcon
                                title="Avbryt"
                                onClick={() => setIsEditing((prev) => !prev)}
                            />
                        }
                    />
                </div>
            )}
        </div>
    );
}

function VariableNameVersion3({
    initialName,
    isComponentEditing,
    setIsComponentEditing,
}: VariableNameProps) {
    const [name, setName] = useState(initialName);
    return (
        <div className="ml-3 flex flex-row items-center">
            {!isComponentEditing && (
                <>
                    <DisplayName
                        onClick={() => {
                            setIsComponentEditing((prev) => !prev);
                        }}
                        title={name}></DisplayName>
                </>
            )}
            {isComponentEditing && (
                <div className="ml-1 pl-1 flex flex-row">
                    <TextField
                        hideLabel
                        value={name}
                        label={'VariabelNavn'}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <Button
                        variant="tertiary"
                        icon={
                            <CheckmarkIcon
                                color="var(--a-icon-success)"
                                title="Godkjenn"
                                onClick={() => setIsComponentEditing((prev) => !prev)}
                            />
                        }
                    />
                    <Button
                        variant="tertiary"
                        icon={
                            <XMarkIcon
                                color="var(--a-icon-danger)"
                                title="Avbryt"
                                onClick={() => setIsComponentEditing((prev) => !prev)}
                            />
                        }
                    />
                </div>
            )}
        </div>
    );
}

function VariableNameVersion2({
    initialName,
    isComponentEditing,
    setIsComponentEditing,
}: VariableNameProps) {
    const [name, setName] = useState(initialName);
    return (
        <div className="ml-3 flex flex-row items-center">
            {!isComponentEditing && (
                <>
                    <DisplayName
                        onClick={() => {
                            setIsComponentEditing((prev) => !prev);
                        }}
                        title={name}></DisplayName>
                    <Button
                        variant="tertiary"
                        icon={
                            <PencilIcon
                                title="Rediger"
                                onClick={() => setIsComponentEditing((prev) => !prev)}
                            />
                        }
                    />
                </>
            )}
            {isComponentEditing && (
                <div className="ml-1 pl-1 flex flex-row">
                    <TextField
                        hideLabel
                        value={name}
                        label={'VariabelNavn'}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <Button
                        variant="tertiary"
                        icon={
                            <CheckmarkIcon
                                color="var(--a-icon-success)"
                                title="Godkjenn"
                                onClick={() => setIsComponentEditing((prev) => !prev)}
                            />
                        }
                    />
                    <Button
                        variant="tertiary"
                        icon={
                            <XMarkIcon
                                color="var(--a-icon-danger)"
                                title="Avbryt"
                                onClick={() => setIsComponentEditing((prev) => !prev)}
                            />
                        }
                    />
                </div>
            )}
        </div>
    );
}

function VariableNameVersion1({
    initialName,
    isComponentEditing,
    setIsComponentEditing,
}: VariableNameProps) {
    const isEditing = isComponentEditing;
    const [name, setName] = useState(initialName);
    return (
        <div className="ml-3 flex flex-row items-center">
            {!isEditing && (
                <>
                    <DisplayName
                        onClick={() => {
                            setIsComponentEditing((prev) => !prev);
                        }}
                        title={name}></DisplayName>
                </>
            )}
            {isEditing && (
                <div className="ml-1 pl-1 flex flex-row">
                    <TextField
                        hideLabel
                        value={name}
                        label={'VariabelNavn'}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>
            )}
        </div>
    );
}
interface UISwitchButtonsProps {
    selectedUIType: number;
    setSelectedUIType: React.Dispatch<React.SetStateAction<number>>;
}

function UISwitchButtons({ selectedUIType, setSelectedUIType }: UISwitchButtonsProps) {
    const buttonNumbers = [1, 2, 3]; // Just add numbers here

    return (
        <div className="absolute top-[-50px] -z-10 left-0 flex gap-2 opacity-40 ">
            {buttonNumbers.map((number) => (
                <button
                    key={number}
                    className={`p-2 border rounded-lg ${
                        selectedUIType === number
                            ? 'bg-gray-700 text-white border border-gray-400'
                            : 'bg-gray-200'
                    }`}
                    onClick={() => setSelectedUIType(number)}>
                    {number}
                </button>
            ))}
        </div>
    );
}

function Saksnumre({ data }: { data: NodeData }) {
    return (
        <>
            {/* <p className="text-sm absolute top-[-16px]">Variable Node med tekst</p> */}
            <div className="pt-5">
                <div className=" flex flex-row gap-2">
                    <div className="flex">
                        <div className="flex">
                            <div className="absolute text-sm top-[0px]">Steg 1</div>
                            <div
                                className={`
                    flex p-[5px] border border-gray-400 
                    rounded-tr-md rounded-br-md 
                    bg-white
                `}>
                                <label className="bg-purple-200 p-3">
                                    {'➡ En strøm av '}
                                    <span className="bg-blue-200">saksnumre (tekst)</span>{' '}
                                </label>
                            </div>
                        </div>
                        {/* <div className="flex">
                            <div className="absolute text-sm top-[0px]">Steg 2</div>

                            <div
                                className={`
                    flex p-[5px] border border-gray-400 
                    rounded-tr-md rounded-br-md 
                    bg-white
                    border-l-0 -left-1  
                `}>
                                <label className="bg-purple-200 p-3">
                                    {' 🔄 For hvert '}
                                    <span className="bg-blue-200">saksnummer (tekst)</span>
                                    {' gjør følgende '}
                                </label>
                            </div>
                        </div> */}
                    </div>
                    {/* <DisplayNameComponent displayName={data.displayName}></DisplayNameComponent> */}
                </div>
            </div>
            <Handle
                type={'source'}
                position={Position.Right}
                id={'123'}
                className="absolute !top-[50px] !z-10 !w-4 !h-4 !bg-black"
            />
        </>
    );
}

function Nummre({ data }: { data: NodeData }) {
    return (
        <>
            {/* <p className="text-sm absolute top-[-16px]">Variable Node med tekst</p> */}
            <div className="pt-5">
                <div className=" flex flex-row gap-2">
                    <div className="flex">
                        <div className="flex">
                            <div className="absolute text-sm top-[0px]">Steg 1</div>
                            <div
                                className={`
                    flex p-[5px] border border-gray-400 
                    rounded-tr-md rounded-br-md 
                    bg-white
                `}>
                                <label className="bg-purple-200 p-3">
                                    {'➡ Mottar en strøm av '}
                                    <span className="bg-yellow-100">SaksId (tall)</span>{' '}
                                </label>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="absolute text-sm top-[0px]">Steg 2</div>

                            <div
                                className={`
                    flex p-[5px] border border-gray-400 
                    rounded-tr-md rounded-br-md 
                    bg-white
                    border-l-0 -left-1  
                `}>
                                <label className="bg-purple-200 p-3">
                                    {' 🔄 For hver '}
                                    <span className="bg-yellow-100">SaksId (tall)</span>
                                    {' gjør følgende '}
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* <DisplayNameComponent displayName={data.displayName}></DisplayNameComponent> */}
                </div>
            </div>
            <Handle
                type={'source'}
                position={Position.Right}
                id={'123'}
                className="absolute !top-[50px] !z-10 !w-4 !h-4 !bg-black"
            />
        </>
    );
}
