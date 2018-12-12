import ICommand from "../Commands/ICommand";
import IData from "../Data/IData";
import EventEmitter from "events";

export default class CommandBroker {
  private emitter: EventEmitter;

  constructor(emitter = new EventEmitter()) {
    this.emitter = emitter;
  }

  register(commandType: string, callback: (...args: any[]) => void): void {
    this.emitter.addListener(commandType, callback);
  }

  dispatch(command: ICommand<IData>) {
    this.emitter.emit(command.constructor.name, command);
  }

  unregister(commandType: string, callback: (...args: any[]) => void) {
    this.emitter.removeListener(commandType, callback);
  }
}
