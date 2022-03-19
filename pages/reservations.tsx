import Form from '../components/Form';

const Reservations = () => {
  return (
    <div>
      <h1>Book a table</h1>
      <div>
        <h3>Bistro Lee</h3>
        <p>100 St Clair W Ave. Toronto, ON, A1A 1A1</p>

        <Form />

        <p>Please wear a mask when entering the restaurant.</p>
      </div>
    </div>
  );
};

export default Reservations;
