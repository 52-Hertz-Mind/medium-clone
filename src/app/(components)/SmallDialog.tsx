import Link from "next/link";

interface SmallDialogProps {
  links: string[];
  isActive: boolean;
}

function SmallDialog({ links, isActive }: SmallDialogProps) {
  if (!isActive) return null;
  return (
    <div
      className="items-start z-50 w-fit -translate-x-[43%] translate-y-5  h-fit flex flex-col
       drop-shadow-[0_10px_35px_rgba(0,0,0,0.15)] rounded absolute p-5 bg-white text-gray-500
     text-sm gap-5"
    >
      <div
        className="bg-white absolute left-1/2 transform -translate-x-1/2 -top-2 w-4 h-4
        rotate-45"
      ></div>
      {links.map((link: string, index: number) => (
        <Link href={link} key={index} className="hover:text-gray-900">
          {link}
        </Link>
      ))}
    </div>
  );
}
export default SmallDialog;
