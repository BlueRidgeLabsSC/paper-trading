import ICommand from "./ICommand";
import IMetadata from "../Metadata/IMetadata";
import IData from "../Data/IData";

export default abstract class CommandBase<
  TData extends IData,
  TMetadata extends IMetadata = any
> implements ICommand<TData, TMetadata> {
  data: TData;
  metadata?: TMetadata;
  aggregate_id?: string;

  constructor(data: TData, aggregate_id?: string, metadata?: TMetadata) {
    this.data = data;
    this.aggregate_id = aggregate_id;
    this.metadata = metadata;
  }
}
