import { TagService } from './../../services/tag.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'tag-list',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit, OnDestroy {

  tags: String[];
  sub: any;

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.sub = this.tagService.getTags()
                  .subscribe(tags => this.tags = tags);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
