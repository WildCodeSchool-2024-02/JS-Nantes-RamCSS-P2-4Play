function EndMessage({ endMessage, insult }) {
  return (
    <>
      <div>{endMessage}</div>
      <div> {insult.slang}</div>
      <div>{insult.def_fr}</div>
      <div>{insult.def_en} </div>
    </>
  );
}

export default EndMessage;
// add conditional logic in
