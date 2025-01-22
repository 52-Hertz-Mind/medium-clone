function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between bg-[#f9f9f9] p-7 mt-5 w-full">
        <p className="text-sm text-[12px]">
          You can clear your reading history for a fresh start.
        </p>
        <button className="bg-redButton hover:bg-red-700 text-white rounded-3xl text-xs w-24 h-8">
          Clear history
        </button>
      </div>
    </div>
  );
}

export default Page;
