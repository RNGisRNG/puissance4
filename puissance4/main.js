import {Power4, newGrid, newPlayers} from "./modules/class.mjs";
import {display} from "./modules/display.mjs";
import {style_css} from "./modules/style.mjs";
import {gameplay} from "./modules/gameplay.mjs";

const power4 = new Power4(newGrid(), newPlayers());
console.log(power4);


display();
style_css();
gameplay(power4);