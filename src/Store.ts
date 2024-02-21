export class Customer {
    public email: string;

    public firstName: string;

    public lastName: string;

    public id: string

    constructor(email: string, firstName: string, lastName: string, id: string) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
}

export class Appointment {
    public time: string;

    public customer: Customer;

    public barber: Barber;

    public service: Service;

    constructor(time: string, customer: Customer, barber: Barber, service: Service) {
        this.time = time;
        this.customer = customer;
        this.barber = barber;
        this.service = service;
    }
}

export class Barber {
    public firstName: string;

    public lastName: string;

    public customers?: Customer[];

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

export class Service {
    public name: string;

    public durationMin: number;

    public price: number;

    constructor(name: string, durationMin: number, price: number) {
        this.name = name;
        this.durationMin = durationMin;
        this.price = price;
    }
}

class Store {
    public appointments: Appointment[] = [];

    public barbers: Barber[] = [];

    public services: Service[] = [];

    public currentUser: Customer = new Customer("a", "aaa", "aaaa", "1");

    public weeksDisplayed: number = 3;

    public minutesIncrement: number = 10;

    public selectedDate: Date = new Date();

    public startHours: number = 9;

    public startMinutes: number = 0;

    public endHours: number = 19;

    public endMinutes: number = 30;

    public selectedService?: Service;

    public selectedBarber?: Barber;

    public datesSpan: Date[] = [];
}

export const store = new Store();

store.barbers.push(new Barber("Lazar", "Lazarevic"));
store.barbers.push(new Barber("Jovan", "Jovanovic"));

store.services.push(new Service("Fejd", 30, 500));
store.services.push(new Service("Brada", 20, 200));
store.services.push(new Service("Fejd i brada", 50, 700));

store.appointments.push(new Appointment(Date(), new Customer("petar.peric@gmail.com", "Petar", "Peric", "2"), store.barbers[0], store.services[0]));
store.appointments.push(new Appointment(Date(), new Customer("mitar.miric@gmail.com", "Mitar", "Miric", "3"), store.barbers[1], store.services[1]));
store.appointments.push(new Appointment(Date(), new Customer("mika.mikic@gmail.com", "Mika", "Mikic", "4"), store.barbers[0], store.services[2]));

const today = new Date();
for(let i = 0; i < 14; i++) {
    store.datesSpan.push(new Date(today));
    today.setDate(today.getDate() + 1);
}
