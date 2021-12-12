import React, { useState, useEffect } from "react";
import {
    Card,
    CardColumns,
    Col,
    Jumbotron,
    Container,
    Form,
    Button,
} from "react-bootstrap";
import Auth from "../utils/auth";
//import { useMutation } from "@apollo/client";


export default function Intro() {
     const [stories, setStories] = useState({});   
    // set up save function 
    // pull from local storage or from data base
    // use effect to save 
    // also use useState and useMutation

    // formsubmit function
    //has to target form



    // var Airtable = require('airtable');
    // Airtable.configure({
    //     endpointUrl: 'https://api.airtable.com',
    //     apiKey: 'apprXO8priGdh1rRp.'
    // });
    // var base = Airtable.base('apprXO8priGdh1rRp');

    // useEffect(() => {
    //     fetch("https://api.airtable.com/v0/appM9q6JTxRolaNCN/recipes?api_key=apprXO8priGdh1rRp.")
    //       .then((res) => res.json())
    //       .then((data) => {
    //         setStories(data.records);
    //         console.log(data);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }, []);

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     // if (!searchInput) {
    //     //     return false;
    //     // }
    //     try {

    //         if (!response.ok) {
    //             throw new Error("something went wrong!");
    //         }
    //         const { records } = await response.json();

    //         const dataD = records.map((record) => ({
    //             storyId: record.fields.Id,
    //             name: record.fields.charcters
    //         }));

    //         setStories(dataD);
          
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    return (
        <>
        <h1>
            homepage dude
        </h1>
            {/* <Jumbotron fluid className="text-light bg-info">
                <Container>
                    <h1>Search for Recipes!</h1>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Row>
                            <Col xs={12} md={8}>
                                <Form.Control
                                    name="searchInput"
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    type="text"
                                    size="lg"
                                    placeholder="Search for a recipe"
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <Button type="submit" variant="success" size="lg">
                                    Submit Search
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Container>
            </Jumbotron>
            <Container>
                <h2>
                    {searchedRecipes.length
                        ? `Viewing ${searchedRecipes.length} results:`
                        : "Search for a recipe to begin"}
                </h2>
                <CardColumns>
                    {searchedRecipes.map((recipe) => {
                        return (
                            <Card key={recipe.foodId} border="dark">
                                {recipe.image ? (
                                    <Card.Img
                                        src={recipe.image}
                                        alt={`The cover for ${recipe.title}`}
                                        variant="top"
                                    />
                                ) : null}
                                <Card.Body>
                                    <Card.Title style={{ textAlign: "center" }}> {recipe.label}</Card.Title>
                                    <Button href={recipe.link} target="_blank" className="btn-block btn-info">
                                        Recipe
                                    </Button>
                                    {Auth.loggedIn() && (
                                        <Button
                                            disabled={savedRecipeIds?.some(
                                                (savedRecipeId) => savedRecipeId === recipe.foodId
                                            )}
                                            className="btn-block btn-info"
                                            onClick={() => handleSaveRecipe(recipe.foodId)}>

                                            {savedRecipeIds?.some(
                                                (savedRecipeId) => savedRecipeId === recipe.foodId
                                            )
                                                ? "This recipe has already been saved!"
                                                : "Save this Recipe!"}
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                        );
                    })}
                </CardColumns>
            </Container> */}
        </>
    );
}
