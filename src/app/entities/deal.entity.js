class Deal {
  title;
  value;
  currency;
  addTime;

  constructor(props) {
    Object.assign(this, props);
  }
}

export { Deal };
