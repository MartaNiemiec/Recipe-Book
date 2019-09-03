import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';


  // Closing the Dropdown by clicking on dropdown the button
// @Directive({
//   selector: '[appDropdown]'
// })
// export class DropdownDirective {
//   @HostBinding('class.open') isOpen = false;

//   @HostListener('click') toggleOpen() {
//     this.isOpen = !this.isOpen;
//   }
// }


  // Closing the Dropdown From Anywhere
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // binding to properties of the element the directive is placed on
  @HostBinding('class.open') isOpen = false;

  // listening to a click
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
