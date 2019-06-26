import React, { Fragment, useState, useContext, useEffect } from 'react';
import Alerts from '../layout/Alerts';
import RunnerContext from '../../context/runner/runnerContext';
import AlertContext from '../../context/alert/alertContext';

const SignUp = () => {
  const runnerContext = useContext(RunnerContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const { register, error, clearErrors } = runnerContext;

  useEffect(() => {
    if (error === 'A runner with that email has already registered') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error]);

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
    if (name === '' || email === '' || address === '' || city === '' || postal === '' || phone === '') {
      setAlert('Please enter all fields', 'danger');
    } else {
      setAlert('Registration has been submitted successfully', 'success');
      register({
        name,
        email,
        address,
        address2,
        city,
        state,
        postal,
        phone,
        distance,
      });
    }
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
  };

  return (
    <Fragment>
      <div className='container signup-form' style={{ minHeight: '70vh' }}>
        <h1 className='mb-5 text-center'>Easterseals Run | Sign-Up Form</h1>
        <Alerts />
        <div className='mb-5 border rounded border-orange pt-5 pb-2 px-4'>
          <form onSubmit={onSubmit}>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor='name' className='font-weight-bold'>
                  Name <span className='red-asterisk'>&#42;</span>
                </label>
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  className='form-control form-control-lg'
                  value={name}
                  onChange={onChange}
                  required
                />
              </div>
              <div className='form-group col-md-6'>
                <label htmlFor='email' className='font-weight-bold'>
                  Email <span className='red-asterisk'>&#42;</span>
                </label>
                <input
                  type='email'
                  placeholder='Email'
                  name='email'
                  className='form-control form-control-lg'
                  value={email}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor='address' className='font-weight-bold'>
                  Address <span className='red-asterisk'>&#42;</span>
                </label>
                <input
                  type='text'
                  placeholder='Address'
                  name='address'
                  className='form-control form-control-lg'
                  value={address}
                  onChange={onChange}
                  required
                />
              </div>
              <div className='form-group col-md-6'>
                <label htmlFor='address2' className='font-weight-bold'>
                  Address 2
                </label>
                <input
                  type='text'
                  placeholder='Apartment, studio, or floor'
                  name='address2'
                  className='form-control form-control-lg'
                  value={address2}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor='city' className='font-weight-bold'>
                  City <span className='red-asterisk'>&#42;</span>
                </label>
                <input
                  type='text'
                  placeholder='Miami'
                  name='city'
                  className='form-control form-control-lg'
                  value={city}
                  onChange={onChange}
                  required
                />
              </div>
              <div className='form-group col-md-4'>
                <label htmlFor='state' className='font-weight-bold'>
                  State <span className='red-asterisk'>&#42;</span>
                </label>
                <select name='state' className='form-control form-control-lg' onChange={onChange} value={state}>
                  <option value='AL'>AL</option>
                  <option value='AK'>AK</option>
                  <option value='AR'>AR</option>
                  <option value='AZ'>AZ</option>
                  <option value='CA'>CA</option>
                  <option value='CO'>CO</option>
                  <option value='CT'>CT</option>
                  <option value='DC'>DC</option>
                  <option value='DE'>DE</option>
                  <option value='FL'>FL</option>
                  <option value='GA'>GA</option>
                  <option value='HI'>HI</option>
                  <option value='IA'>IA</option>
                  <option value='ID'>ID</option>
                  <option value='IL'>IL</option>
                  <option value='IN'>IN</option>
                  <option value='KS'>KS</option>
                  <option value='KY'>KY</option>
                  <option value='LA'>LA</option>
                  <option value='MA'>MA</option>
                  <option value='MD'>MD</option>
                  <option value='ME'>ME</option>
                  <option value='MI'>MI</option>
                  <option value='MN'>MN</option>
                  <option value='MO'>MO</option>
                  <option value='MS'>MS</option>
                  <option value='MT'>MT</option>
                  <option value='NC'>NC</option>
                  <option value='ND'>ND</option>
                  <option value='NE'>NE</option>
                  <option value='NH'>NH</option>
                  <option value='NJ'>NJ</option>
                  <option value='NM'>NM</option>
                  <option value='NV'>NV</option>
                  <option value='NY'>NY</option>
                  <option value='OH'>OH</option>
                  <option value='OK'>OK</option>
                  <option value='OR'>OR</option>
                  <option value='PA'>PA</option>
                  <option value='RI'>RI</option>
                  <option value='SC'>SC</option>
                  <option value='SD'>SD</option>
                  <option value='TN'>TN</option>
                  <option value='TX'>TX</option>
                  <option value='UT'>UT</option>
                  <option value='VT'>VT</option>
                  <option value='VA'>VA</option>
                  <option value='WA'>WA</option>
                  <option value='WI'>WI</option>
                  <option value='WV'>WV</option>
                  <option value='WY'>WY</option>
                </select>
              </div>
              <div className='form-group col-md-2'>
                <label htmlFor='postal' className='font-weight-bold'>
                  Postal <span className='red-asterisk'>&#42;</span>
                </label>
                <input
                  type='text'
                  name='postal'
                  className='form-control form-control-lg'
                  value={postal}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor='phone' className='font-weight-bold'>
                  Phone <span className='red-asterisk'>&#42;</span>
                </label>
                <input
                  type='tel'
                  placeholder='Phone'
                  name='phone'
                  className='form-control form-control-lg'
                  value={phone}
                  onChange={onChange}
                  required
                />
              </div>
              <div className='form-group col-md-6'>
                <label htmlFor='distance' className='font-weight-bold'>
                  Distance <span className='red-asterisk'>&#42;</span>
                </label>
                <select name='distance' className='form-control form-control-lg' onChange={onChange} value={distance}>
                  <option value='1 Mile'>1 Mile</option>
                  <option value='5K'>5K</option>
                  <option value='10K'>10K</option>
                </select>
              </div>
            </div>

            <div className='row mt-4 justify-content-between px-4 pt-1 pb-2'>
              <input type='submit' value='Submit Registration' className='btn btn-block bg-orange mb-3' />
            </div>
          </form>
        </div>
      </div>

      <hr />

      <div className='mt-3'>
        <div className='text-center'>
          <h4>Easterseals</h4>
          <p>
            16105 Schaefer Pike, Pompano Beach, Florida 33060 | <i className='fas fa-phone-volume' />{' '}
            <a href='tel:800-221-6827'>800-221-6827</a> (toll-free) Easterseals and its affiliate organizations are
            501(c)(3) nonprofit organizations.
          </p>
          <p>
            <small>
              All images provided by <a href='https://unsplash.com/'>Unsplash.com</a>
            </small>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
