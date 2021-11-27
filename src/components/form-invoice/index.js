import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { formStage, formInvoice } from '../../store/rootSlice'
import './styles.scss';

function FormUserInvoice({ pageTitle, submitButtonText, previousButton }) {

  const dispatch = useDispatch();

  const currentStage = useSelector(state => state.FormStage)
  const formstageBank = useSelector(state => state.FormUserInvoice.name)
  const formstageAmount = useSelector(state => state.FormUserInvoice.amount)
  const option1 = useSelector(state => state.FormUserInvoice.option1)
  const option2 = useSelector(state => state.FormUserInvoice.option2)

  const state = useSelector(state => state)
  const stateOutput = (`JSON Data Form-invoice: ${JSON.stringify(state, null, 2)}`)

  const [formData, setFormData] = useState({
    bank: formstageBank || "",
    amount: formstageAmount || "",
  })

  const [isChecked1, setIsChecked1] = useState(option1 || false);
  const [isChecked2, setIsChecked2] = useState(option2 || false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleChange1 = (e) => {
    setIsChecked1(!isChecked1);
  }

  const handleChange2 = (e) => {
    setIsChecked2(!isChecked2);
  }

  const [errors, setErrors] = useState({})
  const validate = (formData) => {

    let formErrors = {}

    const emailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!formData.bank || !emailRegex.test(formData.bank)) {
      formErrors.bank = 'Valid Email required';
    }

    const numberRegex = new RegExp('^[0-9]*$')
    if (!formData.amount || !numberRegex.test(formData.amount)) {
      formErrors.amount = 'Valid amount required';
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
        formStage(3)
      )
      dispatch(
        formInvoice({
          email: formData.bank,
          amount: formData.amount,
          id: "workid.png",
          receipt: "receipt.png",
          option1: isChecked1,
          option2: isChecked2
        })
      );

    }

  }, [isSubmitted, dispatch, stateOutput, formData, isChecked1, isChecked2, errors])

  return (
    <>
      <h2>{pageTitle || 'Invoice'}</h2>
      <form
        name="form-invoice"
        id="form-invoice"
        onSubmit={handleSubmit}
      >
        <p>
          <label htmlFor="Bank">Paypal/Venmo Email</label>
          <input
            type="text"
            id="bank"
            name="bank"
            autoComplete="bank"
            aria-label="bank"
            aria-required="true"
            placeholder="email"
            value={formData.bank}
            onChange={handleChange}
          />
        </p>
        {errors.bank && <span className="error-message">{errors.bank}</span>}

        <p>
          <label htmlFor="amount">Ride Fare (USD)</label>
          <input
            type="text"
            id="bank"
            name="amount"
            autoComplete="amount"
            aria-label="amount"
            aria-required="true"
            placeholder="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </p>
        {errors.amount && <span className="error-message">{errors.amount}</span>}

        <p>
          <label htmlFor="number">Work ID
            <input type="file" />
          </label>
        </p>

        <p>
          <label htmlFor="number">Reciept
            <input type="file" />
          </label>
        </p>

        <p className="form-boxes">
          <input
            type="checkbox"
            id="option1"
            name="option1"
            onChange={handleChange1}
            checked={isChecked1}
          />
          <label htmlFor="option1">Recieve updates about the invoice via email you provided.</label>
        </p>

        <p className="form-boxes">
          <input
            type="checkbox"
            id="option2"
            name="option2"
            onChange={handleChange2}
            checked={isChecked2}
          />
          <label htmlFor="option2">Recieve SMS message when the invoice has been approved.</label>
        </p>

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

export default FormUserInvoice;
