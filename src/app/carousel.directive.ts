import {AfterContentInit, ContentChildren, Directive, QueryList} from '@angular/core';
import {SlideDirective} from './slide.directive';

@Directive({
    selector: '[appCarousel]',
    exportAs: 'appCarousel'
})
export class CarouselDirective implements AfterContentInit {
    @ContentChildren(SlideDirective) slides: QueryList<SlideDirective>;
    currentSlide = 0;

    constructor() {
    }

    ngAfterContentInit() {
        this.slides.first.showSlide();
    }

    showNext() {
        this.getCurrentSlide().hideSlide();
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.getCurrentSlide().showSlide();
    }

    private getCurrentSlide() {
        return this.slides.toArray()[this.currentSlide];
    }
}
