import './App.css'
import {useState} from 'react'
import {githubRequest} from './lib/utils'
import Button from "./components/button"
import Input from "./components/input"
import Datas from "./components/datas"
import UserData from "./components/userData"

function App() {
  const [inputValue, setInputValue] = useState("");
  const [datas, setDatas] = useState(null);
  const [userData, setUserData] = useState(null);
  const [userReposData, setUserReposData] = useState(null);
  const [loadingDatas, setLoadingDatas] = useState(false);
  const [loadingUserData, setLoadingUserData] = useState(false);

  function searchPersons(e) {
    setInputValue(e.target.value)
  }

  function submit() {

    if (!inputValue) {
      setDatas(null)
      return;
    }

    setLoadingDatas(true);
    githubRequest(`https://api.github.com/search/users?q=${inputValue}&per_page=10`)
      .then(data => {
        setDatas(data);
      })
      .finally(() => {
        setLoadingDatas(false);
      });
  }

  function searchUser(e) {
    const userValue = e.target.innerText;

    if (!userValue) {
      setUserData(null)
      return;
    }

    setLoadingUserData(true);
    githubRequest(`https://api.github.com/users/${userValue}`)
      .then(data => {
        setUserData(data);
      })
      .finally(() => {
        setLoadingUserData(false);
      });

      setLoadingUserData(true);
    githubRequest(`https://api.github.com/users/${userValue}/repos`)
      .then(data => {
        setUserReposData(data);
      })
      .finally(() => {
        setLoadingUserData(false);
      });
  }
  
  return (
    <>
    <div className="flex flex-col items-center gap-4 mt-4">
      <h1 className="text-3xl font-bold text-red-500">React Git Search</h1>
      <div className="flex gap-2">
        <Input onChange={searchPersons} onKeyDown={(e) => e.key === 'Enter' && submit()} placeholder="Search user" className="border border-black rounded-lg p-1" />
        <Button onClick={submit} className="border border-black rounded-lg p-1 bg-black text-white cursor-pointer">Rechercher</Button>
      </div>
      <div className="flex flex-col gap-4 w-full p-8">
          <h2>Résultats : {datas?.total_count}</h2>
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-2">
              <p>Utilisateurs : </p>
              {datas && (
                <Datas datas={datas} onClick={searchUser} />
              )}
              {!datas && !loadingDatas && <p>No user researched</p>}
              {loadingDatas && <p>Loading...</p>}
            </div>
            {userData && (
              <UserData userData={userData} userReposData={userReposData} onClick={() => setUserData(null)} />
            )}
            {loadingUserData && <p>Loading...</p>}
          </div>
        </div>
    </div>
    </>
  )
}

export default App
