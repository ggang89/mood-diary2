export default function Header({leftChild,title,rightChild}) {
  
  return (
    <div className="p-4 flex justify-center items-center gap-3 h-[80px] border-b">
      <div className="font-bold text-xl w-[45px] h-[40px] bg-gray-200 grid justify-items-center content-center rounded-md cursor-pointer">
        {leftChild}
      </div>
      <div className="flex-1 text-center text-xl">{title}</div>
      <div className="font-bold text-xl w-[45px] h-[40px] bg-gray-200 grid justify-items-center content-center rounded-md cursor-pointer">
        {rightChild}
      </div>
    </div>
  );
}