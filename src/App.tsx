import "tailwindcss";
import { Card } from "./components";
import mikaelPhoto from "./assets/imgs/mikael.png";

function App() {
  return (
    <div className="screen h-screen bg-blue-500 p-20">
      <div className="
        content
        h-full
        bg-background
      ">
        <Card
          name="Mikael"
          phone="(83) 98608-4258"
          photo={mikaelPhoto}
          skills={["ReactJS"]}
          history=""
        />
      </div>
    </div>
  )
}

export default App
