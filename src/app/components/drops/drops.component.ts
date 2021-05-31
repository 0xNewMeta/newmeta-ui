import { Component, OnInit } from '@angular/core';
import { DropService } from 'src/app/services/drop/drop.service';

@Component({
  selector: 'app-drops',
  templateUrl: './drops.component.html',
  styleUrls: ['./drops.component.scss']
})
export class DropsComponent implements OnInit {

  items;
  drops: any = [];
  result: any = [];
  constructor(private dropService: DropService) { }

  ngOnInit(): void {
    this.dropService.getNFTDetails().subscribe((val: any) => {
      this.items = val.data.items;
      for (var item of this.items) {
        if (item.nft_data != null) {
          this.result = this.result.concat(item.nft_data);
        }
      }

      for (var item of this.result) {
        if (item.external_data != null) {
          this.drops = this.drops.concat(item);
        }
      }

      this.drops = this.drops.slice(1,4);
      
      // this.nfts = this.nfts.filter(this.isnotNull);
    })
  }

}
