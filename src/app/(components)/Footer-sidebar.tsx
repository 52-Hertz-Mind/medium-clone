function FooterSidebar() {
  return (
    <div className="flex flex-wrap w-72 items-start text-[11px] ">
      <div className="flex ">
        <div className="mr-1">
          <a className="cursor-pointer text-gray-700 ">Help</a>
        </div>
        <div className="mr-1">
          <a className="cursor-pointer text-gray-700 ">Status</a>
        </div>
        <div className="mr-1">
          <a className="cursor-pointer text-gray-700 ">About</a>
        </div>
        <div className="mr-1">
          <a className="cursor-pointer text-gray-700 ">Careers</a>
        </div>
        <div className="mr-1">
          <a className="cursor-pointer text-gray-700 ">Press</a>
        </div>
        <div className="mr-1">
          <a className="cursor-pointer text-gray-700 ">Blog</a>
        </div>
        <div className="mr-1">
          <a className="cursor-pointer text-gray-700 ">Privacy</a>
        </div>
        <div className="mr-1">
          <a className="cursor-pointer text-gray-700 ">Terms</a>
        </div>
      </div>

      <div className="flex">
        <div className="mr-2">
          <a className="cursor-pointer text-gray-700 ">Text to speech</a>
        </div>
        <div className="mr-2">
          <a className="cursor-pointer text-gray-700 ">Teams</a>
        </div>
      </div>
    </div>
  );
}

export default FooterSidebar;
