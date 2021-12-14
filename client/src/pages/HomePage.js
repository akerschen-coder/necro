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
    // hook for the data to be set into 
     const [stories, setStories] = useState({});

    // set up save function 
    // pull from local storage or from data base--
    // use effect to save 
    // also use useState and useMutation

    // formsubmit function
    // has to target form 


    // make function to link to charcters other items - swords, horses, etc
        // fetch to api record.id.name.

    
    // secondary 

        // twitch stream chat eventually on the side
            // figma

        // click on click on click in a tree (refer image on 12/11/21)
            // click on 
            //auto scroll up
            // modal ontop of homepage 
            // must be able to scroll up and down to see different entries 
            // probably store in website -> website database 
            // go to the page if wanted by button 
            // max 16 posts- WP make elements -> embedded blog post inside a blog post 
            // verification of who wins- graded by admins 
      
    const onLoad = async (event) => {
        //event.preventDefault();
        // if (!searchInput) {
        //     return false;
        // }
        try {
            var Airtable = require('airtable');
            Airtable.configure({
                endpointUrl: 'https://api.airtable.com',
                apiKey: 'keyu8gUpzMHsUAyo2'
            });
            var base = Airtable.base('apprXO8priGdh1rRp');

            const portals = base('Portals');

            const getPortals = async () => {
                const getRecords = await portals.select().firstPage();
                console.log(getRecords);
            }
            getPortals();
        
            //   const response = await fetch(`https://api.airtable.com/v0/appM9q6JTxRolaNCN/?api_key=apprXO8priGdh1rRp.`)
            // if (!response.ok) {
            //     throw new Error("something went wrong!");
            // }
            // console.log(response);
    //         const { records } = await response.json();

    //         const dataD = records.map((record) => ({
    //             storyId: record.fields.Id,
    //             name: record.fields.charcters,
    //             description: record.fields.description
    //         })); 
    //         console.log(dataD);
    
    // //create another fetch pull that grabs age, stars/likes/ tags/ author

    //         setStories(dataD);
          
        } catch (err) {
            console.error(err);
        }
    };

    onLoad();

    return (
        <>
        <h1>
            Fuck this authtificaiton shitklghjdilgha
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
                                            disabled={savedCharIds?.some(
                                                (savedRecipeId) => savedRecipeId === recipe.foodId
                                            )}
                                            className="btn-block btn-info"
                                            onClick={() => handleSaveChar(record.foodId)}>

                                            {savedRecipeIds?.some(
                                                (savedRecipeId) => savedRecipeId === recipe.foodId
                                            )
                                                ? "This recipe has already been saved!"
                                                : "Save this Character!"}
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
