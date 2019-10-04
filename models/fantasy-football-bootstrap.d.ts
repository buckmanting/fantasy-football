import {Event} from "./event";
import {GameSettings} from "./game-settings";
import {Phase} from "./phase";
import {Team} from "./team";
import {Element} from "./element";
import {ElementStat} from "./element-stat";
import {ElementType} from "./element-type";

export interface FantasyFootballBootstrap {
    events: Event[];
    game_settings: GameSettings;
    phases: Phase[];
    teams: Team[];
    total_players: number;
    elements: Element[];
    element_stats: ElementStat[];
    element_types: ElementType[];
}

