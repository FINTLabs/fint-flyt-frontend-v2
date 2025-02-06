// alltid bare være en handle
export function DisplayName({ displayName }: { displayName: string }) {
    return (
        <div className="ml-1 flex items-center h-full">
            <span className="relative top-[1px]">{displayName}</span>
        </div>
    );
}
