import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: "convertToSpaces", //This is the name that will be used in the html to apply this pipe
})
export class convertToSpacesPipe implements PipeTransform{
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
}