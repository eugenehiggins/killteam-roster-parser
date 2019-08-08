import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient: HttpClient) { }

public uploadFile(fileToUpload: File) {
    console.log('huh',fileToUpload);

    const httpOptions = {
        headers: new HttpHeaders(
            {
                'Content-Type': 'multipart/form-data',
                'Accept': 'text/html'
            })
    }

    const _formData = new FormData();
    _formData.append('fileInput', fileToUpload);
    return<any> this.httpClient.post('http://localhost:3000/api/upload', _formData); //note: no HttpHeaders passed as 3d param to POST!
    //So no Content-Type constructed manually.
    //Angular 4.x-6.x does it automatically.
}
}
