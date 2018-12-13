import IDomain from "./IDomain";
import CommandBroker from "../CommandBroker";
import AggregateBase from "../Aggregates/AggregateBase";

export default abstract class DomainBase<T extends AggregateBase>
  implements IDomain<T> {
  protected broker: CommandBroker;
  protected list: Array<T> = [];

  constructor(broker: CommandBroker) {
    this.broker = broker;
  }

  async get(aggregate_id: string): Promise<T> {
    return this.list.find(a => a.aggregate_id == aggregate_id);
  }
}
