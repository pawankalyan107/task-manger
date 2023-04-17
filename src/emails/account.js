import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'vpawankalyan107@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

export const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'vpawankalyan107@gmail.com',
    subject: 'Thanks for having with us.',
    text: `GoodBye ${name}.`
  })
}