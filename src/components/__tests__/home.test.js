import { render, screen, cleanup } from '@testing-library/react'
import { Router, BrowserRouter } from 'react-router-dom';
import Cocktails from '../Cocktails';
import Footer from '../Footer';
import Home from '../Home';
import Picker from '../Picker';
import Create from '../Create';
import List from '../List';
import Login from '../Login';
import Navigation from '../Navigation';
import ShowCocktail from '../ShowCocktail';
import Update from '../Update';

// Cocktails Tests
test('should render cocktails component', () => {
    const arr = { 0: "Vodka", 1: "Sweet" };

    render(
        <BrowserRouter>
            <Cocktails message="arr" />
        </BrowserRouter>)

    const cocktail = screen.getByTestId("cocktail");
    expect(cocktail).toBeInTheDocument();
    //expect(cocktail).toHaveTextContent("Mar");
})


// Footer Tests
test('should render footer component', () => {
    render(<Footer />)
})


// Home Tests
test('should render home component', () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>)
})

// Picker Tests
test('should render picker component', () => {
    render(<Picker />)
})

// Create Tests
test('should render create component', () => {
    render(
        <BrowserRouter>
            <Create />
        </BrowserRouter>);
    // Checking the form is in the component
    const formElement = screen.getByTestId('create-form');
    expect(formElement).toBeInTheDocument;

})

// List Tests
test('should render List component', () => {
    render(
        <BrowserRouter>
            <List />
        </BrowserRouter>)

    // const cocktail = screen.getByTestId("cocktail");
    // expect(cocktail).toBeInTheDocument();
    // expect(cocktail).toHaveTextContent("Martini");
    const cocktail = screen.getByRole('table');
    expect(cocktail).toBeInTheDocument();
    expect(cocktail).toHaveTextContent("Martini");
})


// Login Tests
test('should render login component', () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>)
})

// Navigation Tests
test('should render navigation component', () => {
    render(
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>)
})

// ShowCocktail Tests
test('should render showcocktail component', () => {
    render(
        <BrowserRouter>
            <ShowCocktail />
        </BrowserRouter>)
})

test('should render update component', () => {
    render(
        <BrowserRouter>
            <Update />
        </BrowserRouter>)
})