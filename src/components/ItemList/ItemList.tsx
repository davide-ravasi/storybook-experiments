import { useState } from "react";
import "./ItemList.css";

const formatValue = (itemValue) => {
  let formatting_options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }
  let dollarString = new Intl.NumberFormat("en-US", formatting_options);
  return dollarString.format(itemValue);
}

const ItemList = ({ items }) => {
  const [itemList, setItemList] = useState(items);

  return (
    <div className="itemlist-wrapper">
      <Form itemList={itemList} setItemList={setItemList} />
      <ItemValueList itemList={itemList} setItemList={setItemList} />
    </div>
  );
}

const Form = ({ itemList, setItemList }) => {
  const [itemName, setItemName] = useState("");
  const [itemValue, setItemValue] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  const inputCss = "shadow appearance-none border rounded w-full my-1 py-2 px-3";

  const buttonCss = "inline-block my-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full";

  const addItemList = (e) => {
    e.preventDefault();

    if (itemName === "" || itemValue === 0) {
      setErrorMsg("The values must not be empty");
      return false;
    }

    if (itemValue <= 0) {
      setErrorMsg("The price must be > 0");
      return false;
    }

    setItemList([...itemList, { id: Math.floor(Math.random() * 10) + 1, idname: itemName, value: itemValue }]);
  }

  return (
    <form onSubmit={(e) => addItemList(e)}>
      <label htmlFor="itemname">Insert the name</label>
      <input id="itemname" name="itemname" className={inputCss} type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder="Insert the name" />
      <label htmlFor="itemvalue">Insert the price</label>
      <input id="itemvalue" name="itemvalue" className={inputCss} type="number" value={itemValue} onChange={(e) => setItemValue(parseFloat(e.target.value))} placeholder="Insert the price" />
      <button className={buttonCss} type="submit">Insert</button>
      <div className="error_message py-4 text-red-600 font-bold" role="alert">{errorMsg}</div>
    </form>
  )
}

const ItemValueList = ({ itemList, setItemList }) => {
  const removeItem = (id: number) => {
    setItemList(itemList.filter(item => item.id !== id));
  }

  return (
    <div className="item-list-wrapper">
      <h1 id="items-heading">Item List</h1>
      <ul aria-labelledby="items-heading" className="item">
        {
          itemList.length && itemList.map((item) => {
            return (
              <li key={item.id} className="flex w-2/3">
                <span className="item__name flex-auto w-64">{item.id}</span>
                <span className="item__name flex-auto w-64">{item.name}</span>
                <span className="item__price flex-auto w-64">{formatValue(item.value)}</span>
                <span><button data-testId={'remove-' + item.id} className="item__close" onClick={() => removeItem(item.id)}>X</button></span>
              </li>
            );
          }
          )
        }
      </ul>
    </div>
  )
};

export default ItemList;


/*
- both fields are populated before the user can submit their entry. 
- do not allow number values less than zero or more precise than two digits after the decimal. 
- In the value column, append a dollar sign before each number.
*/