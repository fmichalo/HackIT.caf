package main

import (
    _"fmt"
    "net/http"
    "log"
    "encoding/json"
)

type test_struct struct {
    Test string
}

func postModules(rw http.ResponseWriter, req *http.Request) {
    decoder := json.NewDecoder(req.Body)
    var t test_struct   
    err := decoder.Decode(&t)
    if err != nil {
        //panic()
    }
    log.Println(t.Test)
}

func main() {
  fs := http.FileServer(http.Dir("html"))
  http.Handle("/", fs)
  http.HandleFunc("/modules", postModules)
 

  log.Println("Listening...")
  http.ListenAndServe(":3000", nil)
}