import Button from "../components/Button";
import Header from "../components/Header";

export default function New() {
  
  return (
    <div className="w-[650px] h-screen bg-white m-auto shadow-md">
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={"< 뒤로가기"} />}
      />
      <div className="p-4">
        <section>
          <h4 className="new-section-title">오늘의 날짜</h4>
          <div></div>
        </section>
        <section>
          <h4 className="new-section-title">오늘의 감정</h4>
          <div></div>
        </section>
        <section>
          <h4 className="new-section-title">오늘의 일기</h4>
          <textarea className="bg-zinc-200 w-full h-64 leading-9 text-wrap p-3"></textarea>
        </section>
        <section className="flex justify-between">
          <Button text={"취소하기"} />
          <Button text={"작성완료"} />
        </section>
      </div>
    </div>
  );
}