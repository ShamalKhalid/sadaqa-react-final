import { addDoc, collection } from "firebase/firestore";
import React from "react";
import db from "../../db";
import HungerHeader from "./HungerHeader";

function hungerRelief() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    cause: "",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  function handleChange(e) {
    const field = e.target.name;
    const value = e.target.value;

    setForm((values) => {
      return { ...values, [field]: value };
    });

    console.log(form);
  }

  async function submit(e) {
    e.preventDefault();

    setIsSubmitting(true);

    await addDoc(collection(db, "Donations"), {
      name: form.name,
      email: form.email,
      phoneNumber: form.phone,
      cause: form.cause,
      amount: form.amount,
      date: new Date().toISOString(),
    });

    localStorage.setItem("amount", form.amount);
    localStorage.setItem("cause", form.cause);
    setIsSubmitting(false);
    window.location.href = "/payment.html";
  }
  return (
    <div>
      <HungerHeader />
      <div className="form-div">
        <form onSubmit={submit}>
          <div className="form-row">
          <div class="col-md-6">
          <label for="inputEmail4">Full Name</label>
          </div>
            <div className="form col-10">
              <input
                onChange={(e) => handleChange(e)}
                name="name"
                type="text"
                className="form-control"
                id="inputname4"
                placeholder="Enter Your Full Name"
                required
              />
            </div>
            </div>
            <div className="form-row">
            
            <div className="col-12">
              <label for="inputPassword4">Email Address</label>
              </div>
              <div className="form col-10">
              <input
                onChange={(e) => handleChange(e)}
                name="email"
                type="email"
                className="form-control"
                id="inputemail4"
                placeholder="Enter Your Email"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">Phone Number</label>

              <input
                name="phone"
                type="text"
                className="form-control"
                id="inputPhone"
                required
                minlength="10"
                pattern="\d{10}"
                title="Please enter exactly 10 digits"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group col-md-4">
              <label for="inputCause">Causes</label>
              <select
                name="cause"
                id="inputCause"
                className="form-control"
                required
                onChange={(e) => handleChange(e)}
                defaultValue=""
              >
                <option disabled value="">
                  Select Cause
                </option>
                <option value="General Pool">General Pool</option>
                <option value="Hunger Relief">Hungry Relief</option>
                <option value="Help the Ill">Help the ill</option>
                <option value="Education">Education</option>
              </select>
            </div>
            <div className="form-group col-3">
              <label for="inputAddress2">Amount</label>
              <input
                onChange={(e) => handleChange(e)}
                name="amount"
                type="number"
                className="form-control"
                id="inputAddress2"
                placeholder="INR"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {!isSubmitting && "Donate Now"}
            {isSubmitting && "Submitting"}
          </button>
        </form>
      </div>
      <footer className="HungerFooter">©Sadaqa-2023</footer>
    </div>
  );
}

export default hungerRelief;
