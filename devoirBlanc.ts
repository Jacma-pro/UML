class Maison {
  public city: string;
  public color?: string;
  public surface: number;
  public price: number;

  constructor(city: string, surface: number, price: number) {
    this.city = city;
    this.surface = surface;
    this.price = price;
    }

    paintHouse(color: string){
        this.color = color;
        console.log("ok")
    }

    whichColor(){
        console.log(this.color)
    }

    displayColor(){
        return this.color
    }

}

const maison = new Maison("Grenoble", 120, 100000);
maison.paintHouse("red")
maison.whichColor()
console.log(maison.displayColor())
