// alltid bare være en handle
export function DisplayName({ title: title, onClick }: { title: string; onClick?: () => void }) {
    return (
        <div className="text-lg font-medium text-gray-900 truncate" onClick={onClick}>
            {title}
        </div>
    );
}
