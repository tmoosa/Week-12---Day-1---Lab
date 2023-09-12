import React from 'react';

class NewFruit extends React.Component {
  render() {
    return (
      <div>
        <h1>New Fruit Page</h1>

        <form action="/fruits" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" /><br />

          <label htmlFor="color">Color:</label>
          <input type="text" id="color" name="color" /><br />

          <label htmlFor="readyToEat">Is Ready To Eat:</label>
          <input type="checkbox" id="readyToEat" name="readyToEat" /><br />

          <input type="submit" value="Create Fruit" />
        </form>
      </div>
    );
  }
}

export default NewFruit;
