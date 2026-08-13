export const MINISTER = {
  name: "Sri Vakiti Srihari",
  designation: "Minister for Animal Husbandry, Dairy Development and Fisheries, Sports and Youth Services",
  office: "2nd Floor, Secretariat, Hyderabad, Telangana",
};

export type Officer = {
  name: string;
  designation: string;
  location: string;
  phone: string;
  email?: string;
};

export const STATE_OFFICERS: Officer[] = [
  { name: "Sri K Chandra Sekhar Reddy, IAS", designation: "Managing Director (FAC)", location: "1st Floor, Vijaya Bhavan, Lalapet, Tarnaka, Hyderabad-500017", phone: "040-27019233", email: "mdtgddcf@gmail.com" },
  { name: "Sri Madhusudhan Rao", designation: "General Manager PI - Projects", location: "Vijaya Bhavan, Lalapet, Tarnaka, Hyderabad", phone: "9121160553", email: "gmpitgddcf24@gmail.com" },
  { name: "Sri S. Srinivasa Raju", designation: "General Manager Mkt-Institutions", location: "Vijaya Bhavan, Lalapet, Tarnaka, Hyderabad", phone: "9686271707", email: "gmmktginst.tgddcf@gmail.com" },
  { name: "Sri E Mallaiah", designation: "General Manager Mega Dairy", location: "Mega Dairy, Raviryala", phone: "9849456238", email: "megadairy.tgddcf@gmail.com" },
  { name: "Sri S. Srinivasa Raju", designation: "General Manager, Mkt-Civil", location: "Vijaya Bhavan, Lalapet, Tarnaka, Hyderabad", phone: "9686271707", email: "gmmktg.tgddcf@gmail.com" },
  { name: "Sri V. Mallikarjuna Rao", designation: "General Manager Production", location: "Vijaya Bhavan, Lalapet, Tarnaka, Hyderabad", phone: "9121160514", email: "gmmpf.tgddcf@gmail.com" },
  { name: "Sri K. Devender Kumar", designation: "Superintending Engineer (Civil)", location: "Vijaya Bhavan, Lalapet, Tarnaka, Hyderabad", phone: "9121160559", email: "setgddcf@gmail.com" },
  { name: "Sri P. Mohan Murali", designation: "Deputy Director (LMS)", location: "Vijaya Bhavan, Lalapet, Tarnaka, Hyderabad", phone: "9121160550", email: "lms.tgddcf@gmail.com" },
  { name: "Dr. N Lakshmi Manjusha", designation: "Deputy Director (Coordination)", location: "Vijaya Bhavan, Lalapet, Tarnaka, Hyderabad", phone: "8121826100", email: "coordinationtgddcf@gmail.com" },
  { name: "Smt. A Prasanna", designation: "Personnel Officer", location: "Vijaya Bhavan, Lalapet, Tarnaka, Hyderabad", phone: "9121160560", email: "tgddcfestb@gmail.com" },
  { name: "Dr. K. Nanda Kumari", designation: "Deputy Director (Projects, VTC)", location: "Vijaya Bhavan, Lalapet, Tarnaka, Hyderabad", phone: "9121160558", email: "projects.tgddcf@gmail.com" },
  { name: "Smt. P. Lavanya", designation: "Accounts Officer, HO", location: "Vijaya Bhavan, Lalapet, Tarnaka, Hyderabad", phone: "9121160543", email: "hocash.tgddcf@gmail.com" },
  { name: "Sri K. Arun Kumar", designation: "DGM Marketing (Products)", location: "Vijaya Bhavan, Lalapet, Tarnaka, Hyderabad", phone: "9515060719", email: "gmmkt.tgddcf@gmail.com" },
  { name: "Sri Ch Suresh", designation: "Deputy Director (Procurement)", location: "Vijaya Bhavan, Lalapet, Tarnaka, Hyderabad", phone: "9121160535", email: "gmpi.tgddcf@gmail.com" },
  { name: "Sri G Dhanraj", designation: "Deputy Director (Upcountry Sales)", location: "Warangal", phone: "9121160512", email: "ddupcountrysales.tgddcf@gmail.com" },
  { name: "Sri Reddy Kunsothu", designation: "SAO (MPF - Mega)", location: "Vijaya Bhavan, Lalapet, Tarnaka, Hyderabad", phone: "9121160533", email: "aompftgddcf@gmail.com" },
];

export const UNIT_OFFICERS: Officer[] = [
  { name: "Sri U. Nageswara Rao", designation: "Deputy Director, FGS and Dispatch", location: "Mega Dairy, Raviryala", phone: "7330815211" },
  { name: "Sri B Raj Kumar", designation: "Dy. Director Production", location: "Mega Dairy, Raviryala", phone: "9121160542", email: "fgsection@gmail.com" },
  { name: "Sri R Krishna", designation: "Asst Dairy Engineer", location: "Mega Dairy, Raviryala", phone: "9121160561" },
  { name: "Sri K Ramesh", designation: "Deputy Director", location: "Sangareddy", phone: "9121160528", email: "ddsrd.tgddcf@gmail.com" },
  { name: "Sri G. Dhanraj", designation: "Deputy Director", location: "Warangal", phone: "9121160584", email: "ddwar.tgddcf@gmail.com" },
  { name: "Sri B Ramesh", designation: "Deputy Director", location: "Nizamabad", phone: "9121160556", email: "gmnzb.tgddcf@gmail.com" },
  { name: "Sri K. Ramesh", designation: "Deputy Director (FAC)", location: "Siddipet", phone: "9121160538", email: "ddsdpt.tgddcf@gmail.com" },
  { name: "Sri K. Ravi Kumar", designation: "Deputy Director", location: "Khammam", phone: "9121160540", email: "ddkhm.tgddcf@gmail.com" },
  { name: "Sri N. Gopal Singh", designation: "Deputy Director", location: "Jangaon", phone: "9121160564", email: "ddjan.tgddcf@gmail.com" },
  { name: "Sri D. Satyanarayana Yadav", designation: "Deputy Director", location: "Mahabubnagar", phone: "9121160583", email: "ddmbnrtgddcf@gmail.com" },
  { name: "Sri G. Pradeep", designation: "Deputy Director", location: "Bhuvanagiri", phone: "9121160522", email: "ddnlg.tgddcf@gmail.com" },
  { name: "Sri B. Srinivas", designation: "Deputy Director", location: "Nirmal", phone: "9121160536", email: "ddadbtgddcf@gmail.com" },
  { name: "Dr. K. Shivalkar Yadav", designation: "Quality Control Officer", location: "Mega Dairy, Raviryala", phone: "9121160575", email: "qcompfhyd86@gmail.com" },
  { name: "Smt. H. Kavitha", designation: "Deputy Director", location: "Shadnagar", phone: "9121160563", email: "ddrr.tgddcf@gmail.com" },
  { name: "Sri R. Anil Kumar", designation: "Deputy Director", location: "Kalwakurthy", phone: "9121160539", email: "ddngkltgddcf@gmail.com" },
];
