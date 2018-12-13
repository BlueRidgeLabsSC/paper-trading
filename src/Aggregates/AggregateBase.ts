import IAggregate from "./IAggregate";
import CommandBroker from "CommandBroker";

abstract class AggregateBase implements IAggregate {
  broker: CommandBroker;
  aggregate_id: string;
  version: number;

  constructor(
    broker: CommandBroker,
    aggregate_id: string,
    version: number = 0
  ) {
    this.broker = broker;
    this.aggregate_id = aggregate_id;
    this.version = version;
  }
}

export default AggregateBase;
