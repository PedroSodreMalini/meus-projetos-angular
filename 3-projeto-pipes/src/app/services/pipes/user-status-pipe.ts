import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatus'
})
export class UserStatusPipe implements PipeTransform {
  transform(status: number): string {
    const userStatusObj: { [key: number]: string } = {
      1: "Ativo",
      0: "Inativo",
    }

    return userStatusObj[status]
  }

}
