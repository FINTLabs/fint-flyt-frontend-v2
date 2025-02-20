interface ColorProfile {
    OperationBgColorDefault: string;
    OperationBgColorselected: string;
    InnerFlowBgColorDefault: string;
    InnerFlowBgColorSelected: string;
    InnerFlowBgColorSideBarsDefault: string;
    InnerFlowBgColorSideBarsSelected: string;
    iconColor: string;
    iconStrokeColor: string;
}

export const ColorThemes: Record<string, ColorProfile> = {
    1: {
        // Novari Orange Theme
        OperationBgColorDefault: 'bg-[#FFE6C1]',
        OperationBgColorselected: 'bg-orange-300 ring-2 ring-gray-700/40 shadow-sm shadow-gray-500',
        InnerFlowBgColorDefault: 'bg-white',
        InnerFlowBgColorSelected: 'bg-white ring-2 ring-gray-700/40 shadow-sm shadow-gray-500',
        InnerFlowBgColorSideBarsDefault: 'bg-sand',
        InnerFlowBgColorSideBarsSelected: 'bg-orange-300',
        iconColor: 'text-[#b95b1b]',
        iconStrokeColor: 'stroke-orange-900',
    },
    2: {
        OperationBgColorDefault: 'bg-gray-200',
        OperationBgColorselected: 'bg-blue-200 ring-2 ring-blue-700/40 shadow-sm shadow-blue-500',
        InnerFlowBgColorDefault: 'bg-white',
        InnerFlowBgColorSelected: 'bg-white',
        InnerFlowBgColorSideBarsDefault: 'bg-blue-100',
        InnerFlowBgColorSideBarsSelected: 'bg-blue-200',
        iconColor: 'text-blue-600',
        iconStrokeColor: 'stroke-blue-900',
    },
    3: {
        // Light Orange
        OperationBgColorDefault: 'bg-[#fef2e0]',
        OperationBgColorselected:
            'bg-[#ffb432] ring-2 ring-emerald-700/40 shadow-sm shadow-emerald-500',
        InnerFlowBgColorDefault: 'bg-white',
        InnerFlowBgColorSelected: 'bg-white',
        InnerFlowBgColorSideBarsDefault: 'bg-[#fff8e8]',
        InnerFlowBgColorSideBarsSelected: 'bg-[#ffefcc]',
        iconColor: 'text-[#ff9900]',
        iconStrokeColor: 'stroke-[#cc7a00]',
    },
    4: {
        // Tailwind Orange Theme
        OperationBgColorDefault: 'bg-[#f8ecda]',
        OperationBgColorselected: 'bg-orange-400 ring-2 ring-gray-700/40 shadow-sm shadow-gray-500',
        InnerFlowBgColorDefault: 'bg-white',
        InnerFlowBgColorSelected: 'bg-white',
        InnerFlowBgColorSideBarsDefault: 'bg-orange-100',
        InnerFlowBgColorSideBarsSelected: 'bg-orange-200',
        iconColor: 'text-orange-500',
        iconStrokeColor: 'stroke-orange-800',
    },
    5: {
        // Rose Theme
        OperationBgColorDefault: 'bg-teal-300',
        OperationBgColorselected: 'bg-rose-300 ring-2 ring-rose-700/40 shadow-sm shadow-rose-500',
        InnerFlowBgColorDefault: 'bg-white',
        InnerFlowBgColorSelected: 'bg-white',
        InnerFlowBgColorSideBarsDefault: 'bg-teal-200',
        InnerFlowBgColorSideBarsSelected: 'bg-teal-300',
        iconColor: 'text-teal-600',
        iconStrokeColor: 'stroke-teal-900',
    },
    6: {
        OperationBgColorDefault: 'bg-red-300',
        OperationBgColorselected: 'bg-red-400 ring-2 ring-red-700/40 shadow-sm shadow-red-500',
        InnerFlowBgColorDefault: 'bg-white',
        InnerFlowBgColorSelected: 'bg-white',
        InnerFlowBgColorSideBarsDefault: 'bg-red-200',
        InnerFlowBgColorSideBarsSelected: 'bg-red-300',
        iconColor: 'text-red-600',
        iconStrokeColor: 'stroke-red-900',
    },
    7: {
        OperationBgColorDefault: 'bg-blue-300',
        OperationBgColorselected: 'bg-blue-500 ring-2 ring-blue-700/40 shadow-sm shadow-blue-500',
        InnerFlowBgColorDefault: 'bg-white',
        InnerFlowBgColorSelected: 'bg-white',
        InnerFlowBgColorSideBarsDefault: 'bg-blue-200',
        InnerFlowBgColorSideBarsSelected: 'bg-blue-300',
        iconColor: 'text-blue-600',
        iconStrokeColor: 'stroke-blue-900',
    },
};
