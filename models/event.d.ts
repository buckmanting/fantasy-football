import {ChipPlayD} from "./chip.play";
import {TopElementInfo} from "./top-element.info";

export interface Event {
    id: number;
    name: string;
    deadline_time: Date;
    average_entry_score: number;
    finished: boolean;
    data_checked: boolean;
    highest_scoring_entry?: number;
    deadline_time_epoch: number;
    deadline_time_game_offset: number;
    highest_score?: number;
    is_previous: boolean;
    is_current: boolean;
    is_next: boolean;
    chip_plays: ChipPlayD[];
    most_selected?: number;
    most_transferred_in?: number;
    top_element?: number;
    top_element_info: TopElementInfo;
    transfers_made: number;
    most_captained?: number;
    most_vice_captained?: number;
}
