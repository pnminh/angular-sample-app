import { Pipe, PipeTransform } from "@angular/core";
import { isArray } from "util";

@Pipe({
  name: "appFilter",
  pure:false//performance hit
})
export class AppFilterPipe implements PipeTransform {
  transform(value: any, field: string, searchToken: string): any {
    if (!isArray(value)||!searchToken) return value;
    const filteredArray = [];
    for (let item of value) {
      if (item[field] && (item[field] as string).indexOf(searchToken) !== -1) {
        filteredArray.push(item);
      }
    }
    return filteredArray;
  }
}
