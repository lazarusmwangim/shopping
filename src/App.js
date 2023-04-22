import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listShoppingLists } from "./graphql/queries";
import {
  createShoppingList as createListMutation,
  deleteShoppingList as deleteListMutation,
} from "./graphql/mutations";

const App = ({ signOut }) => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    fetchShoppingList();
  }, []);

  async function fetchShoppingList() {
    const apiData = await API.graphql({ query: listShoppingLists });
    const listsFromAPI = apiData.data.listShoppingLists.items;
    setItem(listsFromAPI);
  }

  async function createShoppingList(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      price: form.get("price"),
      image: form.get("image"),
    };

    await API.graphql({
      query: createListMutation,
      variables: { input: data },
    });
    fetchShoppingList();
    //event.target.reset();
  }

  async function deleteItem({ id }) {
    const newItem = items.filter((note) => note.id !== id);
    setItem(newItem);
    await API.graphql({
      query: deleteListMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App">
      <Heading level={1}>My Shopping List App</Heading>
      <View as="form" margin="3rem 0" onSubmit={createShoppingList}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Item Name"
            label="Item Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Item Description"
            label="Item Description"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="price"
            placeholder="Item Price"
            label="Item Price"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="image"
            placeholder="Item Image"
            label="Item Image"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Item
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Items</Heading>
      <View margin="3rem 0">
        {items.map((item) => (
          <Flex
            key={item.id || item.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {item.name}
            </Text>
            <Text as="span">{item.description}</Text>
            <Text as="span">{item.price}</Text>
            <Text as="span">{item.image}</Text>
            <Button variation="link" onClick={() => deleteItem(item)}>
              Delete Item
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);
