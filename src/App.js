
import './App.css';
import Hash from './Hash';
import Hash_Sha1 from './Hash_Sha1';
import Hash_sha256 from './Hash_sha256';
import Pass from './Pass';


function App() {
  return (
    <div className="App">
      <Hash/>
      <Hash_Sha1/>
      <Hash_sha256/>

      
      <Pass/>
    </div>
  );
}

export default App;
