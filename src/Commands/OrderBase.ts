import CommandBase from "./CommandBase";
import OrderData from "../Data/OrderData";
import OrderMetadata from "../Metadata/OrderMetadata";

export default abstract class OrderBase extends CommandBase<
  OrderData,
  OrderMetadata
> {
  abstract state: string;

  constructor(
    data: OrderData,
    version: number,
    aggregate_id?: string,
    metadata?: OrderMetadata
  ) {
    super(data, version, aggregate_id, metadata);
  }
}
