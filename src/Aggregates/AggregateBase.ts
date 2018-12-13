import IAggregate from "./IAggregate";

abstract class AggregateBase implements IAggregate {
  aggregate_id: string;
  version: number = 0;
}

export default AggregateBase;
