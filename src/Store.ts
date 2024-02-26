class UserPrivileges {
    public isBarber: boolean = false;

    public canPostNotes: boolean = false;

    public canBan: boolean = false;

    public canEditServices: boolean = false;

    public canViewOthers: boolean = false;
}

type TimeSpan = {
    from: string,
    to: string,
}

class BusinessHours {
    public sun: TimeSpan[] = [];

    public mon: TimeSpan[] = [];

    public tue: TimeSpan[] = [];

    public wed: TimeSpan[] = [];

    public thu: TimeSpan[] = [];

    public fri: TimeSpan[] = [];

    public sat: TimeSpan[] = [];

    public exceptions: TimeSpan[] = [];
}

export class User {
    public email: string;

    public firstName: string;

    public lastName: string;

    public id: string;

    public bans: Ban[] = [];

    public notifications: Note[] = [];

    public privileges: UserPrivileges = new UserPrivileges();

    constructor(email: string, firstName: string, lastName: string, id: string) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
}

export class Appointment {
    public time: string;

    public customer: User;

    public barber: User;

    public service: Service;

    constructor(time: string, customer: User, barber: User, service: Service) {
        this.time = time;
        this.customer = customer;
        this.barber = barber;
        this.service = service;
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

export class Ban {
    public customer: User;

    public bannedBy: User;

    public banDate: string;

    public banMessage: string;

    public endDate: string;

    constructor(customer: User, bannedBy: User, banDate: string, banMessage: string, endDate: string) {
        this.customer = customer;
        this.bannedBy = bannedBy;
        this.banDate = banDate;
        this.banMessage = banMessage;
        this.endDate = endDate;
    }
}

export class Note {
    public customers: User[] | "all";

    public setBy: User;

    public setDate: string;

    public noteMessage: string;

    public endDate: string;

    public repeat: "daily" | "once" | "always";

    constructor(customers: User[] | "all", setBy: User, setDate: string, noteMessage: string, endDate: string, repeat: "daily" | "once" | "always") {
        this.customers = customers;
        this.setBy = setBy;
        this.setDate = setDate;
        this.noteMessage = noteMessage;
        this.endDate = endDate;
        this.repeat = repeat;
    }
}

export class Allert {
    public fromTime: string;

    public toTime: string;

    public forService: Service;

    public forBarber: User;

    constructor (fromTime: string, toTime: string, forService: Service, forBarber: User) {
        this.fromTime = fromTime;
        this.toTime = toTime;
        this.forService = forService;
        this.forBarber = forBarber;
    }
}

class Store {
    public appointments: Appointment[] = [];

    public barbers: User[] = [];

    public services: Service[] = [];

    public customers: User[] = [];

    public currentUser: User = new User("pavle.pavlovic@gmail.com", "Pavle", "Pavlovic", "246810");

    public weeksDisplayed: number = 3;

    public minutesIncrement: number = 10;

    public selectedDate: Date = new Date();

    public startHours: number = 9;

    public startMinutes: number = 0;

    public endHours: number = 19;

    public endMinutes: number = 30;

    public selectedService?: Service;

    public selectedBarber?: User;

    public datesSpan: Date[] = [];

    public bans: Ban[] = [];

    public notes: Note[] = [];
}

export const store = new Store();

store.barbers.push(new User("lazar@gmail.com", "Lazar", "Lazarevic", "123456"));
store.barbers.push(new User("jovan@gmial.com", "Jovan", "Jovanovic", "56789"));

store.services.push(new Service("Fejd", 30, 500));
store.services.push(new Service("Brada", 20, 200));
store.services.push(new Service("Fejd i brada", 50, 700));

store.customers.push(new User("petar.peric@gmail.com", "Petar", "Peric", "2"));
store.customers.push(new User("mitar.miric@gmail.com", "Mitar", "Miric", "3"));
store.customers.push(new User("mika.mikic@gmail.com", "Mika", "Mikic", "4"));

store.appointments.push(new Appointment(Date(), store.customers[0], store.barbers[0], store.services[0]));
store.appointments.push(new Appointment(Date(), store.customers[1], store.barbers[1], store.services[1]));
store.appointments.push(new Appointment(Date(), store.customers[2], store.barbers[0], store.services[2]));

store.bans.push(new Ban(store.customers[0], store.barbers[0], Date().toString(), "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolorem autem nam quas nemo inventore animi labore, vel dolore quae quis amet sequi repellat ratione enim quasi voluptates, praesentium magnam necessitatibus! Porro, cum illo at animi, perspiciatis laudantium delectus, itaque amet tempore nihil natus dolores? Incidunt architecto natus corrupti accusantium.", Date().toString()))

store.notes.push(new Note(store.customers, store.barbers[0], Date().toString(), "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolorem autem nam quas nemo inventore animi labore, vel dolore quae quis amet sequi repellat ratione enim quasi voluptates, praesentium magnam necessitatibus! Porro, cum illo at animi, perspiciatis laudantium delectus, itaque amet tempore nihil natus dolores? Incidunt architecto natus corrupti accusantium.", Date().toString(), "daily"));

const today = new Date();
for(let i = 0; i < 14; i++) {
    store.datesSpan.push(new Date(today));
    today.setDate(today.getDate() + 1);
}
