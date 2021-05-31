import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropService {

  constructor(private httpClient: HttpClient) { }

  getNFTDetails() {
    return this.httpClient.get("https://api.covalenthq.com/v1/" + '43113' + "/address/" + "0xfFe1426e77CE0F7c0945fCC1f4196CD8dC3f090A" + "/balances_v2/?nft=true&key=ckey_c05657ca3b2546d1b99889cc951");
  }
}
