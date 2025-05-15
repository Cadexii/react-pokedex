import Container from "./components/Container/Container";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <Container>
        <h1>React Pokédex</h1>
      </Container>
    </div>
  );
}
