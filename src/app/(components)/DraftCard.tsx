export interface DraftCardDataModel {
  title: string;
  description: string;
  lastEdited: string;
  readTime: number;
  wordCount: number;
}
interface DraftCardData {
  data: DraftCardDataModel;
}

function DraftCard({ data }: DraftCardData) {
  return (
    <div>
      <h2>{data.title}</h2>
    </div>
  );
}

export default DraftCard;
