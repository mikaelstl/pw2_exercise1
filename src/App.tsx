import "tailwindcss";
import { Card } from "./components";
import mikaelPhoto from "./assets/imgs/mikael.jpeg";
import wevertonPhoto from "./assets/imgs/weverton.jpeg";
import esdrasPhoto from "./assets/imgs/esdras.jpg";

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
          skills={["ReactJS","SpringBoot","Java","Flutter","Git"]}
          history="Cursando Analise e Desenvolvimento de Sistema, trabalhou por um breve periodo na ChamaDev, atuando como desenvolvedor FullStack, desenvolvendo tanto o Back-end, quanto o Front-end."
        />
        {/* NUMEROS DE TELEFONE FICTÍCIOS */}
        <Card
          name="Esdras Lima"
          phone="(88) 99738-5084"
          photo={esdrasPhoto}
          skills={["ReactJS", "Typescript", "Tailwindcss", "Electron", "NodeJS", "Git", "Azure"]}
          history="Estudande de Análise e Desenvolvimento de Sistemas atualmente trabalhando como desenvolvedor júnior na CWI software. Atuando principalmente no desenvolvimento de pontos físicos como PDV e Selfcheckout via Electron, Typescript e NodeJS."
        />
        <Card
          name="Weverton André"
          phone="(88) 99966-7558"
          photo={wevertonPhoto}
          skills={["Supervisão de obras civis", "Gestão de materiais", "Desenvolvimento de projetos"]}
          history="Acadêmico em Engenharia Civil, atuei no Projeto de Integração do Rio São Francisco (Ramal do Apodi) e em fiscalização de obras públicas e privadas, com foco em planejamento, licitações e orçamentos."
        />
      </div>
    </div>
  )
}

export default App
