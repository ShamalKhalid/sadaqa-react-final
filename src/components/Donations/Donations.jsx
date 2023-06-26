import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../../db";
import Footer from "../Home/Footer";

const dateTimeFormatter = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

function Donations() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  const filterDate = (date) => {
    if (!from || !to) return true;
    const fromDate = new Date(from);
    const toDate = new Date(to);
    const currDate = new Date(date);
    return currDate >= fromDate && currDate <= toDate;
  };

  const getData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "Donations"));
    setData(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="donationHistory">
        <div className="input-group mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="From"
            aria-label="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <span className="input-group-text">to</span>
          <input
            type="date"
            className="form-control"
            placeholder="To"
            aria-label="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Cause</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={100} className="text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              data
                .filter(({ date }) => filterDate(date))
                .map(({ id, name, amount, cause, date }) => (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{cause}</td>
                    <td>{dateTimeFormatter.format(new Date(date))}</td>
                    <td>{amount}</td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
        <button
          className="btn btn-primary refresh"
          onClick={async () => await getData()}
        >
          Refresh
        </button>
      </div>
      <div>
        <footer className="DonateFooter">©Sadaqa-2023</footer>
      </div>
    </div>
  );
}

export default Donations;
