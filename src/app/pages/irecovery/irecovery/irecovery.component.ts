import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: 'app-irecovery',
  templateUrl: './irecovery.component.html',
  styleUrls: ['./irecovery.component.scss']
})
export class IrecoveryComponent implements OnInit {
  @Input()
  url: string = "http://localhost:5000/jnlp";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer:DomSanitizer) {}

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
