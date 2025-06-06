export default function UserReposData({userReposData}) {
    return (
        <div>
            <ul className="list-disc pl-4">
                {userReposData.map((repo) => {
                return <li key={repo.id}>{repo.name} ({repo.language || '?'})</li>
                })}
            </ul>
        </div>
    )
}