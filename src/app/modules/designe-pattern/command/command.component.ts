import { Component } from '@angular/core';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent {
  commandSampleCode = `
  // Alıcı (Receiver) sınıfı
  class Light {
    turnOn() {
      console.log('Işıklar açıldı');
    }

    turnOff() {
      console.log('Işıklar kapandı');
    }
  }

  // Komut arayüzü (Command Interface)
  interface Command {
    execute(): void;
  }

  // Işıkları açan komut sınıfı
  class TurnOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
      this.light = light;
    }

    execute() {
      this.light.turnOn();
    }
  }

  // Işıkları kapatan komut sınıfı
  class TurnOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
      this.light = light;
    }

    execute() {
      this.light.turnOff();
    }
  }

  // Komutları çağıran istemci (Client)
  class RemoteControl {
    private command: Command;

    setCommand(command: Command) {
      this.command = command;
    }

    pressButton() {
      this.command.execute();
    }
  }

  // Kullanım örneği
  const light = new Light();
  const turnOnCommand = new TurnOnCommand(light);
  const turnOffCommand = new TurnOffCommand(light);

  const remote = new RemoteControl();

  remote.setCommand(turnOnCommand);
  remote.pressButton(); // Işıklar açıldı

  remote.setCommand(turnOffCommand);
  remote.pressButton(); // Işıklar kapandı

  `;
}
