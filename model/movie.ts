export class Movie {
    constructor(
        public image: string,
        public movieName: string,
        public theatreName: Theatre[],
        public totalSeats: Number,
        public availabletickets: Number,
        public price:Number,
        public status:string
    ) {}
}



  export interface Theatre {
   screen:string[]
  }