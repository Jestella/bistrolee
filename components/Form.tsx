import Button from '../ui/Button/Button';
import PickDate from './DatePicker';

import formStyles from '../styles/Form.module.scss';

function Form() {
  const bookTable = async (event) => {
    event.preventDefault();
    // event.target.reset();

    const res = await fetch(
      'https://hooks.zapier.com/hooks/catch/123456/abcde',
      {
        body: JSON.stringify({
          name: event.target.name.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    );

    const result = await res.json();
    // result.name => 'Stella Lee'
  };

  return (
    <>
      <form onSubmit={bookTable} className={formStyles.form}>
        <p>
          <label htmlFor='date'>
            Date / Time
            <br />
          </label>
          <PickDate />
        </p>
        <p>
          <label htmlFor='partysize'>Party size</label> <br />
          <input type='number' name='number' id='partysize' required />
        </p>
        <p>
          <label htmlFor='name'>
            Name <br />
          </label>
          <input id='name' type='text' autoComplete='name' required />
        </p>
        <p>
          <label htmlFor='youremail'>Email</label> <br />
          <input type='email' name='email' id='youremail' required />
        </p>
        <p>
          <label htmlFor='message'>Special requests?</label> <br />
          <textarea name='message' id='message'></textarea>
        </p>

        {/* <p>
          <label class='switch'>
            <input type='checkbox' name='switch' id='switch' value='switch' />
            <span class='switch-label' data-on='YES' data-off='NO'></span>
            <span>Birthday or aniversary?</span>
          </label>
        </p> */}
      </form>

      <Button variant='dark' size='large' type='submit'>
        Book now
      </Button>
    </>
  );
}

export default Form;
