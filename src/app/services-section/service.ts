export class Service {
  constructor(
    private title: string,
    private _image: string,
    private content: string
  ) {}

  
  
  public get image() : string {
    return this._image;
  }

  
  public set image(v : string) {
    this._image = v;
  }
  
  
  
}
