// alltid bare være en handle
export function DisplayName({ title: title }: { title: string }) {
    return (
        <div className="ml-1 pl-1 mr-1 flex items-center h-full">
            <span className="relative top-[1px]">{title}</span>
        </div>
    );
}
