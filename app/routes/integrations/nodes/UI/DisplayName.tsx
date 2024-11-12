// alltid bare være en handle
export function DisplayNameComponent({ displayName }: { displayName: string }) {
    return (
        <label className="flex items-center p-2 border rounded border-gray-400 ">
            {displayName}
        </label>
    );
}
