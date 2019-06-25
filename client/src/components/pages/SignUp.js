import React, { Fragment, useState, useContext } from 'react'
import Footer from '../layout/Footer'
import RunnerContext from '../../context/runner/runnerContext';

const SignUp = () => {
  const runnerContext = useContext(RunnerContext);

  const [runner, setRunner] = useState({
    name: '',
    email: '',
    address: '',
    address2: '',
    city: 'Miami',
    state: 'FL',
    postal: '',
    phone: '',
    distance: '5K',
  });

  const { name, email, address, address2, city, state, postal, phone, distance } = runner;

  const onChange = e => setRunner({ ...runner, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    runnerContext.addRunner(runner);
    setRunner({
      name: '',
      email: '',
      address: '',
      address2: '',
      city: 'Miami',
      state: 'FL',
      postal: '',
      phone: '',
      distance: '5K',
    });
  }

  return (
    <Fragment>
    <div className="signup-form">
      <h1 className="mb-5 text-center">Easterseals Run | Sign-Up Form</h1>

      <div className="container mb-5 border rounded border-orange pt-5 pb-2 px-4">
        <form onSubmit={onSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name" className="font-weight-bold">Name <span className="red-asterisk">&#42;</span></label>
              <input
                type="text"
                placeholder='Name'
                name="name"
                className="form-control form-control-lg"
                value={name}
                onChange={onChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email" className="font-weight-bold">Email <span className="red-asterisk">&#42;</span></label>
              <input
              type="email"
              placeholder="Email"
              name="email"
              className="form-control form-control-lg"
              value={email}
              onChange={onChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="address" className="font-weight-bold">Address <span className="red-asterisk">&#42;</span></label>
              <input
                type="text"
                placeholder="Address"
                name="address"
                className="form-control form-control-lg"
                value={address}
                onChange={onChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="address2" className="font-weight-bold">Address 2</label>
              <input
              type="text"
              placeholder="Apartment, studio, or floor"
              name="address2"
              className="form-control form-control-lg"
              value={address2}
              onChange={onChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="city" className="font-weight-bold">City <span className="red-asterisk">&#42;</span></label>
              <input
              type="text"
              placeholder="Miami"
              name="city"
              className="form-control form-control-lg"
              value={city}
              onChange={onChange}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="state" className="font-weight-bold">State <span className="red-asterisk">&#42;</span></label>
              <select
              name="state"
              className="form-control form-control-lg"
              onChange={onChange}
              >
                <option selected={state === 'AL'} value="AL">AL</option>
                <option selected={state === 'AK'} value="AK">AK</option>
                <option selected={state === 'AR'} value="AR">AR</option>
                <option selected={state === 'AZ'} value="AZ">AZ</option>
                <option selected={state === 'CA'} value="CA">CA</option>
                <option selected={state === 'CO'} value="CO">CO</option>
                <option selected={state === 'CT'} value="CT">CT</option>
                <option selected={state === 'DC'} value="DC">DC</option>
                <option selected={state === 'DE'} value="DE">DE</option>
                <option selected={state === 'FL'} value='FL'>FL</option>
                <option selected={state === 'GA'} value="GA">GA</option>
                <option selected={state === 'HI'} value="HI">HI</option>
                <option selected={state === 'IA'} value="IA">IA</option>
                <option selected={state === 'ID'} value="ID">ID</option>
                <option selected={state === 'IL'} value="IL">IL</option>
                <option selected={state === 'IN'} value="IN">IN</option>
                <option selected={state === 'KS'} value="KS">KS</option>
                <option selected={state === 'KY'} value="KY">KY</option>
                <option selected={state === 'LA'} value="LA">LA</option>
                <option selected={state === 'MA'} value="MA">MA</option>
                <option selected={state === 'MD'} value="MD">MD</option>
                <option selected={state === 'ME'} value="ME">ME</option>
                <option selected={state === 'MI'} value="MI">MI</option>
                <option selected={state === 'MN'} value="MN">MN</option>
                <option selected={state === 'MO'} value="MO">MO</option>
                <option selected={state === 'MS'} value="MS">MS</option>
                <option selected={state === 'MT'} value="MT">MT</option>
                <option selected={state === 'NC'} value="NC">NC</option>
                <option selected={state === 'ND'} value="ND">ND</option>
                <option selected={state === 'NE'} value="NE">NE</option>
                <option selected={state === 'NH'} value="NH">NH</option>
                <option selected={state === 'NJ'} value="NJ">NJ</option>
                <option selected={state === 'NM'} value="NM">NM</option>
                <option selected={state === 'NV'} value="NV">NV</option>
                <option selected={state === 'NY'} value="NY">NY</option>
                <option selected={state === 'OH'} value="OH">OH</option>
                <option selected={state === 'OK'} value="OK">OK</option>
                <option selected={state === 'OR'} value="OR">OR</option>
                <option selected={state === 'PA'} value="PA">PA</option>
                <option selected={state === 'RI'} value="RI">RI</option>
                <option selected={state === 'SC'} value="SC">SC</option>
                <option selected={state === 'SD'} value="SD">SD</option>
                <option selected={state === 'TN'} value="TN">TN</option>
                <option selected={state === 'TX'} value="TX">TX</option>
                <option selected={state === 'UT'} value="UT">UT</option>
                <option selected={state === 'VT'} value="VT">VT</option>
                <option selected={state === 'VA'} value="VA">VA</option>
                <option selected={state === 'WA'} value="WA">WA</option>
                <option selected={state === 'WI'} value="WI">WI</option>
                <option selected={state === 'WV'} value="WV">WV</option>
                <option selected={state === 'WY'} value="WY">WY</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="postal" className="font-weight-bold">Postal <span className="red-asterisk">&#42;</span></label>
              <input
              type="text"
              name="postal"
              className="form-control form-control-lg"
              value={postal}
              onChange={onChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="phone" className="font-weight-bold">Phone <span className="red-asterisk">&#42;</span></label>
              <input
              type="tel"
              placeholder="Phone"
              name="phone"
              className="form-control form-control-lg"
              value={phone}
              onChange={onChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="distance" className="font-weight-bold">Distance <span className="red-asterisk">&#42;</span></label>
              <select
              name="distance"
              className="form-control form-control-lg"
              onChange={onChange}
              >
                <option selected={distance === '1 Mile'} value="1 Mile">1 Mile</option>
                <option selected={distance === '5K'} value="5K">5K</option>
                <option selected={distance === '10K'} value="10K">10K</option>
              </select>
            </div>
          </div>

          <div className="row mt-4 justify-content-between px-4 pt-1 pb-2">
            <input
              type="submit"
              value="Submit Registration"
              className="btn btn-block bg-orange mb-3"
            />
          </div>

        </form>
      </div>
    </div>

    <hr />

    <div class="mt-3">
      <div class="text-center">
        <h4>Easterseals</h4>
        <p>
          16105 Schaefer Pike, Pompano Beach, Florida 33060 | <i class="fas fa-phone-volume"></i> <a href="tel:800-221-6827">800-221-6827</a> (toll-free) Easterseals and its affiliate
          organizations are 501(c)(3) nonprofit organizations.
        </p>
        <p>
          <small>All images provided by <a href="https://unsplash.com/">Unsplash.com</a></small>
        </p>
      </div>
    </div>

    <Footer />
    </Fragment>
  )
}

export default SignUp;
