class Storage {
  constructor(itemsArr) {
    this.items = itemsArr;
  }

  getItems(items) {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(arrItem) {
    this.items.reduce((item, items) => {
      if (items === arrItem) {
        return item;
      }
    }, []);
  }
}

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);
const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
storage.addItem("Дроїд");
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
