import { PipeTransform, Pipe } from "@angular/core";
@Pipe({
  name: "shorten"
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, from: number, length: number) {
    return value.substr(from, length);
  }
}
