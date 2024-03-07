import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const fetchData = async () => {
  const loadData = await fetch("http://localhost:3004/bookings", {
    cache: "no-store",
  });
  return await loadData.json();
};

const Dashboard = async () => {
  const bookings = await fetchData();
  return (
    <section>
      <div className="border-2 border-gray-600 rounded-lg">
        <Table>
          <TableCaption>A list of ticket bookings.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Seat Number</TableHead>
              <TableHead>Date of booking</TableHead>
              <TableHead>Phone Number</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.selectedSeats.join(",")}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>
                  <button
                    type="button"
                    className="bg-gray-600 text-white rounded-lg  w-[70px] py-1"
                  >
                    Edit
                  </button>
                </TableCell>
                <TableCell>
                  <button
                    type="button"
                    className="bg-gray-600 text-white rounded-lg  w-[70px] py-1"
                  >
                    save
                  </button>
                </TableCell>
                <TableCell>
                  <button
                    type="button"
                    className="bg-rose-400/30 border border-red-600 text-rose-600 rounded-lg  w-[70px] py-1"
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Dashboard;
