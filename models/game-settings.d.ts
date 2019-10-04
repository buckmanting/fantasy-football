export interface GameSettings {
    league_join_private_max: number;
    league_join_public_max: number;
    league_max_size_public_classic: number;
    league_max_size_public_h2h: number;
    league_max_size_private_h2h: number;
    league_max_ko_rounds_private_h2h: number;
    league_prefix_public: string;
    league_points_h2h_win: number;
    league_points_h2h_lose: number;
    league_points_h2h_draw: number;
    squad_squadplay: number;
    squad_squadsize: number;
    squad_team_limit: number;
    squad_total_spend: number;
    ui_currency_multiplier: number;
    ui_use_special_shirts: boolean;
    ui_special_shirt_exclusions: any[];
    stats_form_days: number;
    sys_vice_captain_enabled: boolean;
    transfers_sell_on_fee: number;
    cup_start_event_id: number;
    timezone: string;
}
