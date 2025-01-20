function FooterSidebar() {
  const footerButtonsNames = [
    "Help",
    "Status",
    "About",
    "Careers",
    "Press",
    "Blog",
    "Privacy",
    "Terms",
  ];
  return (
    <div className="flex flex-wrap w-72 items-start text-[11px] ">
      <div className="flex ">
        {footerButtonsNames.map((footerButtonsName) => (
          <div className="mr-1" key={footerButtonsName}>
            <a className="cursor-pointer text-gray-700 ">{footerButtonsName}</a>
          </div>
        ))}
      </div>

      <div className="flex">
        <div className="mr-1">
          <a className="cursor-pointer text-gray-700 ">Text to speech</a>
        </div>
        <div className="mr-1">
          <a className="cursor-pointer text-gray-700 ">Teams</a>
        </div>
      </div>
    </div>
  );
}

export default FooterSidebar;
