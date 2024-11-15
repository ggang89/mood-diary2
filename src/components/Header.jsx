export default function Header({leftChild,title,rightChild}) {
  
  return (
    <div className="p-4 flex justify-center items-center gap-3 h-[80px] border-b">
      <div className=" grid justify-items-center content-center ">
        {leftChild}
      </div>
      <div className="flex-1 text-center text-xl">{title}</div>
      <div className="  grid justify-items-center content-center ">
        {rightChild}
      </div>
    </div>
  );
}