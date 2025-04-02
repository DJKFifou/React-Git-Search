import UserReposData from './userReposData';

export default function UserData({userData, userReposData, onClick}) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between">
                <img src={userData.avatar_url} alt="avatar" className="h-20" />
                <button onClick={onClick} className="h-8 w-8 border border-black rounded-full cursor-pointer">X</button>
            </div>
            <p>{userData.name}</p>
            <p>{userData.location}</p>
            <p>{userData.bio}</p>
            <p>{userData.followers} {userData.followers > 1 ? 'followers' : 'follower'}</p>
            <p>{userData.following} following</p>
            <p>{userData.public_repos} {userData.public_repos > 1 ? 'repos' : 'repo'} :</p>
            {userReposData && (
                <UserReposData userReposData={userReposData} />
            )}
        </div>
    )
}