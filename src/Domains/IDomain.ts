import AggregateBase from "../Aggregates/AggregateBase";

export default interface IDomain<T extends AggregateBase> {
  get(aggregate_id: string): Promise<T>;
}
