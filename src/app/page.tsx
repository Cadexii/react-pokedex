import Container from "./components/Container/Container";
import Sidebar from "./components/Sidebar/Sidebar";
import PokemonContent from "./components/PokemonContent/PokemonContent";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <Container>
        <PokemonContent />
      </Container>
    </div>
  );
}
