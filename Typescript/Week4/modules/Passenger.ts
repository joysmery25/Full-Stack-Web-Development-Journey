export interface Passenger{
    name: string;
    age: number;
    berthPreference?:'Lower'|'Middle'|'Upper'|'Side Lower'|'Side Upper';
}