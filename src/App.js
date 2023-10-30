import Lap from './game/Lap.js';
import validate from './game/validation.js';
import printResult from './game/printResult.js';
import computer from './utils/console.js';
import ABOUT from './utils/constants.js';

class App {
  #entry;
  #lapLength;

  constructor() {
    this.#entry = [];
    this.#lapLength = 0;
  }

  async play() {
    await this.inputEntry();
    await this.inputLapLength();
    const lap = new Lap(this.#entry);
    computer.tell(ABOUT.RESULT_IS);
    Array.from({ length: this.#lapLength }, () => lap.recordCheck());
    printResult(lap.record, this.#lapLength);
  }

  async inputEntry() {
    const inputName = await computer.ask(ABOUT.INPUT_NAME);
    const tmpEntry = inputName.split(',');
    validate.carName(tmpEntry);
    this.#entry = tmpEntry;
  }

  async inputLapLength() {
    const inputNum = await computer.ask(ABOUT.ASK_LAP);
    validate.lapLength(inputNum);
    this.#lapLength = inputNum;
  }
}

export default App;
