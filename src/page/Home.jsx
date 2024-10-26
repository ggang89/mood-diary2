import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="w-[650px] h-screen bg-white m-auto shadow-md">
      <Header leftChild={"<"} title={"2024년 10월"} rightChild={">"} />
      <div className="flex gap-3 p-4 text-sm ">
        <select className=" bg-gray-200 p-2 text-center rounded-md cursor-pointer">
          <option>최신순</option>
          <option>오래된순</option>
        </select>
        <div className="flex-1 text-center text-white leading-10 rounded-md bg-blue-400 cursor-pointer">
          새 일기쓰기
        </div>
      </div>
      <DiaryList />
    </div>
  );
}
