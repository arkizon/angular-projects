import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: "Dr Nice" },
      { id: 12, name: "Narco" },
      { id: 13, name: "Boss" },
      { id: 14, name: "jags" },
      { id: 15, name: "M.I" },
      { id: 16, name: "NO BODY" },
      { id: 17, name: "Jonathan" }
    ];

    return { heroes };
  }
  constructor() {}

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
}
