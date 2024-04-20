import EventCalendar from "./EventCalendar.solution";
import { addDays, subDays } from "date-fns";
import React from "react";
const App = () => {
  return (
    <div className="">
      <EventCalendar
        events={[
          { date: subDays(new Date(), 6), title: "Post video" },
          { date: subDays(new Date(), 1), title: "Edit video" },
          { date: addDays(new Date(), 3), title: "Code" },
        ]}
      />
    </div>
  );
};

export default App;
