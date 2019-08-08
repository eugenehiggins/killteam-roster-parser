import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { UploadService } from "../../services/upload-service.service";

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: [ './file-upload.component.scss' ]
})
export class FileUploadComponent implements OnInit {

    statusText: string = "starting";

    uploadForm = this.fb.group({
        theFile: ['']
    })

    constructor(private fb: FormBuilder,
                private fileUploadService: UploadService) {
    }

    ngOnInit() {
    }

    upLoadFiles($event) {

        this.statusText = "Uploading...";

        const fileSelected: File = $event.target.files[0];

        this.fileUploadService.uploadFile(fileSelected)
            .subscribe( (res) => {
                this.statusText = "success"
                console.log('success');
                return res;
            },
            (error) => {
            console.log('error', error);
        }   )


    }
}
