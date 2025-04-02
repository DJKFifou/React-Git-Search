export default function Datas({datas, onClick}) {
    return (
        <ul className="list-disc pl-4">
            {datas?.items.map((item) => (
                <li key={item.id}>
                    <button onClick={onClick} className="cursor-pointer underline">
                        {item.login || 'Loading'}
                    </button>
                </li>
            ))}
        </ul>
    )
}