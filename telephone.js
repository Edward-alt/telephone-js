// I first created the observer class
class Observer {
    notify(phoneNumber) {
        console.log(phoneNumber);
    }
}

class DialingObserver {
    notify(phoneNumber) {
        console.log(`Now Dialing ${phoneNumber}`);
    }
}

// Here's the telephone class
class Telephone {
    constructor() {
        this.phoneNumbers = [];
        this.observers = [];
    }

    // Here's the method to add a new phone number
    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.push(phoneNumber);
    }

    // Here's the method to remove a phone number
    removePhoneNumber(phoneNumber) {
        const index = this.phoneNumbers.indexOf(phoneNumber);
        if (index !== -1) {
            this.phoneNumbers.splice(index, 1);
        }
    }

    // Code to dial a phone number
    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.includes(phoneNumber)) {
            this.observers.forEach(observer => observer.notify(phoneNumber));
        }
    }

    // code to add an observer
    addObserver(observer) {
        this.observers.push(observer);
    }

    // code to remove an observer
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }
}

const telephone = new Telephone();

// Here are the 2 observers
const observer1 = new Observer();
const observer2 = new DialingObserver();

// Adding observers to the telephone
telephone.addObserver(observer1);
telephone.addObserver(observer2);

// Adding phone numbers
telephone.addPhoneNumber("+2348168409182");
telephone.addPhoneNumber("+2349020827699");

// Dialing a phone number
telephone.dialPhoneNumber("+2348168409182");
telephone.dialPhoneNumber("+2349020827699");
