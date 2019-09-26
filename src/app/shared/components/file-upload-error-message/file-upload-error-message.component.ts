import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file-upload-error-message',
  templateUrl: './file-upload-error-message.component.html',
  styleUrls: ['./file-upload-error-message.component.scss']
})
export class FileUploadErrorMessageComponent implements OnInit {
  @Input('file-upload') fileUpload: string[] = null;

  constructor() { }

  ngOnInit() {
  }

}
