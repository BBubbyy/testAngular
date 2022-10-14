import { Pipe, PipeTransform } from "@angular/core";
import { Req } from "./test-req/test-req-get/test-req-get";

@Pipe({
  name: 'filterReq'
})

export class FilterPipe implements PipeTransform {
  transform(reqlist: Req[], filterText: string) {
    if (reqlist.length == 0 || filterText == '') {
      return reqlist;
    } else {
      return reqlist.filter((Req) => { return Req.name.common.toLowerCase() === filterText.toLowerCase() })
    }
  }
}

