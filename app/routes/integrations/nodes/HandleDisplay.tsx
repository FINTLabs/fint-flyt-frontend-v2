import { DataType } from '~/types/types';
import DataTypeComponent from './UI/DataType';
import { DisplayName } from './UI/DisplayName';
import { Handle, Position } from 'reactflow';
import { getIcon } from './utils';

interface NodeData {
    displayName: string;
}

interface HandleDisplayProps {
    data: DataType;
    displayName: string;
}

const HandleDisplay: React.FC<HandleDisplayProps> = ({ data, displayName }) => {
    const icon = getIcon(data.category);
    return (
        <>
            <div className="flex bg-[#FFE6C1] items-center text-nowrap z-20 justify-center flex-row text-xs mx-2 h-7 border rounded-2xl pl-2 px-2 mr-2">
                {/* {isArray && <span className="material-symbols-outlined">data_array</span>} */}

                <div className="flex items-center justify-center bg-white w-6 h-[calc(1.75rem-2px)] relative rounded-full shrink-0">
                    <span
                        className="material-symbols-rounded text-sm leading-none flex items-center justify-center"
                        style={{ lineHeight: 1 }}>
                        {icon}
                    </span>
                </div>
                <DisplayName displayName={displayName}></DisplayName>
            </div>
        </>
    );
};

export default HandleDisplay;
