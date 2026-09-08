function Profile(){
  return (
    <img 
      src="https://react.dev/images/docs/scientists/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  );
}

function Gallary(){
  return(
    <section>
      <h1>Amazing Scientists</h1>
      <Profile></Profile>
      <Profile></Profile>
      <Profile></Profile>
    </section>
  );
}

export default Gallary;
