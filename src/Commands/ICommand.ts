import IData from "../Data/IData";
import IMetadata from "../Metadata/IMetadata";

export default interface ICommand<
  TData extends IData,
  TMetadata extends IMetadata = any
> {
  data: TData;
  metadata?: TMetadata;
  version: number;
}
