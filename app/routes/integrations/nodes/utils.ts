export function getIcon(inputType: string) {
    switch (inputType) {
        case 'STRING':
            return 'text_fields';
        case 'INTEGER':
            return 'numbers';
        case 'DECIMAL':
            return 'decimal_increase';
        case 'TIME':
            return 'schedule';
        case 'DATE':
            return 'calendar_today';
        case 'DATETIME':
            return 'calendar_clock';
        case 'BOOLEAN':
            return 'toggle_on';
        default:
            return 'text_fields';
    }
}
