import {
  Timeline,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
  TimelineContent
} from "@/components/ui/timeline";
import { Itinerary } from "@/lib/types/itinerary";
import Image from "next/image";

export default function TimelineComponent({itinerary}: {itinerary: Itinerary[]}) {
  return (
    <Timeline className="w-full" defaultValue={3}>
      {itinerary.map(({ day, title, activities, dayImage }, index) => (
        <TimelineItem
          className="sm:group-data-[orientation=vertical]/timeline:ms-32"
          key={day}
          step={index}
        >
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate className="sm:group-data-[orientation=vertical]/timeline:-left-32 sm:group-data-[orientation=vertical]/timeline:absolute sm:group-data-[orientation=vertical]/timeline:w-20 sm:group-data-[orientation=vertical]/timeline:text-right">
              {day}
            </TimelineDate>
            <TimelineTitle>{title}</TimelineTitle>

            {activities.map((activity, index) => (<TimelineContent key={index}>{activity}</TimelineContent>))}

            <div className="relative w-full h-100 mt-4">
              <Image src={dayImage} alt={`Day ${index + 1} image`} fill className="object-cover" />
            </div>

            <TimelineIndicator />
          </TimelineHeader>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
