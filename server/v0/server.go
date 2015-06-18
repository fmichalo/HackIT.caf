package main

import (
    _"fmt"
    "net/http"
    "log"
    "encoding/json"
)

type Module struct {
	Name string `json:"name"`
	Size int 	`json:"size"`
	Data interface{} `json:"data"`
}

type listModules struct {
    List []Module `json:"modules"`
}

func postModules(rw http.ResponseWriter, req *http.Request) {

    decoder := json.NewDecoder(req.Body)
    var t listModules   
    err := decoder.Decode(&t)
    if err != nil {
        //panic()
    }
    parseList(t.List)

}

func parseList(l []Module) {
	//log.Println(l)

	for _, mod := range l {
		log.Println(mod.Name)
	}
}

func main() {
  fs := http.FileServer(http.Dir("html"))
  http.Handle("/", fs)
  http.HandleFunc("/modules", postModules)
 

  log.Println("Listening...")
  http.ListenAndServe(":3000", nil)
}