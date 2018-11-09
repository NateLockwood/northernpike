export class Switch {
  label: string;
  value: boolean;
}

export const SWITCHES: Switch[] = [
  {label: 'Lights', value: false},
  {label: 'Switch 2', value: false},
  {label: 'Switch 3', value: false},
  {label: 'Switch 4', value: false},
  {label: 'Switch 5', value: false},
];

export class Telemetry {
  switchState: Switch[];

  constructor(switchState: Switch[] = SWITCHES) {
    this.switchState = switchState;
  }
}
