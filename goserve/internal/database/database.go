package database

import (
	"log"

	"cloud.google.com/go/firestore"
	"golang.org/x/net/context"

	firebase "firebase.google.com/go"

	"google.golang.org/api/option"
)

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
