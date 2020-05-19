export interface Team {
    id: number;
    name: string;
    player: string;
    char1: Character;
    char2: Character;
    char3: Character;
    char4: Character;
    item1: string;
    item2: string;
    item3: string;
    item4: string;
}

export interface Character {
    id: number;
    name: string;
}
