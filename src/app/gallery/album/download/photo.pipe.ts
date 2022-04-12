import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'photoFilter'
})
export class PhotoPipe implements PipeTransform {

  transform(value: any, arg: string) {
    return value.filter((x:any) => x.id<=arg);
  }

}
