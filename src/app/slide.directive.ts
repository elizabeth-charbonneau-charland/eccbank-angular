import {Directive, HostBinding} from '@angular/core';

@Directive({
    selector: '[appSlide]',
})
export class SlideDirective {
    // @HostBinding('style.position') position = 'absolute';
    @HostBinding('style.display') display = 'none';

    constructor() {
    }

    showSlide() {
        this.display = 'block';
    }
    hideSlide() {
        this.display = 'none';
    }
}
