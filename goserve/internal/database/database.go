package database

import (
	"log"

	"cloud.google.com/go/firestore"
	"golang.org/x/net/context"

	firebase "firebase.google.com/go"

	"google.golang.org/api/option"
)

// A DummyResponse is a struct
// that represent the data output
// from the server
type DummyResponse struct {
	Buses []struct {
		Angle float64 `json:"Angle"`
		ID    string  `json:"ID"`
		Lat   float64 `json:"Lat"`
		Lon   float64 `json:"Lon"`
		Speed float64 `json:"Speed"`
		Type  string  `json:"Type"`
	} `json:"buses"`
	Time int `json:"time"`
}

// Client is a an authenticated reference to our fire
// store db
var Client *firestore.Client

// This init function logs in to firebase
// and sets Client
func init() {
	opt := option.WithCredentialsFile(".keys/firebase.json")
	app, err := firebase.NewApp(context.Background(), nil, opt)
	if err != nil {
		log.Printf("error initializing app: %v", err)
	}
	Client, err = app.Firestore(context.Background())
	if err != nil {
		log.Printf("error initializing app: %v", err)
	}
}
