import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { formStage, formInfo } from '../../store/rootSlice'
import './styles.scss';

function FormUserInfo({ pageTitle, submitButtonText, previousButton }) {

  const dispatch = useDispatch();

  const currentStage = useSelector(state => state.FormStage)
  const formstageName = useSelector(state => state.FormUserInfo.name)
  const formstageWork = useSelector(state => state.FormUserInfo.work)
  const formstageAddress = useSelector(state => state.FormUserInfo.address)
  const formstageWaddress = useSelector(state => state.FormUserInfo.waddress)
  const formstageEmail = useSelector(state => state.FormUserInfo.email)
  const formstageNumber = useSelector(state => state.FormUserInfo.number)

  const [formData, setFormData] = useState({
    name: formstageName || "",
    work: formstageWork || "",
    address: formstageAddress || "",
    waddress: formstageWaddress || "",
    email: formstageEmail || "",
    number: formstageNumber || "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const [errors, setErrors] = useState({})
  const validate = (formData) => {

    let formErrors = {}

    if (!formData.name) {
      formErrors.name = "Name required";
    }

    if (!formData.work) {
      formErrors.work = "Work required";
    }

    if (!formData.address) {
      formErrors.address = "Home Address required";
    }

    if (!formData.waddress) {
      formErrors.waddress = "Work Address required";
    }

    const emailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!formData.email || !emailRegex.test(formData.email)) {
      formErrors.email = 'Valid Email required';
    }

    const numberRegex = new RegExp('^[0-9]*$')
    if (!formData.number || !numberRegex.test(formData.number)) {
      formErrors.number = 'Valid number required';
    }

    return formErrors
  }

  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formData))
    setIsSubmitted(true)
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {

      dispatch(
        formStage(2)
      )
      dispatch(
        formInfo({
          name: formData.name,
          work: formData.work,
          address: formData.address,
          waddress: formData.waddress,
          email: formData.email,
          number: formData.number
        })
      );
    }

  }, [formData, isSubmitted, dispatch, errors])
  return (
    <>
      <h2>{pageTitle || 'Info'}</h2>
      <form
        name="form-signup"
        id="form-signup"
        onSubmit={(e) => handleSubmit(e)}
      >
        <p>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            aria-label="name"
            aria-required="true"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
          />
        </p>
        {errors.name && <span className="error-message">{errors.name}</span>}

        <p>
          <label htmlFor="work">Work</label>
          <input
            type="text"
            id="work"
            name="work"
            autoComplete="work"
            aria-label="work"
            aria-required="true"
            placeholder="work"
            value={formData.work}
            onChange={handleChange}
          />
        </p>
        {errors.work && <span className="error-message">{errors.work}</span>}

        <p>
          <label htmlFor="address">Home Address</label>
          <input
            type="text"
            id="address"
            name="address"
            autoComplete="address"
            aria-label="address"
            aria-required="true"
            placeholder="home address"
            value={formData.address}
            onChange={handleChange}
          />
        </p>
        {errors.address && <span className="error-message">{errors.address}</span>}
        <p>
          <label htmlFor="add">Work Address</label>
          <input
            type="text"
            id="waddress"
            name="waddress"
            autoComplete="add"
            aria-label="waddress"
            aria-required="true"
            placeholder="work address"
            value={formData.waddress}
            onChange={handleChange}
          />
        </p>
        {errors.waddress && <span className="error-message">{errors.waddress}</span>}
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            aria-label="email"
            aria-required="true"
            placeholder="email@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </p>
        {errors.email && <span className="error-message">{errors.email}</span>}
        <p>
          <label htmlFor="number">Mobile No.</label>
          <input
            type="text"
            id="number"
            name="number"
            aria-label="number"
            aria-required="true"
            placeholder="1234567890"
            value={formData.number}
            onChange={handleChange}
          />
        </p>
        {errors.number && <span className="error-message">{errors.number}</span>}

        <div className="btn-array">
          {(previousButton) &&
            <p>
              <input
                type="submit"
                value={`Back`}
                onClick={() => dispatch(formStage(currentStage - 1))}
              />
            </p>
          }
          <p>
            <input
              type="submit"
              value={submitButtonText || 'Submit'}
            />
          </p>
        </div>
      </form>
    </>
  );
}

export default FormUserInfo;