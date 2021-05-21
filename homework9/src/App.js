// Домашнее задание: переписать форму с занятия про render-to-props на redux (чтобы ввод) управлялся и хранился в хранилище редакс, а не в локальном стейте
import { Form, LoginPart, DeletePart, SignUpPart } from './components';

function App() {
  return (
    <div className="App">
      <Form />
      <LoginPart />
      <DeletePart />
      <SignUpPart />
    </div>
  );
}

export default App;