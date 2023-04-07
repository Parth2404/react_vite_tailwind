import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { EventData } from "./ethers/types";
import { getEventsData } from "./ethers/connection";
import EventsTable from "./components/table";

function App() {
    const [eventList, setEventList] = useState(Array<EventData>);

    useEffect(() => {
        // Start lisitning for events
        getEventsData((from: string, to: string, value: string, event: string) => {
            eventList.push({ from, to, value, event });
            setEventList([...eventList]);
        });
    }, []);

    return (
        <div className="App flex flex-col content-center">
            <EventsTable
                headings={["Sr No", "from", "to", "value", "trx detail", "event name"]}
                data={eventList}
            />
            <p className="text-xs mt-2">
                {eventList.length == 0 ? "No events emitted yet, please wait..." : ""}
            </p>
        </div>
    );
}

export default App;

