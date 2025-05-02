import Todolist from "../../components/main/todolist/Todolist";
import * as S from "./Main.style";

export default function Main() {
  return (
    <S.MainLayout>
      <Todolist />
    </S.MainLayout>
  );
}
