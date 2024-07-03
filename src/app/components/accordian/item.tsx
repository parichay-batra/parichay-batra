import Link from "next/link";

const AccordianItem: any = ({
  category_name,
  category_description,
  handleClick,
  isOpen,
  url,
}: any) => {
  return (
    <div>
      <div
        onClick={handleClick}
        className="p-4 border border-gray-300 flex justify-between cursor-pointer"
      >
        <span>{category_name}</span>{" "}
        {isOpen ? <span>🔺</span> : <span>🔻</span>}
      </div>
      {isOpen && (
        <div>
          <div className="p-4 border border-gray-300 ">
            {category_description}
            <div className="pt-2 underline font-bold">
              <Link href={url}>EXPLORE 🧠</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordianItem;
