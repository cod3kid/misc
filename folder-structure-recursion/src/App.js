import "./styles.css";
import { explorer } from "./folderData";
import Folder from "./Folder";
// Downloaded from Code Sandbox
export default function App() {
  return (
    <div className="App">
      <Folder explorer={explorer} />
    </div>
  );
}
