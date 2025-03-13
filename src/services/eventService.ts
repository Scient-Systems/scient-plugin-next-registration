import { EventModel } from "../models/schemas/EventSchema";
import { EventMapper } from "../mappers/scient-object-mongoose-mappers";
import { Event } from "../models/classes/EventCLass";
import { EVENT } from "../interface/UserInterface";


const DATA_STORE=process.env.DATA_STORE || 'MONGO';

// Create Event
export async function createEvent(eventData: EVENT) {
    const event = new Event(
      eventData.eventId,
      eventData.eventName,
      eventData.eventVenue,
      eventData.eventCity,
      eventData.eventCountry,
      eventData.eventOwnerId,
      eventData.verified,
      eventData.verifiedById,
      eventData.hostName,
      eventData.price,
      eventData.eventTypeId,
      eventData.description,
      eventData.rating,
      eventData.imageUri,
      eventData.eventLink,
      new Date(eventData.eventDate), 
      eventData.complaints ?? [] 
    );
    switch(DATA_STORE.toUpperCase()){
     case 'MONGO':
      const savedEvent = await new EventModel(EventMapper.ObjectToMongoMapper(event)).save();
      return EventMapper.MongoToObjectMapper(savedEvent);
     
     default: { 
      const savedEvent = await new EventModel(EventMapper.ObjectToMongoMapper(event)).save();
      return EventMapper.MongoToObjectMapper(savedEvent);}
    
    }
   
  }
  