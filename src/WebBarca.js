 const WebBarca = () => {
    return (
      <div className="App">
        <div classjugadors>
        <h1>Jugadors del Barça</h1>
        <iframe
          src="https://www.fcbarcelona.com/en/football/first-team/players"
          title="Web oficial del FC Barcelona"
          width="100%"
          height="700"
          style={{ border: '2px solid #a50044', borderRadius: '12px' }}
        ></iframe>
       </div>
      </div>
    );
  }

export default WebBarca;