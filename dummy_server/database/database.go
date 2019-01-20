package database

import (
	"log"

	"cloud.google.com/go/firestore"
	"golang.org/x/net/context"

	firebase "firebase.google.com/go"

	"google.golang.org/api/option"
)

// Client is ref to a firestore client.
var Client *firestore.Client

func init() {
	// Login with our firebase json.
	opt := option.WithCredentialsFile("firebase.json")
	// Init the app.
	app, err := firebase.NewApp(context.Background(), nil, opt)
	if err != nil {
		log.Printf("error initializing app: %v", err)
	}
	// Create a client ref.
	Client, err = app.Firestore(context.Background())
	if err != nil {
		log.Printf("error initializing app: %v", err)
	}
}
