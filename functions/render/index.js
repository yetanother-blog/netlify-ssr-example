exports.handler = async () => {
  return {
    statusCode: 200,
    body: `
      <html>
        <head>
        <link rel="stylesheet" href="styles.css">
        </head>
        <body>
          <h1>Hello from the server :)</h1>
          <p>${new Date().toISOString()}</p>
        </body>
      </html>
    `
  }
}