import DataTable from "./components/DataTable";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 40px 10%;
  background: #aaa;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <DataTable />
    </Container>
  );
}

export default App;
