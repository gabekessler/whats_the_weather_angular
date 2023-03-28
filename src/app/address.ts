export class Address {
    // street, city, state, zipcode are used in the form
    // zipcode is used to get latitude and longitude
    constructor(
        public street: string, 
        public city: string,
        public state: string,
        public zipcode: number,
        public country?: string,
        public latitude?: number,
        public longitude?: number
    ) {}
}
