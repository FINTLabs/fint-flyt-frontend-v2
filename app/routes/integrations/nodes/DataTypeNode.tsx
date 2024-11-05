import { Handle } from 'reactflow';
import { CategoryType, DataType, ListType, StreamType } from '~/types/types';

// UI component for data type node
export default function DataTypeNode({ data, isChild }: { data: DataType; isChild?: boolean }) {
    const ChildElements = () => {
        switch (data.category) {
            case CategoryType.STREAM:
                return <DataTypeNode isChild data={(data as StreamType).elementType} />;
            case CategoryType.LIST:
                return <DataTypeNode isChild data={(data as ListType).elementType} />;
        }
    };
    return (
        <div className="flex inline">
            <div
                className={`flex p-3 border ${!isChild ? '' : 'border-l-0 relative -left-1'} border-gray-400 rounded-tr-md rounded-br-md last:-left-2 relative`}>
                <label>{data.category}</label>

                {/* <Handle type="source" /> */}
            </div>
            <ChildElements />
        </div>
    );
}
