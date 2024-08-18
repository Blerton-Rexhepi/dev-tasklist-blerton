import Link from "next/link";

interface Booking {
  id: string;
  date: string;
  start_time: string;
}

interface BookingListProps {
  bookings: Booking[];
}

export default function BookingList({ bookings }: BookingListProps) {
  return (
    <div>
      <h2>Your Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            <Link href={`/booking/${booking.id}`}>
              A Booking on {booking.date} starting at {booking.start_time}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
