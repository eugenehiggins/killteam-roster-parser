import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ParseHtmlService {
    doc: HTMLDocument;
    html: HTMLElement;
    body: HTMLElement;
    header: HTMLElement;
    title: string;
    force: HTMLElement;
    faction: string
    points: string;
    leaders: HTMLElement;

    private _data: string;

    constructor() {
    }

    set data(newData: string) {
        this._data = newData;
        this.parseData(this._data);

    }

    parseData(data)  {
        let rawRegex;

        const domparser = new DOMParser();
        this.doc = domparser.parseFromString(this._data,"text/html" );
        this.body = this.doc.querySelector('body')
        this.header = this.doc.querySelector('div.battlescribe');
        this.title = this.header.querySelector('h1').innerText;
        this.force = this.header.querySelector('li.force');

        // faction and points
        const forceHeader = this.force.querySelector('h2');
        rawRegex = forceHeader.innerHTML.match(/Kill Team List \((.+?)\) \[(.+?)\]/);
        this.faction = rawRegex[1];
        this.points = rawRegex[2];

        const units = this.force.querySelectorAll('ul li.category:not(:first-child)');

        // leaders

        console.log(units)
    }
}
