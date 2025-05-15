import Sidebar from "./components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <h1>React Pokédex</h1>
    </div>
  );
}
