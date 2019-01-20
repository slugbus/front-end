package database

import (
	"log"

	"cloud.google.com/go/firestore"
	"golang.org/x/net/context"

	firebase "firebase.google.com/go"

	"google.golang.org/api/option"
)

var Client *firestore.Client

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
