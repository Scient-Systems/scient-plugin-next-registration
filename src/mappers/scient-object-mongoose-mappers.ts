
import { Event } from "../models/classes/EventCLass";
interface ORMObject<T> {
    toORM(): any;
  }
  
//   User Mapper
  export class UserMapper implements ORMObject<UserMapper> {
    userId: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    role: string;
  
    constructor(data: any) {
      this.userId = data.userId;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.userName = data.userName;
      this.email = data.email;
      this.password = data.password;
      this.role = data.role;
    }
  
    toORM() {
      return {
        userId: this.userId,
        firstName: this.firstName,
        lastName: this.lastName,
        userName: this.userName,
        email: this.email,
        password: this.password,
        role: this.role,
      };
    }
  
    static fromORM(data: any): UserMapper {
      return new UserMapper(data);
    }
  }
  
//  Event Mapper
  export class EventMapper {
    static ObjectToMongoMapper(event: Event) {
      return {
        eventId: event.eventId,
        eventName: event.eventName,
        eventVenue: event.eventVenue,
        eventCity: event.eventCity,
        eventCountry: event.eventCountry,
        eventOwnerId: event.eventOwnerId,
        verified: event.verified,
        verifiedById: event.verifiedById,
        hostName: event.hostName,
        price: event.price,
        eventTypeId: event.eventTypeId,
        description: event.description,
        rating: event.rating,
        imageUri: event.imageUri,
        eventLink: event.eventLink,
        eventDate: event.eventDate,
        complaints: event.complaints || [],
      };
    }
  
    static MongoToObjectMapper(data: any): Event {
      return new Event(
        data.eventId,
        data.eventName,
        data.eventVenue,
        data.eventCity,
        data.eventCountry,
        data.eventOwnerId,
        data.verified,
        data.verifiedById,
        data.hostName,
        data.price,
        data.eventTypeId,
        data.description,
        data.rating,
        data.imageUri,
        data.eventLink,
        new Date(data.eventDate),
        data.complaints || []
      );
    }
  }
  
// Complaint Mapper 
  export class ComplaintMapper implements ORMObject<ComplaintMapper> {
    complaintId: string;
    referenceId: string;
    userId: string;
    description: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
  
    constructor(data: any) {
      this.complaintId = data.complaintId;
      this.referenceId = data.referenceId;
      this.userId = data.userId;
      this.description = data.description;
      this.status = data.status;
      this.createdAt = new Date(data.createdAt);
      this.updatedAt = new Date(data.updatedAt);
    }
  
    toORM() {
      return {
        complaintId: this.complaintId,
        referenceId: this.referenceId,
        userId: this.userId,
        description: this.description,
        status: this.status,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
      };
    }
  
    static fromORM(data: any): ComplaintMapper {
      return new ComplaintMapper(data);
    }
  }
  