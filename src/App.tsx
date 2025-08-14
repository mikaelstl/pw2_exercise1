import "tailwindcss";
import { Card } from "./components";
import mikaelPhoto from "./assets/imgs/mikael.png";

function App() {
  return (
    <div className="screen h-screen bg-background p-20">
      <div className="
        content
        h-full
        flex
        justify-between
      ">
        <Card
          name="Mikael Stanley"
          phone="(83) 98608-4258"
          photo={mikaelPhoto}
          skills={["ReactJS","SpringBoot","Java","Flutter"]}
          history="Cursando Analise e Desenvolvimento de Sistema, trabalhou por um breve periodo na ChamaDev, atuando como desenvolvedor FullStack, desenvolvendo tanto o Back-end, quanto o Front-end."
        />
        <Card
          name="Mikael Stanley"
          phone="(83) 98608-4258"
          photo={mikaelPhoto}
          skills={["ReactJS","SpringBoot","Java","Flutter"]}
          history="Cursando Analise e Desenvolvimento de Sistema, trabalhou por um breve periodo na ChamaDev, atuando como desenvolvedor FullStack, desenvolvendo tanto o Back-end, quanto o Front-end."
        />
        <Card
          name="Mikael Stanley"
          phone="(83) 98608-4258"
          photo={mikaelPhoto}
          skills={["ReactJS","SpringBoot","Java","Flutter"]}
          history="Cursando Analise e Desenvolvimento de Sistema, trabalhou por um breve periodo na ChamaDev, atuando como desenvolvedor FullStack, desenvolvendo tanto o Back-end, quanto o Front-end."
        />
      </div>
    </div>
  )
}

export default App
