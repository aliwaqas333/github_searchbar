import React from 'react';
import logo from './logo.svg';
import {Box, Container } from '@material-ui/core';
import PrimarySearchAppBar from "./components/PrimarySearchAppBar/PrimarySearchAppBar"
import SearchBar from "./components/searchBar/SearchBar"
function App() {
  return (
    <>
    <PrimarySearchAppBar/>
    <Container maxWidth="md" className="bg-dark">
    <SearchBar/>
    </Container>
    </>
  );
}

export default App;
