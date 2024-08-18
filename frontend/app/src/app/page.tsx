"use clint";
import BookingList from "./components/BookingList";
import { useRouter } from "next/navigation";

async function getBookings() {
  const res = await fetch("http://host.docker.internal:5000/api/bookings", {
    cache: "no-store",
    mode: "no-cors",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home: React.FC = async () => {
  const router = useRouter();
  const bookings = await getBookings();

  return (
    <div>
      <h1>Current booking count: {bookings.length}</h1>
      <BookingList bookings={bookings} />
    </div>
  );
};

export default Home;
