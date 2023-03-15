import Form from "./components/ToDo/Form";

function App() {
  return (
    <div className="App flex place-content-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <Form />
      </div>
    </div>
  );
}

export default App;
