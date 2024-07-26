export default class Building {
  constructor(sqft) {
      this._sqft = sqft;
  }

  // Getter for the 'sqft' attribute
  get sqft() {
      return this._sqft;
  }

  // Abstract method: subclasses must override this
  evacuationWarningMessage() {
      throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}
