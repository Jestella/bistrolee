import Button from '../ui/Button/Button';

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
      <form onSubmit={bookTable}>
        <p>
          <label htmlFor='partysize'>Party size</label> <br />
          <input type='number' name='number' id='partysize' required />
        </p>
        <p>
          <label htmlFor='date'>
            Date <br />
          </label>
          <input
            id='date'
            type='date'
            autoComplete='date'
            minlength='10'
            maxlength='20'
            required
          />
        </p>

        <p>
          <label htmlFor='time'>
            Time <br />
          </label>
          <input id='time' type='time' autoComplete='time' required />
        </p>
        <p>
          <label htmlFor='name'>
            Name <br />
          </label>
          <input
            id='name'
            type='text'
            autoComplete='name'
            required
            minlength='10'
            maxlength='20'
          />
        </p>
        <p>
          <label htmlFor='youremail'>Email</label> <br />
          <input type='email' name='email' id='youremail' required />
        </p>
        <p>
          <label htmlFor='message'>Any requests?</label> <br />
          <textarea name='message' id='message'></textarea>
        </p>

        <p>
          <label class='switch'>
            <input type='checkbox' name='switch' id='switch' value='switch' />
            <span class='switch-label' data-on='YES' data-off='NO'></span>
            <span>Birthday or aniversary?</span>
          </label>
        </p>
      </form>

      <Button variant='dark' size='large' type='submit'>
        Book now
      </Button>
    </>
  );
}

export default Form;
