import nodemailer from 'nodemailer';

export async function POST(request: Request): Promise<Response> {
  // Debug delle variabili d'ambiente
  console.log('DEBUG - Environment Variables:');
  console.log('GMAIL_USER exists:', !!process.env.GMAIL_USER);
  console.log('GMAIL_APP_PASSWORD exists:', !!process.env.GMAIL_APP_PASSWORD);
  console.log('MAIL_TO exists:', !!process.env.MAIL_TO);
  console.log('All env variables:', process.env);

  // Prima di controllare le credenziali, vediamo cosa c'è
  const credentials = {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
    to: process.env.MAIL_TO
  };
  console.log('Credentials check:', {
    userPresent: !!credentials.user,
    passPresent: !!credentials.pass,
    toPresent: !!credentials.to
  });

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error('Missing email configuration - Details:');
    console.error('GMAIL_USER:', typeof process.env.GMAIL_USER);
    console.error('GMAIL_APP_PASSWORD:', typeof process.env.GMAIL_APP_PASSWORD);
    return new Response(
      JSON.stringify({ error: 'Server configuration error' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    const body = await request.json();
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.MAIL_TO || process.env.GMAIL_USER, // fallback all'user se MAIL_TO manca
      subject: `Nuovo messaggio da ${body.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #333;">Nuovo messaggio dal form di contatto</h2>
          <p><strong>Nome:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Messaggio:</strong></p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${body.message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    return new Response(
      JSON.stringify({ error: 'Errore nell\'invio dell\'email' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}