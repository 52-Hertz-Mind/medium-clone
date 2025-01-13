interface TooltipDataModel {
  amount?: number;
  dataName?: string;
  isToolTipActive: boolean;
}

function Tooltip({ amount, dataName, isToolTipActive }: TooltipDataModel) {
  if (!isToolTipActive) return null;
  return (
    <div
      className="absolute bottom-[100%] left-1/2 -translate-x-1/2 mb-2 py-1 px-2
    flex items-center justify-center w-max h-8 bg-neutral-900 rounded-[4px]
     text-white text-xs font-medium whitespace-nowrap"
    >
      {amount ? (
        <>
          <span>{amount}</span>
          {dataName && <span className="ml-0.5">{dataName}</span>}
        </>
      ) : (
        dataName
      )}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-2 h-2
       bg-neutral-900 rotate-45"
      ></div>
    </div>
  );
}

export default Tooltip;
