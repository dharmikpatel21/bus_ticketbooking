import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    Id: 1,
    Name: "John Doe",
    Email: "johndoe@example.com",
    seat_number: "A1",
    date_of_booking: "2024-03-05",
  },
  {
    Id: 2,
    Name: "Jane Smith",
    Email: "janesmith@example.com",
    seat_number: "B2",
    date_of_booking: "2024-03-06",
  },
  {
    Id: 3,
    Name: "Alice Johnson",
    Email: "alicejohnson@example.com",
    seat_number: "C3",
    date_of_booking: "2024-03-07",
  },
  {
    Id: 4,
    Name: "Bob Brown",
    Email: "bobbrown@example.com",
    seat_number: "D4",
    date_of_booking: "2024-03-08",
  },
  {
    Id: 5,
    Name: "Emily Davis",
    Email: "emilydavis@example.com",
    seat_number: "E5",
    date_of_booking: "2024-03-09",
  },
  {
    Id: 6,
    Name: "Michael Wilson",
    Email: "michaelwilson@example.com",
    seat_number: "F6",
    date_of_booking: "2024-03-10",
  },
  {
    Id: 7,
    Name: "Sarah Martinez",
    Email: "sarahmartinez@example.com",
    seat_number: "G7",
    date_of_booking: "2024-03-11",
  },
  {
    Id: 8,
    Name: "David Taylor",
    Email: "davidtaylor@example.com",
    seat_number: "H8",
    date_of_booking: "2024-03-12",
  },
  {
    Id: 9,
    Name: "Olivia Anderson",
    Email: "oliviaanderson@example.com",
    seat_number: "I9",
    date_of_booking: "2024-03-13",
  },
  {
    Id: 10,
    Name: "James Thomas",
    Email: "jamesthomas@example.com",
    seat_number: "J10",
    date_of_booking: "2024-03-14",
  },
  {
    Id: 11,
    Name: "Sophia White",
    Email: "sophiawhite@example.com",
    seat_number: "K11",
    date_of_booking: "2024-03-15",
  },
  {
    Id: 12,
    Name: "Daniel Garcia",
    Email: "danielgarcia@example.com",
    seat_number: "L12",
    date_of_booking: "2024-03-16",
  },
  {
    Id: 13,
    Name: "Mia Martinez",
    Email: "miamartinez@example.com",
    seat_number: "M13",
    date_of_booking: "2024-03-17",
  },
  {
    Id: 14,
    Name: "William Hernandez",
    Email: "williamhernandez@example.com",
    seat_number: "N14",
    date_of_booking: "2024-03-18",
  },
  {
    Id: 15,
    Name: "Sophia Rodriguez",
    Email: "sophiarodriguez@example.com",
    seat_number: "O15",
    date_of_booking: "2024-03-19",
  },
  {
    Id: 16,
    Name: "James Smith",
    Email: "jamessmith@example.com",
    seat_number: "P16",
    date_of_booking: "2024-03-20",
  },
  {
    Id: 17,
    Name: "Benjamin Gonzalez",
    Email: "benjamingonzalez@example.com",
    seat_number: "Q17",
    date_of_booking: "2024-03-21",
  },
  {
    Id: 18,
    Name: "Emma Nelson",
    Email: "emmanelson@example.com",
    seat_number: "R18",
    date_of_booking: "2024-03-22",
  },
  {
    Id: 19,
    Name: "Lucas Adams",
    Email: "lucasadams@example.com",
    seat_number: "S19",
    date_of_booking: "2024-03-23",
  },
  {
    Id: 20,
    Name: "Isabella Carter",
    Email: "isabellacarter@example.com",
    seat_number: "T20",
    date_of_booking: "2024-03-24",
  },
];

const Dashboard = () => {
  return (
    <Table>
      <TableCaption>A list of ticket bookings.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Seat Number</TableHead>
          <TableHead>Date of booking</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.Id}>
            <TableCell className="font-medium">{item.Id}</TableCell>
            <TableCell>{item.Name}</TableCell>
            <TableCell>{item.Email}</TableCell>
            <TableCell>{item.seat_number}</TableCell>
            <TableCell>{item.date_of_booking}</TableCell>
            <TableCell>
              <button
                type="button"
                className="bg-black text-white rounded-lg  w-[70px] py-1"
              >
                Edit
              </button>
            </TableCell>
            <TableCell>
              <button
                type="button"
                className="bg-black text-white rounded-lg  w-[70px] py-1"
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
  );
};

export default Dashboard;
