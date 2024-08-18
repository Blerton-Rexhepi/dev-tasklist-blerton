import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface Booking {
  id: string;
  doctor_name: string;
  service: string;
  end_time: string;
}

export default function BookingDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [booking, setBooking] = useState<Booking | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch booking details using id
      fetch(`/api/bookings/${id}`)
        .then((res) => res.json())
        .then((data: Booking) => setBooking(data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  return (
    <div>
      <h2>Booking Details</h2>
      {booking ? (
        <div>
          This Booking is with {booking.doctor_name} for {booking.service} and
          it ends at {booking.end_time}.
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link href="/">Back</Link>
    </div>
  );
}
