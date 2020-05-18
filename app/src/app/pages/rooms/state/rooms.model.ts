export interface Room {
    id: number;
    name: string;
    type: string;
    player1: string;
    player2: string;
    status: string;
    p1status: string;
    p2status: string;
    p1team: number;
    p2team: number;
    turn: number;
}
