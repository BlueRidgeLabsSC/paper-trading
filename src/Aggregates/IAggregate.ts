import CommandBroker from "CommandBroker";

export default interface IAggregate {
  aggregate_id: string;
  version: number;
  broker: CommandBroker;
}
