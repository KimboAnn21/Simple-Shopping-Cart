function Button (props) {
    // Returns a DOM element here. For example:
    return <button type="submit">{props.label}</button>;
  }
  
  // To render a Button element in the browser
  ReactDOM.render(
    <Button label="AddToCart" />, 
    document.getElementById('mountNode')
  );