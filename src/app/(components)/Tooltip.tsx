interface TooltipDataModel {
  amount: number;
  dataName: string;
}

interface TooltipData {
  data: TooltipDataModel;
}

function Tooltip({ data }: { data: TooltipData }) {
  // Tooltip component
  function calculateTooltipPosition() {
    // Calculate the position of the tooltip
    return {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };
  }
  return (
    <div className="flex gap-1 w-16 h-10">
      <span>{data.amount}</span>
      <span>{data.dataName}</span>
    </div>
  );
}

export default Tooltip;
