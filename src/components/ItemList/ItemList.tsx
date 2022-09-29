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
      setErrorMsg("the price must be > 0");
      return false;
    }

    setItemList([...itemList, { name: itemName, value: itemValue }]);
  }

  return (
    <form onSubmit={(e) => addItemList(e)}>
      <input name="itemname" className={inputCss} type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder="Insert the name" />
      <input name="itemvalue" className={inputCss} type="number" value={itemValue} onChange={(e) => setItemValue(parseFloat(e.target.value))} placeholder="Insert the price" />
      <button className={buttonCss} type="submit">Insert</button>
      <div className="error_message py-4 text-red-600 font-bold">{errorMsg}</div>
    </form>
  )
}

const ItemValueList = ({ itemList, setItemList }) => {
  const removeItem = (id) => {
    console.log(id);
    setItemList(itemList.filter(item => item.id !== id));
  }

  return (
    <>
      {
        itemList.length && itemList.map((item) => {
          return (<div key={item.id} className="item flex w-2/3">
            <div className="item__name flex-auto w-64">{item.name}</div>
            <div className="item__price flex-auto w-64">{formatValue(item.value)}</div>
            <div className="item__close" onClick={() => removeItem(item.id)}>X</div>
          </div>);
        }
        )
      }
    </>
  )
};

export default ItemList;


/*
- both fields are populated before the user can submit their entry. 
- do not allow number values less than zero or more precise than two digits after the decimal. 
- In the value column, append a dollar sign before each number.
*/