// Base User Interface
interface BaseUser {
    userId:string
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    role: string;

  }
  interface UserVerification {
    isVerified: boolean;
    verifyCode?: string;
    verifyCodeExpiry?: Date;
    resetToken?: string;
    resetTokenExpiry?: Date;
  }
  

  interface ConnectUser extends BaseUser {
    businessCards: string[];
    contacts: string[];
    plan: string;
    customerId?: string;
  }
  

  interface EventFinderUser extends BaseUser {
    events: Event[];
    complaints: Complaint[];
    review?: string[];
  }
  

  class EventType {
    eventTypeId: string;
    parent?: EventType;
    eventTypeName: string;
    eventTypeDescription?: string;
  
    constructor(eventTypeId: string, parent: EventType | null, eventTypeName: string, eventTypeDescription?: string) {
      this.eventTypeId = eventTypeId;
      this.parent = parent || undefined;
      this.eventTypeName = eventTypeName;
      this.eventTypeDescription = eventTypeDescription;
    }
  }
  
  class Complaint {
    complaintId: string;
    referenceId: string;
    userId: string;
    description: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
  
    constructor(complaintId: string, referenceId: string, userId: string, description: string, status: string) {
      this.complaintId = complaintId;
      this.referenceId = referenceId;
      this.userId = userId;
      this.description = description;
      this.status = status;
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
  }
  
 
  class Event {
    eventId: string;
    eventName: string;
    eventVenue: string;
    eventAddress?: string;
    eventCity: string;
    eventCountry: string;
    eventOwnerId: string;
    verified: boolean;
    verifiedById: string;
    hostName: string;
    price: number | string;
    eventTypeId: string;
    description: string;
    rating: number;
    imageUri: string;
    eventLink: string;
    eventDate: Date;
    complaints?: Complaint[];
  
    constructor(
      eventId: string,
      eventName: string,
      eventVenue: string,
      eventCity: string,
      eventCountry: string,
      eventOwnerId: string,
      verified: boolean,
      verifiedById: string,
      hostName: string,
      price: number | string,
      eventTypeId: string,
      description: string,
      rating: number,
      imageUri: string,
      eventLink: string,
      eventDate: Date,
      complaints?: Complaint[]
    ) {
      this.eventId = eventId;
      this.eventName = eventName;
      this.eventVenue = eventVenue;
      this.eventCity = eventCity;
      this.eventCountry = eventCountry;
      this.eventOwnerId = eventOwnerId;
      this.verified = verified;
      this.verifiedById = verifiedById;
      this.hostName = hostName;
      this.price = price;
      this.eventTypeId = eventTypeId;
      this.description = description;
      this.rating = rating;
      this.imageUri = imageUri;
      this.eventLink = eventLink;
      this.eventDate = eventDate;
      this.complaints = complaints;
    }
  }
  
  let tech = new EventType("78907623453", null, "Tech", "It is a general tech event");
  
  let webDevelopment = new EventType("789076543", tech, "Web Development", "It is a web development event");
  
  export { BaseUser, ConnectUser, EventFinderUser, UserVerification, EventType, Complaint, Event };
  