import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string, promotion: string): any {
    // return 'Promotion : ' + promotion;
    // if(promotion === 'AEW') {
    //   return 'All Elite Wrestling';
    // }
    // else {
    //   return 'New Japan Pro Wrestling';
    // }
    if(promotion === 'WWE'){
      return this.domSanitizer.bypassSecurityTrustHtml('<h4 style="background-color: skyblue">' + promotion + '</h4>');
    }
    else {
      return this.domSanitizer.bypassSecurityTrustHtml('<h4 style="background-color: lightgreen">' + promotion + '</h4>');
    }
    
  }

}
