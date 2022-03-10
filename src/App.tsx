import './App.css';
import {observer} from "mobx-react-lite";
import UsersData from './story/dataUser'

const App = observer(() => {

  return (
      <div className="App">
        <input onChange={UsersData.getUsers}/>
        <div>
          {UsersData.users.items.length > 0 && UsersData.users.items.map(el => {
            return (
                <div key={el.node_id}>
                  <h2>
                      {el.login}
                  </h2>
                  <img
                      width={120}
                      src={el.avatar_url}
                      alt={el.login}
                  >
                  </img>
                  <h3>
                      Following is {el.following !== undefined ? el.following.length : null}
                  </h3>
                  <h3>
                      Followers is {el.followers !== undefined ? el.followers.length : null}
                  </h3>
                  <h3>
                      Repos is {el.repos !== undefined ? el.repos.length : null}
                  </h3>
                </div>
            )
          })}
        </div>
      </div>
  );
})

export default App;
