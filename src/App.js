import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addPost, deletePost} from "./redux/reducers/posts";

function App() {

  const dispatch = useDispatch();
  const posts = useSelector(store => store.posts.posts);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div className="App">
      <input type="text" className="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input type="text" className="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
      <button type='button' onClick={() => {
        dispatch(addPost(title, price));
        setTitle('')
        setPrice('');
      }}>Save</button>
      <button>Cancel</button>

      <ul className="list">

        {
          posts.map((item) => (
            <li key={item.id}>
              <span>
                {item.title}
              </span>

              <span>
                {item.price}
              </span>

              <button onClick={() => dispatch(deletePost(item.id))}>Х</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
