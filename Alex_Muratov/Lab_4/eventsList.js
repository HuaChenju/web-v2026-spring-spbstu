import {eventsListFiller} from "./eventsListFiller.js"
import {Event} from "./event.js"

document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("EventsList")){

        const newEventsList = [];
        eventsListFiller(20,newEventsList)

        localStorage.setItem("EventsList",JSON.stringify(newEventsList));

    }
})


function sortByDate(events) {
    return events.sort((a,b) => a.date - b.date);
}

function groupByDate(events) {
    const sortedEvents = sortByDate(events)
    const dateGroup = {};

    for (let event of sortedEvents){

        const curDate = event.date;

        if (!dateGroup[curDate]){
            dateGroup[curDate] = [];
        }
        dateGroup[curDate].push(event);
    }
    return dateGroup;
}

function groupByParticipantsCount(events){
    const countGroup = {};

    for (let event of events){
        const participantsCount = event.participantCount;
        console.log(event.participantCount)

        if ( !countGroup[participantsCount]){
            countGroup[participantsCount] = [];
        }
        countGroup[participantsCount].push(event);
    }
    return countGroup;
}

function getParticipantList(events) {
    const participantList = new Set();

    for (let event of  events){
        for ( let participant of event.participants){
            participantList.add(participant);
        }
    }
    return participantList;
}

function getPersonEvents(events,person){
    return events.filter((event) => event.participants.includes(person))
}

const parsedList = JSON.parse(localStorage.getItem("EventsList"))

console.log(getParticipantList(parsedList));

console.log(getPersonEvents(parsedList,"Андрей Васильев"));

console.log(groupByDate(parsedList ));

console.log(groupByParticipantsCount(parsedList));