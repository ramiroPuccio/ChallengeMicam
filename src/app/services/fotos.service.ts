import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class FotosService {
  public photos: UserPhoto[] = [];
  constructor() { 
    
  }
  public async addNewToGallery(from:string) {
    if(from == "camara"){
      const capturedPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100
      });
      this.photos.unshift({
        filepath: "soon...",
        webviewPath: capturedPhoto.webPath!
      });  
    } else {
      const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
      quality: 100
    });
    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath!
    });  
  }
  }
  public async capturarFoto() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
      quality: 100
    });
  this.photos.unshift({
    filepath: "soon...",
    webviewPath: capturedPhoto.webPath!
  });  
  }
}
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}