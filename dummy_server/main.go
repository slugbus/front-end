package main

import (
	"flag"
	"net/http"
)

func handleQueryAll(w http.ResponseWriter, r *http.Request) {

	// Ping the database by initint the database package

}

func main() {
	// Grab the addess/port to bind to.
	flag.String("a", "0.0.0.0:8080", "the address/port to bind to")
	flag.Parse()

	// Make a multiplexer for http, the default one is fine.
	router := http.NewServeMux()

	// Add some routes to it
	router.HandleFunc("/query-all", handleQueryAll)

}
