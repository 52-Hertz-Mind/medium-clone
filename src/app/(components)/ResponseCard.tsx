//region data models
interface ResponseCardDataModel {
  title: string;
  publishDate: string;
  readTime: number;
}
interface ResponseCardData {
  data: ResponseCardDataModel;
}
//endregion
function ResponseCard({ data }: ResponseCardData) {
  return <div></div>;
}

export default ResponseCard;
