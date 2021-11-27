import React from 'react'
import { useSelector } from 'react-redux'
import IMGgreentick from '../../assets/imgs/green-tick.svg';
import { Webhook, MessageBuilder } from 'discord-webhook-node';
import './styles.scss';

function FormUserResult({ pageTitle, successMessage }) {

  // Get Redux Form State and output to JSON format
  const state = useSelector(state => state)
  const stateOutput = (`Summary: ${JSON.stringify(state, null, 2)}`)

  const hook = new Webhook("https://discord.com/api/webhooks/913441817024929872/38WjHzABkaBLJhO5MEgcq-FLpY5T0Lcdu3EgIz2S7NIHjhMN93A3GIWltnifNbinOLRH");
  const embed = new MessageBuilder()
    .setTitle('Request Form')
    .setColor('#28e4e9')
    .addField(`Name:`, `${state.FormUserInfo.name}`, true)
    .addField(`Work:`, `${state.FormUserInfo.work}`, true)
    .addField(`Address:`, `${state.FormUserInfo.address}`, true)
    .addField(`Work Address:`, `${state.FormUserInfo.waddress}`, true)
    .addField(`Email:`, `${state.FormUserInfo.email}`, true)
    .addField(`Mobile Number:`, `${state.FormUserInfo.number}`, true)
    .addField(`Paypal/Venmo email:`, `${state.FormUserInvoice.email}`, true)
    .addField(`Ride Price:`, `${state.FormUserInvoice.amount}$ usd`, true)
    .addField(`Work ID:`, `[click to view](https://google.com)`, true)
    .addField(`Receipt:`, `[click to view](https://google.com)`, true)
    .addField(`Option 1:`, `${state.FormUserInvoice.option1}`, true)
    .addField(`Option 2:`, `${state.FormUserInvoice.option2}`, true)
    .addField(`JSON data:`, `\`\`\`${stateOutput}\`\`\``)
    .setFooter('Stellar')
    .setTimestamp();

  hook.send(embed);

  return (
    <>
      <div className="form-complete">
        <h2>{pageTitle || 'Confirmation'}</h2>
        <img
          className="fade-in-image"
          src={IMGgreentick}
          alt={successMessage || 'Success!'}
        />
        <p>
          {'Thank you, please wait for the updates about your invoice!'}
        </p>
      </div>
    </>

  );
}

export default FormUserResult;
