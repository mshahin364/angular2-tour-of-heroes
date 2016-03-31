/**
 * Created by Shahin on 3/30/2016.
 */
import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000)
        );
    }
}
