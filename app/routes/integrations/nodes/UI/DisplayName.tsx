import { ChevronDownIcon } from '@navikt/aksel-icons';

// alltid bare være en handle
export function DisplayName({ title: title, onClick }: { title: string; onClick?: () => void }) {
    return (
        <>
            <div className="group relative">
                <div className="text-lg font-medium text-gray-900 truncate" onClick={onClick}>
                    {title}
                </div>
                {/* Custom Tooltip */}
                <div
                    className={`
                                absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                                px-2 py-1 bg-gray-800 text-white text-sm rounded
                                opacity-0 invisible
                                group-hover:opacity-100 group-hover:visible
                                transition-all duration-300 delay-1000
                                whitespace-nowrap 
                                min-w-[120px]    
                                text-center
                                `}>
                    Klikk for å endre
                </div>
            </div>
        </>
    );
}
