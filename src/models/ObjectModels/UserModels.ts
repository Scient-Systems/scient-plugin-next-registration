import mongoose from "mongoose";

interface BaseUserInterface {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  role: string;
}

interface ConnectUserInterface {
  businessCards: string[];
  contacts: string[];
  plan: String;
  role: String;
  customerId?: String;
}

interface EventFInderUserInterface {
  events: Event[];
  complaints: Complaint[];
  role: String;
  review?: String[];
}

interface UserVerificationInterface {
  isVerified: boolean;
  verifyCode?: string;
  verifyCodeExpiry?: Date;
  resetToken?: string;
  resetTokenExpiry?: Date;
}
class EventType {
    eventTypeId:string
    parent?:EventType
    eventTypeName:string
    eventTypeDescription?:string
}

class Complaint {
  complaintId: string;
  referenceId: string;
  userId: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
class Event {
    eventId:string
    eventName: string;
    eventVenue: string;
    eventAddress?: string;
    eventCity: string;
    eventCountry: string;
    eventOwnerId:String;
    verified: boolean;
    verifiedById:string;
    hostName: string;
    price: number| string ;
    eventTypeId: string
    description: string;
    rating: number;
    imageUri: string;
    eventLink: string;
    eventDate: Date;
    complaints?: Complaint[]
  }

let tech =new EventType(
    "78907623453",
    null,
    "Tech",
    "it is a general tech event"
)
let webDevelopement=new EventType(
    "789076543",
     tech,
    "Tech",
    "it is a webdevelpoment event"
)